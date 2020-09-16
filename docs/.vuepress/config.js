module.exports = {
    base:'/lion-ui-page/',
    title: 'Lion UI',
    description: '一个好用的UI框架',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '欢迎 Star', link: 'https://github.com/yaolh1995/LionUI'},
            {text: '交流', link: 'https://github.com/yaolh1995/LionUI/issues'},
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/tabs',
                    '/components/toast',
                    '/components/popover',
                    '/components/collapse',

                ]
            }

    ]
}}