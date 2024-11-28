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
        icon: 'mdi:linkedin',
      },
      instagram: 'aneoconsulting/',
      twitter: 'aneoconseil',
      website: {
        label: 'Website',
        href: 'https://armonik.fr',
        icon: 'mdi:web',
        rel: 'noopener',
      },
      github: 'aneoconsulting/armonik-docs-theme',
    },
    aside: {
      level: 1,
      exclude: [],
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'armonik-docs-theme',
      owner: 'aneoconsulting',
      edit: true,
    },
    main: {
      fluid: true,
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
    footer: {
      fluid: true,
      credits: {
        text: 'Aneo Website',
        href: 'https://www.aneo.eu',
        icon: 'LogosAneo',
      },
      textLinks: [
        {
          text: 'ArmoniK',
          target: '_blank',
          rel: 'noopener',
          href: 'https://aneoconsulting.github.io/armonik/',
        },
        {
          text: 'ArmoniK.Core',
          target: '_blank',
          rel: 'noopener',
          href: 'https://aneoconsulting.github.io/armonik.core/',
        },
        {
          text: 'ArmoniK.Api',
          target: '_blank',
          rel: 'noopener',
          href: 'https://aneoconsulting.github.io/armonik.api/',
        },
        {
          text: 'ArmoniK.Admin.GUI',
          target: '_blank',
          rel: 'noopener',
          href: 'https://aneoconsulting.github.io/armonik.admin.gui/',
        },
        {
          text: 'ArmoniK.Community',
          target: '_blank',
          rel: 'noopener',
          href: 'https://aneoconsulting.github.io/armonik.community/',
        },
      ],
      iconLinks: [],
    },
  },
})
