import { defineBuilderConfig } from '@afilmory/builder'
import { env } from 'node:process'

export default defineBuilderConfig(() => ({
  repo: {
    enable: false,
    url: 'https://github.com/username/gallery-public',
  },
  storage: {
    provider: "s3",
    bucket: 'gallery',
    region: 'us-east-1',
    prefix: '',
    customDomain: 'https://gallery.magren.cc',
    endpoint: "https://fd2117ae96666e795bf2bce76289651b.r2.cloudflarestorage.com",
    accessKeyId: env.S3_ACCESS_KEY_ID,
    secretAccessKey: env.S3_SECRET_ACCESS_KEY,
  },
  plugins: [
    '@afilmory/builder/plugins/storage/s3.js'
  ]
}))
