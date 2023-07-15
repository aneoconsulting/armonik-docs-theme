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

  extends: ['@nuxt-themes/docus'],

  modules: ['nuxt-simple-robots', 'nuxt-simple-sitemap', 'nuxt-og-image'],

  content: {
    documentDriven: {
      trailingSlash: true,
    },
  },

  site: {
    url: 'https://aneoconsulting.github.io/armonik-docs-theme/',
  },

  runtimeConfig: {
    // public: {
    //   siteUrl: 'https://example.com',
    //   siteName: 'ArmoniK Docs Theme',
    //   siteDescription: 'A beautiful, responsive, and customizable documentation theme for ArmoniK.',
    //   titleSeparator: '-',
    //   language: 'en-US',
    //   trailingSlash: true,
    // },
  },

  devtools: true,

  experimental: {
    watcher: 'parcel',
  },
})
