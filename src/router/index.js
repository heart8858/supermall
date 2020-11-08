import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')

// 1.安装VueRouter
Vue.use(VueRouter)

// 2.配置路由信息
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/detail/:iid',
        component: Detail
    }
]

// 3.创建路由对象
const router = new VueRouter({
    mode: 'history',
    routes
})


const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(to) {
    return VueRouterReplace.call(this, to).catch(err => err)
}
// 4.导出
export default router
