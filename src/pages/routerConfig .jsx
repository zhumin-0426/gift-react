import System from './system/index';
import ErrorPage from './error/404';
import PageDesign from './pageDesign/index';
import UserMsg from './user/userMsg';
import Goods from './goods/index';
import AddGoods from './goods/addGoods';
import GoodsDetail from './goods/goodsDetail';
import Order from './order/index';
import OrderDetail from './order/orderDetail';
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
        path: '/goods',
        component: Goods,
        auth: true,
    },{
        path: '/addgoods',
        component: AddGoods,
        auth: true,
    },{
        path: '/goodsdetail',
        component: GoodsDetail,
        auth: true,
    },{
        path: '/order',
        component: Order,
        auth: true,
    },{
        path: '/orderdetail',
        component: OrderDetail,
        auth: true,
    },{
        path:'/404',
        component:ErrorPage
    },{
        path:'/demo',
        component:Demo
    }
];