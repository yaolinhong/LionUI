module.exports = {
    title: 'Lion UI',
    description: '一个好用的UI框架',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '欢迎 Star', link: ''},
            {text: '交流', link: 'https://google.com'},
        ],
        sidebar: [
            {
                title: '介绍',
                collapsable: false,
                children: [
                    '/introduce/',
                ]
            },
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

                ]
            }

    ]
}}