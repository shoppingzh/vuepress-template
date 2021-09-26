const { generateNav, generateSidebar } = require('vuepress-util')
const { navs } = require('../../config.js')

module.exports = {
  title: 'VuePress模板',
  description: '快速搭建文档网站',

  // 性能相关
  cache: false,

  // 浏览器兼容
  evergreen: true, // 只适配现代浏览器

  // 插件
  plugins: {
    '@vuepress/medium-zoom': {
      selector: 'img'
    }
  },

  // 主题
  theme: 'reco',
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: '最后更新时间',
    // 导航栏
    nav: generateNav(navs),
    sidebar: generateSidebar()
  }
}
