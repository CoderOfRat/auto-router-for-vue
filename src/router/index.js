import Vue from 'vue'
import Router from 'vue-router'
import { setTitle,pagesMap } from '@/lib/util.js' // src目录下所有.vue文件映射对象

Vue.use(Router)
/*
    主页面框架路由
*/
// const Home = () => import ("@/views/home/Home.vue") //主页
const Login = () => import ("@/views/Login.vue") //主页
import Error from "@/components/Error.vue" //错误页


//配置路由时，第一步不用重定向至Home.vue,而是让其直接跳转到App.vue，在App.vue获取需要的信息后，再跳转至Home.vue。
//下面的方法是解决在App.vue的created中使用this.$router.replace({name:"Home"})跳转到Home.vue中报错问题
// const originalPush = Router.prototype.replace
// Router.prototype.replace = function replace(location) {
//   return originalPush.call(this, location).catch(err => err)
// }


/**
 * const router = new Router({
    routes: [
        { path: '/',redirect: "/login"}, 
        { path: '/login',name: 'Login', component: Login},
        { path: '/home',name: 'Home', component: Home},
        {path: '/error',component: Error,name: 'Error'},
        // 错误路由的指示一定要放在最下面
        {path: '*',redirect: '/error'}  //路由的重定向
    ],
    })
 */

// 自动化路由生成+自定义部分内容第一版----配合src>pages.js实现
 let routes = []
 
 for (const key in pagesMap) {
     const routeArr = key.split(/\//)
     console.log(routeArr)
     if(routeArr.length === 1 && routeArr[0]) {
        if (pagesMap.hasOwnProperty(key)) {
            if(routeArr[0] === 'home') { // 需要重定向的路由，可单独在if条件限制的流程中处理 或者在守卫中拦截处理
                routes.push({
                    path: '/home',
                    component: pagesMap[key],
                    name: pagesMap[key].name,
                    redirect: "/home/homePage",
                    children: []
                })
            } else {
                routes.push({
                    path: `/${key}`,
                    name: pagesMap[key].name, // 可使用map映射过来汉字 类似于小程序的映射
                    component: pagesMap[key],
                    children: []
                 })
            }
        }
     } else {
        const index = routes.findIndex(item => item.path === `/${routeArr[0]}`)
        if (routeArr.length === 2) {    
            if(index!==-1) {
                routes[index].children.push({
                    _index: `${routes[index].path}/${routeArr[1]}`,
                    path: `${routeArr[1]}`,
                    name: pagesMap[key].name, // 可使用map映射过来汉字 类似于小程序的映射
                    component: pagesMap[key],
                    children: []
                })
            }
        } else if(routeArr.length === 3) {
            if(index !== -1) {
                const index1 = routes[index].children.findIndex(item => item.path === `${routeArr[1]}`)
                console.log(index,index1)
                if(index1 !== -1) {
                    routes[index].children[index1].children.push({
                        _index: `${routes[index].children[index1]._index}/${routeArr[2]}`,
                        path: `${routeArr[2]}`,
                        name: pagesMap[key].name, // 可使用map映射过来汉字 类似于小程序的映射
                        component: pagesMap[key],
                        children: []
                    }) 
                }
            }    
        } else if(routeArr.length === 4) {
            if(index !== -1) {
                const index1 = routes[index].children.findIndex(item => item.path === `${routeArr[1]}`)
                console.log(index,index1)
                if(index1 !== -1) {
                    const index2 = routes[index].children[index1].children.findIndex(item => item.path === `${routeArr[2]}`)
                    routes[index].children[index1].children[index2].children.push({
                        _index: `${routes[index].children[index1].children[index2]._index}/${routeArr[3]}`,
                        path: `${routeArr[3]}`,
                        name: pagesMap[key].name, // 可使用map映射过来汉字 类似于小程序的映射
                        component: pagesMap[key],
                        children: []
                    }) 
                }
            }    
        }
     }    
 }
 console.log(routes)
 Vue.prototype._routes = routes;

const router = new Router({
     routes: [
        { path: '/',redirect: '/home' },
        { path: '/login',component: Login },
         ...routes,
         {path: '/error',component: Error,name: 'Error'},
         {
            path: '*',redirect: '/Error' 
         }]
 })

 // 路由前置守卫
 router.beforeEach((to, from, next) => {
   const IF_LOGIN = window.localStorage.getItem('iflogin');
   to.meta && setTitle(to.meta.title)
   if (to.path !== '/login') {
     if (IF_LOGIN) next()
     else next('/login')
   } else {
     if (IF_LOGIN) next({name: 'Home'})
     else next()
   }
 })
 
 router.beforeResolve((to, from, next)=> {
   // 
   next()
 })
 
 // 后置路由钩子
 router.afterEach((to,from)=> {
   // 一般用于取消loading效果
 })

export default router
