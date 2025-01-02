# Fuzzy Fiesta

<!-- Description -->

## Quick Start

### Prerequisites

#### Required

- [![fnm][fnm-shield]][fnm-url] or [![nvm][nvm-shield]][nvm-url] or [![Node 20+][node-shield]][node-url]
- [![pnpm][pnpm-shield]][pnpm-url]

#### Optional

- [![vscode][vscode-shield]][vscode-url][^1]
- [![docker][docker-shield]][docker-url][^2]

### Setup Dependencies

1. Clone this repo

    ```sh
    git clone github.com/fusionary/fuzzy-fiesta.git
    ```

2. Use recommended node version (if using FNM)

    ```sh
    fnm use
    ```

3. Install node packages

    ```sh
    pnpm install
    ```

4. Copy `.env.keys` from 1Password vault to root of the repo

### Running the App

1. Start MongoDB (if using Docker)

    ```sh
    docker run --name mongo -d -p 27017:27017 mongo
    ```

2. Run your app

    <details>
    <summary>VSCode Run & Debug</summary>

   1. Go the __Run & Debug__ menu
   2. Select the app you want to run
   3. Click the play buton

    </details>

    <details>
    <summary>CLI</summary>

   ### Using the CLI

   You can run just the specific app you are working on as well as any dependencies. To do that identify the client application that you want to run by identifying the name in the `package.json` file that you want to execute. Then you use a command like the following from the root of the repo.

   ```sh
   pnpm dev --filter payload...
   ```

    </details>

## Devcontainer

This project contains a devcontainer definition. This means that the fastest way to get running is to open the devcontainer in VSCode and accept the prompts. Once this complete, you will have a full dev environment with MongoDB and can just run the commands above to start the app.

## Project Structure

```text
.act
  └─ extra configuration for act which is a tool for locally testing Github Actions
.devcontainer
  └─ devcontainer configuration (still in-flight)
.github
  └─ Issue templates & Github Actions workflow definitions
.vscode
  └─ Recommended extensions and settings for VSCode users
apps
  ├─ docs
  |   └─ Storybook instance for demonstrating component usage
  ├─ payload
  |   └─ NextJS with Payload setup
  └─ web
      └─ Basic NextJS instance
packages
  ├─ auth
  |   └─ Auth.js cookie authentication
  ├─ env
  |   └─ Type-safe environment variable configurations
  ├─ icons
  |   ├─ Curated list of approved icons
  |   ├─ Includes lucide react package
  |   └─ Icons must be exported in src/icons.ts to be visible
  ├─ layout
  |   ├─ Base NextJS layouts for extending
  |   └─ RootLayout includes <html> tags and can be used to configure NextJS fonts
  ├─ page
  |   └─ Base NextJS pages for extending
  ├─ payload
  |   ├─ Shared Paylod configuration
  |   ├─ Contains standard Payload configuration (access, blocks, collections, fields, etc.)
  |   └- Designed to be overridable by client apps
  ├─ redirects
  |   └- Standard logic for creeating redirects
  ├─ seo
  |   └- Helpers for generating robots.txt and sitemap
  ├─ svg
  |   └- Shared SVGs
  ├─ types
  |   └- Shared global types
  ├─ ui
  |   └- UI library
  └─ utils
      └- Shared utility functions that may be used by different packages
tooling
  ├─ eslint
  |   ├─ Shared eslint configurations.
  |   └─ These are global configurations that rarely need to be overridden.
  ├─ github
  |   └─ Shared Github Action steps
  ├─ prettier
  |   └─ shared prettier configuration
  ├─ storybook
  |   └─ shared storybook configuration
  ├─ tailwind
  |   └─ shared tailwind configuration
  ├─ themes
  |   └─ shared theme definitions
  └─ typescript
      └─ shared tsconfig you can extend from
```

[^1]: This project includes recommended VS Code extensions. While these extensions are optional your experience will be greatly enhanced by having them.
[^2]: Docker is the quickest/easiest way to start up MongoDB if you don't already have a server runing localy.

