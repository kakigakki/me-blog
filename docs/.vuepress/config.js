module.exports = {
    title: 'KAKi BLOG',
    description: '学习，记录，分享，提升',
    themeConfig: {
        repo: 'vuepressjs/vuepress-theme-blog',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        nav: [
            { text: '编程', link: '/code/' },
            { text: '随笔', link: '/diary/' },
        ],
        sidebarDepth: 3,
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
    },
}