import React, { Component } from 'react';
import { connect } from 'dva';
import GridContent from "../../components/GridContent"
import { Form, Select, DatePicker,Button } from "quant-ui"
import Sources from "./sources"
import Topitems from "./topitems"
import Alertcount from "./alertcount"
import Alerttypes from "./alerttypes"
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;
class Member extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titles: ["趋势:警戒数类型", "高级项目:前十证券交易量", "趋势:警报统计来源", "趋势:警报交易比率"]
        }
    }
    onLayoutChange = () => {
        const { dispatch } = this.props;
        dispatch({
            type: "trending/echartSizeChange"
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
        let { form: { getFieldDecorator } } = this.props;
        return (
            <div>
                <Form style={{ marginBottom: "8px" }} layout="inline">
                    <FormItem
                        label="来源"
                    >
                        {getFieldDecorator('select')(
                            <Select style={{ width: "140px" }} placeholder="请选择">
                                <Option value="china">China</Option>
                                <Option value="use">U.S.A</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        label="证券"
                    >
                        {getFieldDecorator('Security')(
                            <Select style={{ width: "140px" }} placeholder="请选择">
                                <Option value="china">China</Option>
                                <Option value="use">U.S.A</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        label="日期"
                    >
                        {getFieldDecorator('Date')(
                            <RangePicker />
                        )}
                    </FormItem>
                    <FormItem
                        label="绘图"
                    >
                        {getFieldDecorator('Security')(
                            <Select style={{ width: "140px" }} placeholder="请选择">
                                <Option value="china">China</Option>
                                <Option value="use">U.S.A</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        label="风格"
                    >
                        {getFieldDecorator('Security')(
                            <Select style={{ width: "140px" }} placeholder="请选择">
                                <Option value="china">China</Option>
                                <Option value="use">U.S.A</Option>
                            </Select>
                        )}
                    </FormItem>
                    <span className="anc-btns">
                        <Button>刷新绘图</Button>
                    </span>
                    <span className="anc-btns">
                        <Button>OverLay L</Button>
                    </span>
                    <span className="anc-btns">
                        <Button>OverLay R</Button>
                    </span>
                </Form>
                <GridContent
                    name="trending"
                    cols={{ lg: 18, md: 16, sm: 12, xs: 8, xxs: 4 }}
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
