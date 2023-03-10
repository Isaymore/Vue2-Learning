import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'
const router = new VueRouter({
    routes: [
        {
            name:'guanyu',
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xijie',
                            path:'detail/:id/:title',
                            component:Detail,
                            // props:{a:1,b:'hello'},
                            // props:true,
                            props($route){
                                console.log($route)
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title,
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
export default router