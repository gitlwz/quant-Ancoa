import React, { Component } from 'react';
import { connect } from 'dva';
import GridContent from "../../components/GridContent"
import {  Form } from "quant-ui"
import Sources from "./sources"
import Topitems from "./topitems"
import Alertcount from "./alertcount"
import Alerttypes from "./alerttypes"

class Member extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titles: ["趋势:警戒数类型", "高级项目:前十证券交易量", "趋势:警报统计来源", "趋势:警报交易比率"]
        }
    }
    onLayoutChange = () => {
        const  { dispatch } = this.props;
        dispatch({
            type:"trending/echartSizeChange"
        })
    }
    renderItem = (item) => {
        if (item.i == 0) {
            return <Sources item={item} />
        } else if (item.i == 1) {
            return <Topitems item={item} />
        } else if (item.i == 2) {
            return <Alertcount item={item} />
        } else if (item.i == 3) {
            return <Alerttypes item={item} />
        }
    }

    render() {
        return (
            <div>
                <GridContent
                    name="trending"
                    cols ={{ lg: 18, md: 16, sm: 12, xs: 8, xxs: 4 }}
                    titles={this.state.titles}
                    onLayoutChange={this.onLayoutChange}
                    defaultLayouts={
                        {
                            lg: [
                                { x: 0, y: 0, w: 12, h: 10, i: '0' },
                                { x: 12, y: 0, w: 6, h: 10, i: '1' },
                                { x: 0, y: 10, w: 9, h: 8, i: '2' },
                                { x: 9, y: 10, w: 9, h: 8, i: '3' },

                            ]
                        }
                    }
                    renderItem={this.renderItem}
                />
            </div>

        );
    }
}
export default connect(({ loading }) => {
    return {

    }

})(
    Form.create()(Member)
)
