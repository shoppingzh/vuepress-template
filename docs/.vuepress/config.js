const { generateNav, generateSidebar } = require('vuepress-util')
const { navs } = require('../../config.js')

module.exports = {
  base: '/', // 虚拟路径
  title: 'VuePress文档模板',
  description: '快速搭建文档网站，专注内容建设',

  // 性能相关
  // cache: false,

  // 浏览器兼容
  evergreen: true, // 只适配现代浏览器

  // 插件
  plugins: {
    '@vuepress/medium-zoom': {
      selector: '.page img'
    },
    '@vuepress/back-to-top': {}
  },

  // 主题
  theme: 'reco',
  themeConfig: {
    mode: 'light',
    modePicker: false,
    logo: '/favicon.ico',
    lastUpdated: '最后更新时间',
    author: 'xpzheng',
    // type: 'blog', // 博客风格
    // 导航栏
    nav: generateNav(navs),
    sidebar: generateSidebar(),
    subSidebar: 'auto',
    // 腾讯公益（去掉）
    noFoundPageByTencent: false
  }
}
