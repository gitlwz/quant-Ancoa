import React, { PureComponent } from 'react';
import { theme, Menu, Icon, language,utils, Avatar, Dropdown, Button, screenfull, message } from 'quant-ui';
import { Link } from 'dva/router';
import { connect } from 'dva';
import config from "../../common/config.js";
const { store } = utils;
const { getCurrentColor, refreshColor, setCurrentColor } = theme;
let { getCurrentLanguage, setCurrentLanguage, refreshLanguage, getLanguageData } = language;
let $ = getLanguageData;
const colormenu = (
    <Menu
        onClick={colorhandleMenuClick}
        defaultSelectedKeys={[getCurrentColor()]}
    >
        <Menu.Item key="default">{$("默认")}</Menu.Item>
        <Menu.Item key="red">{$("黄色")}</Menu.Item>
        <Menu.Item key="green">{$("绿色")}</Menu.Item>
        <Menu.Item key="purple">{$("紫色")}</Menu.Item>
    </Menu>
)
function colorhandleMenuClick(e) {
    setCurrentColor(e.key)
    refreshColor()
}

const languagemenu = (
    <Menu
        onClick={languagehandleMenuClick}
        defaultSelectedKeys={[getCurrentLanguage()]}
    >
        <Menu.Item key="zh_CN">中文</Menu.Item>
        <Menu.Item key="en_US">English</Menu.Item>
    </Menu>
)
function languagehandleMenuClick(e) {
    let language = "zh_CN";
    if (e.key === "zh_CN") {
        language = "en_US"
    }
    setCurrentLanguage(language);
    refreshLanguage();
}

class GlobalHeader extends PureComponent {
    state = {
        icontype: "arrows-alt"
    }

    toggle = () => {
        const { collapsed, onCollapse } = this.props;
        onCollapse(!collapsed);
        this.triggerResizeEvent();
    };
    triggerResizeEvent = () => {
        const event = document.createEvent('HTMLEvents');
        event.initEvent('resize', true, false);
        window.dispatchEvent(event);
    }
    onMenuClick = ({ key }) => {
        const { dispatch } = this.props;
        if (key === 'logout') {
            dispatch({
                type: 'login/logout',
            });
        } else if (key == "delete") {
            store.remove("layout")
            message.success($('清除成功'));
        }

    }
    screenFull = () => {
        if (screenfull.enabled) {
            if (screenfull.isFullscreen) {
                this.setState({ icontype: 'arrows-alt' });
                screenfull.exit();
            } else {
                this.setState({ icontype: 'shrink' });
                screenfull.request();
            }

        }
    }
    render() {
        const {
            collapsed,
            isMobile,
            logo,
        } = this.props;
        const menu = (
            <Menu className={'menu'} selectedKeys={[]} onClick={this.onMenuClick}>
                <Menu.Item key="reset">
                    <Icon type="user" />{$("修改密码")}
                </Menu.Item>
                <Menu.Item key="delete">
                    <Icon type="delete" />{$("清空布局")}
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="logout">
                    <Icon type="logout" />{$("退出登录")}
                </Menu.Item>
            </Menu>
        );

        let languageData = "中文";
        if (getCurrentLanguage() === "en_US") {
            languageData = "English"
        }
        return (
            <div className={'GlobalHeader header'}>
                {isMobile && [
                    <Link to="/" className={'logo'} key="logo">
                        <img src={config.LOGO} alt="logo" width="32" />
                    </Link>
                ]}

                <Icon
                    className={'trigger'}
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />

                <div className={'right'}>
                    {!isMobile && [
                        <span onClick={languagehandleMenuClick} key="a2" className="language-icon">
                            <Dropdown overlay={languagemenu}>
                                <Button icon="setting">
                                    {languageData} <Icon type="down" />
                                </Button>
                            </Dropdown>
                        </span>,
                        <Dropdown key="a3" overlay={colormenu}>
                            <span className="colormenu">
                                <Icon className="icon" type="skin" />
                            </span>
                        </Dropdown>,
                    ]}
                    <Dropdown overlay={menu}>
                        <span className={`action account`}>
                            <Avatar size="small" className={'avatar'} icon="user" />
                            {/* <span className={'name'}>{userName.info}</span> */}
                        </span>
                    </Dropdown>
                    <span onClick={this.screenFull} className="screenFull">
                        <Icon type={this.state.icontype} />
                    </span >
                </div>
            </div>

        );
    }
}
export default connect(({ loading }) => ({

}))(GlobalHeader)