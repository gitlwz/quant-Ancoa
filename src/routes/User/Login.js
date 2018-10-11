import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Checkbox, Alert, Icon,Login } from 'quant-ui';
const { Tab, UserName, Password, Submit } = Login;

class LoginPage extends Component {
    state = {
        type: 'account',
        autoLogin: true,
    };

    onTabChange = type => {
        this.setState({ type });
    };

    handleSubmit = (err, values) => {
        const { type } = this.state;
        const { dispatch } = this.props;
        if (!err) {
            dispatch({
                type: 'login/login',
                payload: {
                    ...values,
                    type,
                },
            });
        }
    };

    changeAutoLogin = e => {
        this.setState({
            autoLogin: e.target.checked,
        });
    };

    renderMessage = content => {
        return <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />;
    };

    render() {
        const { login, submitting } = this.props;
        const { type, autoLogin } = this.state;
        return (
            <div className={'qdp-login-main'}>
                <Login defaultActiveKey={type} onTabChange={this.onTabChange} onSubmit={this.handleSubmit}>
                    <Tab key="account" tab="账户密码登录">
                        {login.status === 'error' &&
                            login.type === 'account' &&
                            !submitting &&
                            this.renderMessage('账户或密码错误（admin/888888）')}
                        <UserName name="userName" placeholder="admin/user" />
                        <Password name="password" placeholder="888888/123456" />
                    </Tab>
                    <div>
                        <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
                            自动登录
                        </Checkbox>
                        <a style={{ float: 'right' }} href="">
                            忘记密码
                         </a>
                    </div>
                    <Submit loading={submitting}>登录</Submit>
                    <div className={'qdp-login-other'}>
                        其他登录方式
                    <Icon className={'qdp-login-icon'} type="alipay-circle" />
                                <Icon className={'qdp-login-icon'} type="taobao-circle" />
                                <Icon className={'qdp-login-icon'} type="weibo-circle" />
                                <Link className={'qdp-login-register'} to="/user/register">
                                    注册账户
                    </Link>
                    </div>
                </Login>
            </div>
        );
    }
}
export default connect(({ login, loading }) => ({
    login,
    submitting: loading.effects['login/login'],
}))(LoginPage)
