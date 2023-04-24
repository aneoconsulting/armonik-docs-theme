import { logger } from '@nuxt/kit'
import { version } from './package.json'

logger.success(`Using ArmoniK Docs Theme v${version}`)

const baseURL = process.env.NODE_ENV === 'production' ? '/armonik-docs-theme/' : '/'

export default defineNuxtConfig({
  app: {
    baseURL: baseURL,
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/ico',
          href: `${baseURL}favicon.ico`,
        }
      ]
    }
  },

  extends: ['nuxt-seo-kit', '@nuxt-themes/docus'],

  content: {
    documentDriven: {
      trailingSlash: true,
    }
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://example.com',
      siteName: 'ArmoniK Docs Theme',
      siteDescription: 'A beautiful, responsive, and customizable documentation theme for ArmoniK.',
      titleSeparator: '-',
      language: 'en-US',
      trailingSlash: true,
    }
  },

  devtools: true
})
