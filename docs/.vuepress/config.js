import { defaultTheme } from '@vuepress/theme-default';

module.exports = {
  base: '/',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
    '/en/': {
      lang: 'en-US',
    },
  },
  theme: defaultTheme({
    colorMode: 'light',
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      {
        text: 'Basic',
        link: '/js/basic.md',
      },
      {
        text: 'Link',
        link: '/js/link.md',
      },
      {
        text: 'HTML',
        children: ['/html/html1.md', '/html/html2.md'],
      },
    ],
    repo: 'charlesws2355/blog',
    selectLanguageText: '选择语言',
    locales: {
      '/': {
        selectLanguageName: '简体中文',
      },
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
      },
    },
    sidebar: [
      {
        text: 'Sidebar',
        link: '/sidebar',
        children: ['/sidebar', '/html/html1.md', '/html/html2.md'],
      },
    ],
    themePlugins: {
      nprogress: false,
    },
  }),
};
