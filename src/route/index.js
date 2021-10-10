import { createRouter,createWebHistory} from "vue-router";
import MainFile from '../components/mainfile/MainFile.vue'

const routes=[
    { path: '/:pathMatch(.*)*', name: 'main', component: MainFile },
    {
        path:'/',
        name:'main',
        component:MainFile
    },
    {
        path:'/details/:id',
        name:'details',
        component:()=>import(/*webpackChunkName="Details"*/"@/components/view/Details.vue")
    },
    {
        path:'/login',
        name:'login',
        component:()=>import(/*webpackChunkName="Login"*/"@/components/login/Login.vue")
    },
    
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })
  export default router;