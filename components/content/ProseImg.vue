<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'
import { withBase } from 'ufo'

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
})

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//'))
    return withBase(props.src, useRuntimeConfig().app.baseURL)

  return props.src
})
</script>

<template>
  <img :src="refinedSrc" :alt="alt" :width="width" :height="height">
</template>

<style scoped lang="ts">
css({
  img: {
    'border-radius': '{radii-md}',
  },
})
</style>
