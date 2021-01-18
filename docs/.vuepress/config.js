module.exports = {
    title: 'Python 科學運算筆記',
    description: 'Scientific Python Notes',
    base: '/scientific-python-notes/',
    repo: 'https://github.com/aquastripe/scientific-python-notes/',
    locales: {
      '/': {
        lang: 'zh-TW',
      }
    },
    themeConfig: {
      sidebarDepth: 0,
      sidebar: [
        ['/', '前言'],
        // {
        //   title: 'PyTorch',
        //   collapsable: false,
        //   children: [
        //     'pytorch/'
        //   ],
        // },
      ],
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Github', link: 'https://github.com/aquastripe/scientific-python-notes/' }
      ],
    },
    // plugins: [ 'mathjax' ],
  }