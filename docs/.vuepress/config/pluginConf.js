const moment = require("moment");
const secretKeyConf = require("./secretKeyConf.js");
const sortFn = (key) => (a, b) =>
  a[key].split("-")[1][length - 1] > b[key].split("-")[1][length - 1] ? 1 : -1;

moment.locale("zh-cn");

module.exports = {
  "@vuepress/pwa": {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用.",
      buttonText: "刷新",
    },
  },
  "@vuepress/back-to-top": true,
  "@vuepress/google-analytics": {
    ga: secretKeyConf.ga,
  },
  "@vuepress/medium-zoom": {
    selector: ".content__default img",
  },
  "@vuepress/last-updated": {
    transformer: (timestamp) => moment(timestamp).format("LLLL"),
  },
  "vuepress-plugin-auto-sidebar": {
    title: {
      mode: "uppercase",
      map: {
        "/frontend/javascript/": "JS 基础",
        "/products/yscloud-furneral-web/": "元思·殡PC后台管理系统",
      },
    },
    collapse: {
      collapseList: [
        "/frontend/javascript/",
        "/products/yscloud-furneral-web/",
      ],
    },
    sort: sortFn,
  },
};
