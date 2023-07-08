<script setup lang="ts">
const show = ref(false)

const { $mermaid } = useNuxtApp()

onMounted(async () => {
  show.value = true
  // @ts-expect-error - mermaid is not typed
  $mermaid().initialize({ startOnLoad: true })
  await nextTick()
  // @ts-expect-error - mermaid is not typed
  $mermaid().init()
})
</script>

<template>
  <div v-if="show" class="mermaid">
    <slot />
  </div>
</template>
