import System from './system/index';
import ErrorPage from './error/404';
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
    }, {
        path: '/system',
        component: System,
        auth: true,
    },{
        path:'/404',
        component:ErrorPage
    }
];