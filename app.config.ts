export default defineAppConfig({
  docus: {
    title: 'ArmoniK',
    description: 'ArmoniK Documentation',
    titleTemplate: '%s - ArmoniK',
    image: '',
    socials: {
      linkedin: {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/aneo/',
        icon: 'mdi:linkedin'
      },
      instagram: 'https://www.instagram.com/aneoconsulting/',
      twitter: 'https://twitter.com/ANEOConseil',
      website: {
        label: 'Website',
        href: 'https://armonik.fr',
        icon: 'mdi:web',
        // Waiting for an upstream fix in Docus
        // @see https://github.com/nuxt-themes/docus/pull/899
        rel: 'noopener'
      },
      github: 'aneoconsulting/armonik-docs-theme'
    },
    aside: {
      level: 1,
      exclude: []
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'armonik-docs-theme',
      owner: 'aneoconsulting',
      edit: true
    },
    main: {
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      fluid: true,
      credits: {
        text: '',
        href: 'https://www.aneo.eu',
        icon: 'LogosAneo'
      },
      textLinks: [
        {
          text: 'ArmoniK',
          target: '_blank',
          rel: 'noopener',
          href: 'https://aneoconsulting.github.io/ArmoniK/'
        },
        {
          text: 'ArmoniK.Core',
          target: '_blank',
          rel: 'noopener',
          href: 'https://aneoconsulting.github.io/ArmoniK.Core/'
        },
        {
          text: 'ArmoniK.Api',
          target: '_blank',
          rel: 'noopener',
          href: 'https://aneoconsulting.github.io/ArmoniK.Api/'
        },
        {
          text: 'ArmoniK.Admin.GUI',
          target: '_blank',
          rel: 'noopener',
          href: 'https://aneoconsulting.github.io/ArmoniK.Admin.GUI/'
        },
        {
          text: 'ArmoniK.Community',
          target: '_blank',
          rel: 'noopener',
          href: 'https://aneoconsulting.github.io/ArmoniK.Community/'
        }
      ],
      iconLinks: []
    }
  }
})
