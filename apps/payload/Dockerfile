FROM node:20-alpine AS alpine
ARG TURBO_VERSION=2
ARG APP_NAME=payload

# setup pnpm on the alpine base
FROM alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV
RUN corepack enable
RUN apk update
RUN apk add --no-cache curl

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY out/pnpm-lock.yaml /app/pnpm-lock.yaml
COPY out/pnpm-workspace.yaml /app/pnpm-workspace.yaml
COPY out/full/ .

# Must pass NODE_ENV=development to ensure dev deps get installed for build process
RUN NODE_ENV=development pnpm i

RUN pnpm build --filter=${APP_NAME}

FROM base AS runner
WORKDIR /app
EXPOSE 3000

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/${APP_NAME}/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/${APP_NAME}/.next/static ./apps/${APP_NAME}/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/${APP_NAME}/public ./apps/${APP_NAME}/public

USER nextjs

ENV PORT=3000
ENV HOSTNAME=0.0.0.0

WORKDIR /app/apps/${APP_NAME}

CMD ["node", "server.js"]
