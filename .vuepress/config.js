module.exports = {
  plugins: [require('vuepress-plugin-playground')],
  themeConfig: {
    nav: [
      {
        title: '设计原则',
        link: '/principle/'
      },
      {
        title: '组件',
        link: '/component/'
      },
      {
        title: '资源下载',
        link: '/resource/'
      }
    ]
  }
}
