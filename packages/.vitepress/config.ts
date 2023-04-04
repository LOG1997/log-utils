import { defineConfig } from 'vitepress';
const fs = require('fs');
const path = require('path');
const rootDir = './packages/utils/';
const inputList = fs.readdirSync(rootDir);
// 判断文件夹内是否有index.md文件
const isIndexMd = (item) => {
  // 判断是否文件夹
  const isDir = fs.statSync(path.join(rootDir, item)).isDirectory();
  if (!isDir) {
    return false;
  }
  const files = fs.readdirSync(path.join(rootDir, item));
  return files.includes('index.md');
};
const functionList = inputList.map((item: any) => {
  if (isIndexMd(item)) {
    return {
      text: item,
      link: `/utils/${item}/`,
    };
  }
  return;
});
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/log-utils/',
  title: 'Log-Utils',
  description: 'A Utils Useage from log1997',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Utils', link: '/utils/arrList/', activeMatch: '^/utils' },
    ],

    sidebar: [
      {
        text: 'Utils',
        items: (() => {
          return [...functionList.filter((item) => item !== undefined)];
        })(),
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present log1997',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/log1997' }],
  },
});
