import "nprogress/nprogress.css";
import {
    start,
    done,
    configure
} from "nprogress";
import NotFound from '@/components/NotFound'

configure({
    // trickleSpeed: 40,
    showSpinner: true,
});

// function delay(duration) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve()
//         }, duration)
//     })
// }

async function getAsyncComponent(cb) {
    start()
    // if (process.env.NODE_ENV === 'development') {
    //     await delay(2000)
    // }
    done()
    return cb()
}

export default [{
        name: "Home",
        path: "/",
        component: () => getAsyncComponent(() => import("@/views/Home")),
        meta: {
            title: '主页'
        }
    }, //路由规则
    {
        name: "About",
        path: "/about",
        component: () => getAsyncComponent(() => import("@/views/About")),
        meta: {
            title: '关于我'
        }
    },
    {
        name: "Blog",
        path: "/blog",
        component: () => getAsyncComponent(() => import("@/views/Blog")),
        meta: {
            title: '博客'
        }
    },
    {
        name: "BlogList",
        path: "/blog/cate/:categoryId",
        component: () => getAsyncComponent(() => import("@/views/Blog")),
        meta: {
            title: '博客列表'
        }
    },
    {
        name: "Article",
        path: "/blog/:id",
        component: () => getAsyncComponent(() => import("@/views/Blog/Article")),
        meta: {
            title: '文章'
        }
    },
    {
        name: "Project",
        path: "/project",
        component: () => getAsyncComponent(() => import("@/views/Project")),
        meta: {
            title: '项目&效果'
        }
    },
    {
        name: "Message",
        path: "/message",
        component: () => getAsyncComponent(() => import("@/views/Message")),
        meta: {
            title: '留言板'
        }
    },
    {
        name:'NotFound',
        path:'*',
        component:NotFound
    }
]