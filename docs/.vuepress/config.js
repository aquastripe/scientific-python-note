module.exports = {
    title: 'Python 科學運算筆記',
    description: 'Scientific Python Note',
    base: '/scientific-python-notes/',
    repo: 'https://github.com/aquastripe/scientific-python-notes/',
    head: [
        ['meta', { name: "viewport", content: "width=device-width,user-scaleble=0,initial-scale=1.0,maximum-scale=1.0" }],
      ],
      locales: {
        '/': {
          lang: 'zh-TW',
        }
      },
    themeConfig: {
      sidebarDepth: 0,
      sidebar: [
        ['/', '前言']
      ],
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Github', link: 'https://github.com/aquastripe/scientific-python-notes/' }
      ]
    }
  }