import React, { Component } from 'react';
import { connect } from 'dva';
import { Tabs } from 'quant-ui';
import Kline from "./kline";
const TabPane = Tabs.TabPane;
class Member extends Component {
    render() {
        return (
            <div style={{ width: "100%", height: `calc(100vh - 88px)` }}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Tab 1" style={{height:`calc(100vh - 153px)`}} key="1"><Kline /></TabPane>
                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
                
            </div>

        );
    }
}
export default connect(({ loading }) => {
    return {

    }
})(
    Member
)
