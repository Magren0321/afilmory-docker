import { defineBuilderConfig } from '@afilmory/builder'

export default defineBuilderConfig(() => ({
  repo: {
    enable: false,
    url: 'https://github.com/username/gallery-public',
  },
  storage: {
    provider: "s3",
    bucket: 'gallery',
    region: 'us-east-1',
    prefix: '/',
    customDomain: 'https://gallery.magren.cc',
  },
}))
