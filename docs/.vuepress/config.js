const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'The Mapping Manual',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Manual',
        link: '/introduction/',
      },
      {
        text: 'Syllabus',
        link: '/syllabus/',
      }
    ],
    sidebar: [
      {
        title: 'Introduction',
        collapsable: false,
        children: [
          '/introduction/',
          '/introduction/requirements'
        ]
      },
      {
        title: 'Week 01 - Concepts',
        collapsable: false,
        children: [ 
          '/concepts/',
          '/concepts/emphasis',
          '/concepts/contrast',
          '/concepts/consistency',
          '/concepts/spread',

        ],
      },
      {
        title: 'Week 02 - Prior to Mapping',
        collapsable: false,
        children: [ 
          '/pre-mapping/',
          '/pre-mapping/setup',
          '/pre-mapping/background',

        ],
      },
      {
        title: 'Week 03 - Normal Difficulties',
        collapsable: false,
        children: [ 
          '/normals/',
        ],
      },
      {
        title: 'Week 04 - Hard Difficulties',
        collapsable: false,
        children: [ 
          '/hards/',
        ],
      },
      {
        title: 'Week 05 - Insane Difficulties',
        collapsable: false,
        children: [ 
          '/insanes/',
        ],
      },
      {
        title: 'Week 06 - Other Difficulties',
        collapsable: false,
        children: [ 
          '/other-difficulties/',
          '/other-difficulties/Extra',
        ],
      },
      {
        title: 'Week 07 - Hitsounding',
        collapsable: false,
        children: [ 
          '/hitsounding/',
        ],
      },
      {
        title: 'Week 08 - After Mapping',
        collapsable: false,
        children: [ 
          '/post-mapping/',
        ],
      },
      {
        title: 'Week 09 - Final Words',
        collapsable: false,
        children: [ 
          '/conclusion/',
        ],
      }
    ], 
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
