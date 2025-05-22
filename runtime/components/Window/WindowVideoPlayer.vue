<script setup lang="ts">
import { fs } from '@zenfs/core'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  window: Window
}>()

const { t } = useI18n()

const videoUrl = loadVideoUrl(props.window.meta.path)

function loadVideoUrl(fileHandle) {
  if (!fileHandle) {
    return
  }

  if (path.startsWith('http')) {
    return path
  }

  const buffer = fs.readFileSync(fileHandle)
  const blob = new Blob([buffer], { type: 'video/mp4' })
  return URL.createObjectURL(blob)
}
</script>

<template>
  <Window v-bind="$props">
    <video
      :src="videoUrl"
      :controls="!props.window.meta.noControls"
      :autoplay="props.window.meta.autoplay"
      :loop="props.window.meta.loop"
    />
  </Window>
</template>

<style scoped lang="scss">
video {
  max-width: 60vw;
  max-height: 60vh;
}
</style>
