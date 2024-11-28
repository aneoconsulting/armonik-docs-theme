import process from 'node:process'
import { logger } from '@nuxt/kit'
import { version } from './package.json'

logger.success(`Using ArmoniK Docs Theme v${version}`)

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/ico',
          href: `${process.env.NUXT_APP_BASE_URL ?? '/'}favicon.ico`,
        },
      ],
    },
  },

  site: {
    url: 'https://aneoconsulting.github.io/armonik-docs-theme/',
  },

  extends: ['@nuxt-themes/docus'],

  content: {
    documentDriven: {
      trailingSlash: true,
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://example.com',
      siteName: 'ArmoniK Docs Theme',
      siteDescription: 'A beautiful, responsive, and customizable documentation theme for ArmoniK.',
      titleSeparator: '-',
      language: 'en-US',
      trailingSlash: true,
    },
  },

  devtools: {
    enabled: true,
  },

  experimental: {
    watcher: 'parcel',
  },

  hooks: {
    close: (nuxt) => {
      if (!nuxt.options._prepare)
        process.exit()
    },
  },

  compatibilityDate: '2024-11-28',
  modules: ['@nuxtjs/seo'],
})
