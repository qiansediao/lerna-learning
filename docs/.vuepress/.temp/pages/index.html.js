import comp from "C:/Users/PC/Desktop/learning/new-lerna-workspace/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Hello VuePress 111\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1772765190000,\"contributors\":[{\"name\":\"darcy\",\"username\":\"darcy\",\"email\":\"1138826847@qq.com\",\"commits\":1,\"url\":\"https://github.com/darcy\"}],\"changelog\":[{\"hash\":\"f3527e3f0aee14a71ebb5acb5be0fc9346d6ed9f\",\"time\":1772765190000,\"email\":\"1138826847@qq.com\",\"author\":\"darcy\",\"message\":\"vuepress开发\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
