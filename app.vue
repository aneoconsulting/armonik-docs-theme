<script lang="ts" setup>
defineOgImageScreenshot()

const sameAs = [
  'https://armonik.fr',
  'https://aneo.eu',
  'https://www.linkedin.com/company/aneo/',
  'https://www.instagram.com/aneoconsulting/',
]
</script>

<template>
  <AppLayout>
    <SeoKit />
    <SchemaOrgOrganization name="ArmoniK" logo="" :same-as="sameAs" />
    <NuxtPage />
  </AppLayout>
</template>
