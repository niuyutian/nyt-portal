import Vue from "vue";
import VueRouter from "vue-router";
import Advertising from '@/components/Advertising'
import Home from '@/components/Home';
import Fontsicon from '@/components/Fontsicon';
import Index from '@/components/Index';
import Search from '@/views/Search';
import Play from '@/views/Play';
import Nodepad from '@/components/Nodepad';


Vue.use(VueRouter)
const routes =[
    {
        path: '/',
        redirect:'/advertising'
    },
    {
        path: "/advertising",
        component:Advertising
    },
    {
        path: "/home",
        component:Home,
        redirect:'/home/index',

        children:[
            {
                path:'index',
                component:Index,
            },
            {
                path:'fontsicon',
                component: Fontsicon,
            },
            {
                path:'mhome',
                component: Search,
            },
            {
                path: 'play',
                component:Play
            },           
            {
                path: 'nodepad',
                component:Nodepad
            },
        ]
    },

]
const  router =new VueRouter({
    routes
})
export default router