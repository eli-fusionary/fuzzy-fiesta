// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

const appName = 'payload'

const getDomain = ({
  stage: _stage,
}: {
  stage: string
}): string | undefined => {
  return undefined
}

export default $config({
  app(input) {
    return {
      home: 'aws',
      name: 'app',
      providers: {
        aws: {
          region: 'us-east-1',
        },
      },
      removal: input.stage === 'production' ? 'retain' : 'remove',
    }
  },
  // eslint-disable-next-line @typescript-eslint/require-await
  async run() {
    const vpc = new sst.aws.Vpc('network')
    const cluster = new sst.aws.Cluster('cluster', { vpc })

    const service = cluster.addService(appName, {
      architecture: 'x86_64',
      cpu: '0.25 vCPU',
      image: {
        args: {
          APP_NAME: appName,
        },
        context: '.',
        dockerfile: `apps/${appName}/Dockerfile`,
      },
      loadBalancer: {
        ports: [{ forward: '3000/http', listen: '80/http' }],
        public: true,
      },
      logging: {
        retention: '3 months',
      },
      memory: '0.5 GB',
      scaling: {
        cpuUtilization: 70,
        max: 5,
        memoryUtilization: 70,
        min: 1,
      },
    })

    const domainName = getDomain({ stage: $app.stage })
    const cert = domainName
      ? new aws.acm.Certificate('cert', {
          domainName,
          validationMethod: 'DNS',
        })
      : undefined

    const cdnDomain =
      cert && domainName
        ? ({
            cert: cert.arn,
            dns: false,
            name: domainName,
          } as const)
        : undefined

    new sst.aws.Cdn('cdn', {
      comment: `CDN for ${$app.name} - ${$app.stage}`,
      defaultCacheBehavior: {
        allowedMethods: [
          'GET',
          'HEAD',
          'OPTIONS',
          'PUT',
          'POST',
          'PATCH',
          'DELETE',
        ],
        cachedMethods: ['GET', 'HEAD'],
        cachePolicyId:
          '4135ea2d-6df8-44a3-9df3-4b5a84be39ad' /* Managed-CachingDisabled */,
        originRequestPolicyId:
          '216adef6-5c7f-47e4-b989-5492eafa07d3' /* Managed AllViewer */,
        targetOriginId: service.nodes.service.name,
        viewerProtocolPolicy: 'redirect-to-https',
      },
      domain: cdnDomain,
      origins: [
        {
          customOriginConfig: {
            httpPort: 80,
            httpsPort: 443,
            originProtocolPolicy: 'http-only',
            originSslProtocols: ['TLSv1.2'],
          },
          domainName: service.nodes.loadBalancer.dnsName,
          originId: service.nodes.service.name,
        },
      ],
    })
  },
})
