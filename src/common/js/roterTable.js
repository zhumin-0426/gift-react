import Login from '../../pages/login';
import System from '../../pages/system';
import Goods from '../../pages/goods';
import Order from '../../pages/order';
import Users from '../../pages/users';
import PageDesign from '../../pages/pageDesign';
import Demo from '../../pages/demo';
// auth 是否需要登录
export let routerTable = [
    { path: "/", name: "login", component: Login, auth: true },
    { path: "/system", name: "system", component: System, auth: true },
    { path: "/goods", name: "goods", component: Goods, auth: true },
    { path: "/order", name: "order", component: Order, auth: true },
    { path: "/users", name: "users", component: Users, auth: true },
    { path: "/pagedesign", name: "pagedesign", component: PageDesign, auth: true },
    { path: "/demo", name: "demo", component: Demo }
]
