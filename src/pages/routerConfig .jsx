import System from './system/index';
import ErrorPage from './error/404';
import PageDesign from './pageDesign/index';
import UserMsg from './user/userMsg';
import Demo from './demo';
interface routerConfigModel {
    path: string,
    component?: any,
    auth?: boolean
}
export const routerConfig: routerConfigModel[] = [
    {
        path: '/',
        component: System,
        auth: true,
    },{
        path: '/system',
        component: System,
        auth: true,
    },{
        path: '/pageDesign',
        component: PageDesign,
        auth: true,
    },{
        path: '/usermsg',
        component: UserMsg,
        auth: true,
    },{
        path:'/404',
        component:ErrorPage
    },{
        path:'/demo',
        component:Demo
    }
];