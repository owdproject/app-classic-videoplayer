import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin({
  name: 'app-classic-videoplayer-playground-launch',
  dependsOn: ['desktop-app-classic-videoplayer-register'],
  setup(nuxtApp) {
    autoStartPlaygroundApps(nuxtApp, [
      { id: 'org.owdproject.classic-videoplayer', entry: 'classic-videoplayer', windowModel: 'main' },
    ])
  },
})
