import React, { Component } from 'react';
import { connect } from 'dva';
import { Form } from "quant-ui"
import AlertsHeader from './AlertsHeader';
import AlertTable from './AlertTable';
import GridContent from "../../components/GridContent"
class Alerts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titles: ["未分配的任务", "已分配", "已解决", "已关闭"]
        }
    }

    renderItem = (item) => {
        if (item.i == 0) {
            return <AlertTable
                item={item}
                history={this.props.history}
            />
        } else if (item.i == 1) {
            return <AlertTable item={item} />
        } else if (item.i == 2) {
            return <AlertTable item={item} />
        } else if (item.i == 3) {
            return <AlertTable item={item} />
        }
    }
    render() {
        return (
            <div>
                <AlertsHeader />
                <div style={{ marginTop: "14px" }} className="ancoa-content">
                    <GridContent
                        name="alerts"
                        titles={this.state.titles}
                        cols ={{ lg: 18, md: 16, sm: 12, xs: 8, xxs: 4 }}
                        defaultLayouts={
                            {
                                lg: [
                                    { x: 0, y: 0, w: 18, h: 9, i: '0' },
                                    { x: 0, y: 9, w: 6, h: 9, i: '1' },
                                    { x: 6, y: 9, w: 6, h: 9, i: '2' },
                                    { x: 12, y: 9, w: 6, h: 9, i: '3' },
                                ]
                            }
                        }
                        renderItem={this.renderItem}
                    />
                </div>
            </div>
        );
    }
}


export default connect(({ loading }) => {
    return {

    }

})(
    Form.create()(Alerts)
)
