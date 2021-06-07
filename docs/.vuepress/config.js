module.exports = {
  theme: "antdocs",
  title: "元思云文档中心",
  description: "一个行业领先的馆园一体化服务提供商",
  base: "/",
  head: [
    ["link", { rel: "icon", href: "/assets/logo.png" }]
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-175694260-1'
      }
    ]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "yuansicloud",
    logo: "/assets/logo.png",
    editLinks: false,
  },
};