import Login from './login/index';
import System from './system/index';
interface routerConfigModel {
    path:string,
    component?:any,
    auth?:boolean
}
export const routerConfig:routerConfigModel[] = [
   {
        path:'/',
        component:System,
        auth:true,
    },{
        path:'/system',
        component:System,
        auth:true,
    }
];