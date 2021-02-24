import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import '../css/sidebar.less';
// antd组件
import { Menu } from 'antd';
import { CodeOutlined, ShoppingCartOutlined, UserOutlined, BarChartOutlined, MessageOutlined, FileOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
// 列表结构
let sideMenuList = [
    {
        id: 1,
        menuItemTitle: "系统",
        menuItemIcon: <BarChartOutlined />,
        level1: [],
        url: '/system'
    },
    {
        id: 2,
        menuItemTitle: "页面",
        menuItemIcon: <CodeOutlined />,
        level1: [
            {
                id: 7,
                menuItemTitle: "页面设计",
                lever2: [],
                url: '/pageDesign'
            },
            {
                id: 8,
                menuItemTitle: "底部导航设置",
                lever2: [],
                url: '/bottomNav'
            }
        ]
    },
    {
        id: 3,
        menuItemTitle: "商品",
        menuItemIcon: <ShoppingCartOutlined />,
        level1: [
            {
                id: 9,
                menuItemTitle: "商品列表",
                lever2: [],
                url: '/goods'
            },
            {
                id: 10,
                menuItemTitle: "商品分类",
                lever2: [],
                url: '/goodsClassify'
            },
            {
                id: 11,
                menuItemTitle: "商品评价",
                lever2: [],
                url: '/goodsComment'
            },
            {
                id: 13,
                menuItemTitle: "订单",
                lever2: [],
                url: '/order'
            },
        ]
    },
    {
        id: 4,
        menuItemTitle: "用户",
        menuItemIcon: <UserOutlined />,
        level1: [
            {
                id: 11,
                menuItemTitle: "用户列表",
                lever2: [],
                url: '/users'
            },
            {
                id: 12,
                menuItemTitle: "用户等级",
                lever2: [],
                url: '/userLevel'
            }
        ]
    },
    {
        id: 5,
        menuItemTitle: "消息",
        menuItemIcon: <MessageOutlined />,
        level1: [],
        url: '/mssage'
    },
    {
        id: 6,
        menuItemTitle: "文件",
        menuItemIcon: <FileOutlined />,
        level1: [],
        url: '/files'
    },
];
const Sidebar = (props) => {
    const [openKeys, setOpenKeys] = React.useState(['sub1']);
    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    let SideMenu = sideMenuList.map(SubMenuItem => {
        {
            if (SubMenuItem.level1.length > 0) {
                return <>
                    <SubMenu key={SubMenuItem.id} icon={SubMenuItem.menuItemIcon} title={SubMenuItem.menuItemTitle}>
                        {
                            SubMenuItem.level1.map(MenuItem1 => {
                                {
                                    if (MenuItem1.lever2.length > 0) {
                                        return <>
                                            <SubMenu key={MenuItem1.id} title={MenuItem1.menuItemTitle}>
                                                {
                                                    MenuItem1.lever2.map(MenuItem2 => {
                                                        return <><Menu.Item key={MenuItem2.id}>
                                                            <Link to={MenuItem2.url}>{MenuItem2.menuItemTitle}</Link>
                                                        </Menu.Item></>
                                                    })
                                                }
                                            </SubMenu>
                                        </>
                                    } else {
                                        return <>
                                            <Menu.Item key={MenuItem1.id}>
                                                <Link to={MenuItem1.url}>{MenuItem1.menuItemTitle}</Link>
                                            </Menu.Item>
                                        </>
                                    }
                                }
                            })
                        }
                    </SubMenu>
                </>
            } else {
                return <>
                    <Menu.Item key={SubMenuItem.id} icon={SubMenuItem.menuItemIcon}>
                        <Link to={SubMenuItem.url}>{SubMenuItem.menuItemTitle}</Link>
                    </Menu.Item>
                </>
            }
        }
    })
    return (
        <div className={props.isCollapsed?'sidebar':'sidebar-active'}>
            <Menu inlineCollapsed={props.isCollapsed} mode="inline" defaultSelectedKeys={['1']} openKeys={openKeys} onOpenChange={onOpenChange} style={{height:'100%',backgroundColor: '#282a39'}}>
                {SideMenu}
            </Menu>
        </div>
    );
};

export default Sidebar;