[docker-shield]: https://img.shields.io/badge/docker-20232A?style=for-the-badge&logoColor=1D63ED&logo=docker
[docker-url]: https://docker.com
[fnm-shield]: https://img.shields.io/badge/fnm-20232A?style=for-the-badge&logoColor=ffffff
[fnm-url]: https://fnm.vercel.app/
[node-url]: https://nodejs.org/
[nvm-shield]: https://img.shields.io/badge/nvm-20232A?style=for-the-badge&logo=nvm&logoColor=ffffff
[nvm-url]: https://github.com/nvm-sh/nvm
[pnpm-shield]: https://img.shields.io/badge/pnpm-20232A?style=for-the-badge&logo=pnpm&logoColor=f6922
[pnpm-url]: https://pnpm.io/installation
[vscode-shield]: https://img.shields.io/badge/vscode-20232A?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxtYXNrIGlkPSJtYXNrMCIgbWFzay10eXBlPSJhbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcwLjkxMTkgOTkuMzE3MUM3Mi40ODY5IDk5LjkzMDcgNzQuMjgyOCA5OS44OTE0IDc1Ljg3MjUgOTkuMTI2NEw5Ni40NjA4IDg5LjIxOTdDOTguNjI0MiA4OC4xNzg3IDEwMCA4NS45ODkyIDEwMCA4My41ODcyVjE2LjQxMzNDMTAwIDE0LjAxMTMgOTguNjI0MyAxMS44MjE4IDk2LjQ2MDkgMTAuNzgwOEw3NS44NzI1IDAuODczNzU2QzczLjc4NjIgLTAuMTMwMTI5IDcxLjM0NDYgMC4xMTU3NiA2OS41MTM1IDEuNDQ2OTVDNjkuMjUyIDEuNjM3MTEgNjkuMDAyOCAxLjg0OTQzIDY4Ljc2OSAyLjA4MzQxTDI5LjM1NTEgMzguMDQxNUwxMi4xODcyIDI1LjAwOTZDMTAuNTg5IDIzLjc5NjUgOC4zNTM2MyAyMy44OTU5IDYuODY5MzMgMjUuMjQ2MUwxLjM2MzAzIDMwLjI1NDlDLTAuNDUyNTUyIDMxLjkwNjQgLTAuNDU0NjMzIDM0Ljc2MjcgMS4zNTg1MyAzNi40MTdMMTYuMjQ3MSA1MC4wMDAxTDEuMzU4NTMgNjMuNTgzMkMtMC40NTQ2MzMgNjUuMjM3NCAtMC40NTI1NTIgNjguMDkzOCAxLjM2MzAzIDY5Ljc0NTNMNi44NjkzMyA3NC43NTQxQzguMzUzNjMgNzYuMTA0MyAxMC41ODkgNzYuMjAzNyAxMi4xODcyIDc0Ljk5MDVMMjkuMzU1MSA2MS45NTg3TDY4Ljc2OSA5Ny45MTY3QzY5LjM5MjUgOTguNTQwNiA3MC4xMjQ2IDk5LjAxMDQgNzAuOTExOSA5OS4zMTcxWk03NS4wMTUyIDI3LjI5ODlMNDUuMTA5MSA1MC4wMDAxTDc1LjAxNTIgNzIuNzAxMlYyNy4yOTg5WiIgZmlsbD0id2hpdGUiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swKSI+CjxwYXRoIGQ9Ik05Ni40NjE0IDEwLjc5NjJMNzUuODU2OSAwLjg3NTU0MkM3My40NzE5IC0wLjI3Mjc3MyA3MC42MjE3IDAuMjExNjExIDY4Ljc1IDIuMDgzMzNMMS4yOTg1OCA2My41ODMyQy0wLjUxNTY5MyA2NS4yMzczIC0wLjUxMzYwNyA2OC4wOTM3IDEuMzAzMDggNjkuNzQ1Mkw2LjgxMjcyIDc0Ljc1NEM4LjI5NzkzIDc2LjEwNDIgMTAuNTM0NyA3Ni4yMDM2IDEyLjEzMzggNzQuOTkwNUw5My4zNjA5IDEzLjM2OTlDOTYuMDg2IDExLjMwMjYgMTAwIDEzLjI0NjIgMTAwIDE2LjY2NjdWMTYuNDI3NUMxMDAgMTQuMDI2NSA5OC42MjQ2IDExLjgzNzggOTYuNDYxNCAxMC43OTYyWiIgZmlsbD0iIzAwNjVBOSIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kKSI+CjxwYXRoIGQ9Ik05Ni40NjE0IDg5LjIwMzhMNzUuODU2OSA5OS4xMjQ1QzczLjQ3MTkgMTAwLjI3MyA3MC42MjE3IDk5Ljc4ODQgNjguNzUgOTcuOTE2N0wxLjI5ODU4IDM2LjQxNjlDLTAuNTE1NjkzIDM0Ljc2MjcgLTAuNTEzNjA3IDMxLjkwNjMgMS4zMDMwOCAzMC4yNTQ4TDYuODEyNzIgMjUuMjQ2QzguMjk3OTMgMjMuODk1OCAxMC41MzQ3IDIzLjc5NjQgMTIuMTMzOCAyNS4wMDk1TDkzLjM2MDkgODYuNjMwMUM5Ni4wODYgODguNjk3NCAxMDAgODYuNzUzOCAxMDAgODMuMzMzNFY4My41NzI2QzEwMCA4NS45NzM1IDk4LjYyNDYgODguMTYyMiA5Ni40NjE0IDg5LjIwMzhaIiBmaWxsPSIjMDA3QUNDIi8+CjwvZz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfZCkiPgo8cGF0aCBkPSJNNzUuODU3OCA5OS4xMjYzQzczLjQ3MjEgMTAwLjI3NCA3MC42MjE5IDk5Ljc4ODUgNjguNzUgOTcuOTE2NkM3MS4wNTY0IDEwMC4yMjMgNzUgOTguNTg5NSA3NSA5NS4zMjc4VjQuNjcyMTNDNzUgMS40MTAzOSA3MS4wNTY0IC0wLjIyMzEwNiA2OC43NSAyLjA4MzI5QzcwLjYyMTkgMC4yMTE0MDIgNzMuNDcyMSAtMC4yNzM2NjYgNzUuODU3OCAwLjg3MzYzM0w5Ni40NTg3IDEwLjc4MDdDOTguNjIzNCAxMS44MjE3IDEwMCAxNC4wMTEyIDEwMCAxNi40MTMyVjgzLjU4NzFDMTAwIDg1Ljk4OTEgOTguNjIzNCA4OC4xNzg2IDk2LjQ1ODYgODkuMjE5Nkw3NS44NTc4IDk5LjEyNjNaIiBmaWxsPSIjMUY5Q0YwIi8+CjwvZz4KPGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm92ZXJsYXkiIG9wYWNpdHk9IjAuMjUiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcwLjg1MTEgOTkuMzE3MUM3Mi40MjYxIDk5LjkzMDYgNzQuMjIyMSA5OS44OTEzIDc1LjgxMTcgOTkuMTI2NEw5Ni40IDg5LjIxOTdDOTguNTYzNCA4OC4xNzg3IDk5LjkzOTIgODUuOTg5MiA5OS45MzkyIDgzLjU4NzFWMTYuNDEzM0M5OS45MzkyIDE0LjAxMTIgOTguNTYzNSAxMS44MjE3IDk2LjQwMDEgMTAuNzgwN0w3NS44MTE3IDAuODczNjk1QzczLjcyNTUgLTAuMTMwMTkgNzEuMjgzOCAwLjExNTY5OSA2OS40NTI3IDEuNDQ2ODhDNjkuMTkxMiAxLjYzNzA1IDY4Ljk0MiAxLjg0OTM3IDY4LjcwODIgMi4wODMzNUwyOS4yOTQzIDM4LjA0MTRMMTIuMTI2NCAyNS4wMDk2QzEwLjUyODMgMjMuNzk2NCA4LjI5Mjg1IDIzLjg5NTkgNi44MDg1NSAyNS4yNDZMMS4zMDIyNSAzMC4yNTQ4Qy0wLjUxMzMzNCAzMS45MDY0IC0wLjUxNTQxNSAzNC43NjI3IDEuMjk3NzUgMzYuNDE2OUwxNi4xODYzIDUwTDEuMjk3NzUgNjMuNTgzMkMtMC41MTU0MTUgNjUuMjM3NCAtMC41MTMzMzQgNjguMDkzNyAxLjMwMjI1IDY5Ljc0NTJMNi44MDg1NSA3NC43NTRDOC4yOTI4NSA3Ni4xMDQyIDEwLjUyODMgNzYuMjAzNiAxMi4xMjY0IDc0Ljk5MDVMMjkuMjk0MyA2MS45NTg2TDY4LjcwODIgOTcuOTE2N0M2OS4zMzE3IDk4LjU0MDUgNzAuMDYzOCA5OS4wMTA0IDcwLjg1MTEgOTkuMzE3MVpNNzQuOTU0NCAyNy4yOTg5TDQ1LjA0ODMgNTBMNzQuOTU0NCA3Mi43MDEyVjI3LjI5ODlaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSItOC4zOTQxMSIgeT0iMTUuODI5MSIgd2lkdGg9IjExNi43MjciIGhlaWdodD0iOTIuMjQ1NiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgo8ZmVPZmZzZXQvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI0LjE2NjY3Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjI1IDAiLz4KPGZlQmxlbmQgbW9kZT0ib3ZlcmxheSIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8ZmlsdGVyIGlkPSJmaWx0ZXIxX2QiIHg9IjYwLjQxNjciIHk9Ii04LjA3NTU4IiB3aWR0aD0iNDcuOTE2NyIgaGVpZ2h0PSIxMTYuMTUxIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldC8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQuMTY2NjciLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMjUgMCIvPgo8ZmVCbGVuZCBtb2RlPSJvdmVybGF5IiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjQ5LjkzOTIiIHkxPSIwLjI1NzgxMiIgeDI9IjQ5LjkzOTIiIHkyPSI5OS43NDIzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=
[vscode-url]: https://code.visualstudio.com/
