import { isUrl } from '../utils/utils';

const menuData = [
    {
        name: '交易视图',
        icon: 'dollar',
        path: 'analytics',
        authority: 'admin',
    },{
        name: '订单视图',
        icon: 'exception',
        path: 'orderview',
        authority: 'admin',
    },
    {
        name: '预警视图',
        icon: 'warning',
        path: 'alerts',
        authority: 'admin',
    },
    {
        name: '预警详情',
        path: 'alertdetail/:id',
        authority: 'admin',
        hideInMenu: true,
    },
    {
        name: '预警统计视图',
        icon: 'area-chart',
        path: 'trending',
        authority: 'admin',
    },
    {
        name: '市场行情视图',
        icon: 'box-plot',
        path: 'marketview',
    },
    {
        name: '账户',
        icon: 'user',
        path: 'user',
        authority: 'guest',
        children: [
            {
                name: '登录',
                path: 'login',
            },
            {
                name: '注册',
                path: 'register',
            },
            {
                name: '注册结果',
                path: 'register-result',
            },
        ],
    },
];

function formatter(data, parentPath = '/', parentAuthority) {
    return data.map(item => {
        let { path } = item;
        if (!isUrl(path)) {
            path = parentPath + item.path;
        }
        const result = {
            ...item,
            path,
            authority: item.authority || parentAuthority,
        };
        if (item.children) {
            result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
        }
        return result;
    });
}

export const getMenuData = () => formatter(menuData);
