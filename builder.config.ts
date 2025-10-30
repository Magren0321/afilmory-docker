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
    endpoint: "https://fd2117ae96666e795bf2bce76289651b.r2.cloudflarestorage.com"
  },
  plugins: [
    '@afilmory/builder/plugins/storage/s3.js'
  ]
}))
