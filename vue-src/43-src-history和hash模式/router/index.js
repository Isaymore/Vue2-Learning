import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'
const router = new VueRouter({
    mode:'history',
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { 'isAuth': true, 'title': '关于' }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { 'title': '主页' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { 'isAuth': true, 'title': '新闻' },
                    // beforeEnter: (to, from, next) => {
                    //     console.log('beforeEnter', to, from)
                    //     if (to.meta.isAuth) {
                    //         if (localStorage.getItem('idol') === 'xingye666') {
                    //             next()
                    //             // document.title = to.meta.title || '学生管理系统'
                    //         } else {
                    //             return alert('无权限访问！')
                    //         }
                    //     } else {
                    //         next()
                    //         // document.title = to.meta.title || '学生管理系统'
                    //     }
                    // }
                },
                {
                    name: 'xinxi',
                    path: 'message',
                    component: Message,
                    meta: { 'isAuth': true, 'title': '信息' },
                    children: [
                        {
                            name: 'xijie',
                            path: 'detail',
                            component: Detail,
                            meta: { 'title': '细节' },
                            // props:{a:1,b:'hello'},
                            // props:true,
                            props($route) {
                                console.log($route)
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title,
                                    // a:1,
                                    // b:'hello'
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})
// router.beforeEach((to, from, next) => {
//     console.log('beforeEach', to, from)
//     if (to.meta.isAuth) {
//         if (localStorage.getItem('idol') === 'xingye666') {
//             next()
//             // document.title = to.meta.title || '学生管理系统'
//         } else {
//             return alert('无权限访问！')
//         }
//     } else {
//         next()
//         // document.title = to.meta.title || '学生管理系统'
//     }


// })
router.afterEach((to, from) => {
    console.log('afterEach', to, from)
    document.title = to.meta.title || '学生管理系统'
})
export default router