import { CodeTabs } from "C:/Users/PC/Desktop/learning/new-lerna-workspace/node_modules/.pnpm/@vuepress+plugin-markdown-t_1e50444c1de9040b74e3cc4008590b06/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Users/PC/Desktop/learning/new-lerna-workspace/node_modules/.pnpm/@vuepress+plugin-markdown-t_1e50444c1de9040b74e3cc4008590b06/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Users/PC/Desktop/learning/new-lerna-workspace/node_modules/.pnpm/@vuepress+plugin-markdown-t_1e50444c1de9040b74e3cc4008590b06/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
