module.exports = {
    title: "CCRN",
    locales: {
        '/': {
            lang: 'en-EN',
            title: 'CCRN',
            description: "Colorado Community Radio Network"
        }
    },
    head: [
        ['link', { rel: 'stylesheet', href: `https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css` }],
        ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/icon?family=Material+Icons` }],
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    plugins: [
      [
        '@vuepress/google-analytics',
        { ga: '' }
      ]
    ],
    configureWebpack: (config, isServer) => {
      if (!isServer) {
        config.devServer = {
            hot: false
        };
      }
    },
    serviceWorker: true,
    host: 'localhost',
    themeConfig: {
        search: false,
        repo: 'skyfly200/CCRN-CMS-Site',
        lastUpdated: 'Last Updated', // string | boolean
        nav: [
          {
              text: 'Home',
              link: '/',
              icon: 'home'
          },
          {
              text: 'About',
              link: '/about.html',
              icon: 'face'
          },
          {
              text: 'Streams',
              link: '/streams/',
              icon: 'music_note'
          },
          {
              text: 'Events',
              link: '/events/',
              icon: 'place'
          },
          {
              text: 'Archives',
              link: '/archives/',
              icon: 'archive'
          },
          {
              text: 'Blog',
              link: '/posts/',
              icon: 'format_quote'
          },
          {
              text: 'Contact',
              link: '/contact.html',
              icon: 'email'
          }
        ],
        serviceWorker: {
          updatePopup: true
        }
    }
}
