module.exports = {
  title: 'KAKi BLOG',
  description: '学习，记录，分享，提升',
  themeConfig: {
    repo: 'kakigakki/me-blog',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    nav: [
      { text: '编程', link: '/' },
      {
        text: '随笔',
        link: '/writings/'
      },
      {
        text: '日语',
        link: '/japanese/'
      },
      {
        text: 'github',
        link: 'https://github.com/kakigakki'
      },
    ],
    smoothScroll: true,
    footer: {
      contact: [{
          type: 'github',
          link: 'https://github.com/kakigakki',
        },
        {
          type: 'mail',
          link: 'kakigakki@gmail.com',
        },
      ],
    },
    lastUpdated: 'Last Updated', // string | boolean
  }

}