export default {
  id: 'org.owdproject.classic-videoplayer',
  title: 'Player',
  singleton: false,
  icon: 'mdi:movie-open-outline',
  provides: {
    name: 'video-player',
    entry: 'player',
  },
  windows: {
    main: {
      component: () => import('./components/Window/WindowVideoPlayer.vue'),
      resizable: true,
      size: {
        width: 400,
        height: 300,
      },
    },
  },
  entries: {
    player: {
      command: 'classic-videoplayer',
    },
  },
  terminal: {
    'classic-videoplayer': {
      description: 'Open classic video player',
      usage: 'classic-videoplayer [path]',
      args: [
        {
          name: 'path',
          description: 'Path to video file',
        },
      ],
    },
  },
  commands: {
    'classic-videoplayer': (app: IApplicationController, args: any) => {
      const path = args._[1];
      const autoplay = args.autoplay
      const loop = args.loop

      const meta = args ? {
        path,
        autoplay,
        loop,
      } : {
        path: '/',
        autoplay: false,
        loop: false,
      }

      app.openWindow('main', undefined, meta)
    },
  },
}
