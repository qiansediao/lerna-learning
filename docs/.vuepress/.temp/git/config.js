import { GitContributors } from "C:/Users/PC/Desktop/learning/new-lerna-workspace/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_eb619d73e287916d7e2f491308a0ab10/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/Users/PC/Desktop/learning/new-lerna-workspace/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_eb619d73e287916d7e2f491308a0ab10/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
