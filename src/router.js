import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import { LocaleProvider, language } from 'quant-ui';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import en_US from 'antd/lib/locale-provider/en_US';
import { getRouterData } from './common/router';
import Authorized from './utils/Authorized';
import { getQueryPath } from './utils/utils';

const { ConnectedRouter } = routerRedux;
const { AuthorizedRoute } = Authorized;
let currlanguage = zh_CN;
if (language.getCurrentLanguage() !== 'zh_CN') {
    currlanguage = en_US;
}
function RouterConfig({ history, app }) {
    const routerData = getRouterData(app);
    const UserLayout = routerData['/user'].component;
    const BasicLayout = routerData['/'].component;
    return (
        <LocaleProvider locale={currlanguage}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/user" component={UserLayout} />
                    <AuthorizedRoute
                        path="/"
                        render={props => <BasicLayout {...props} />}
                        authority={['admin', 'user']}
                        redirectPath={getQueryPath('/user/login', {
                            redirect: window.location.href,
                        })}
                    />
                </Switch>
            </ConnectedRouter>
        </LocaleProvider>
    );
}

export default RouterConfig;
