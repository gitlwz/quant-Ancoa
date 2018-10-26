import React, { Component } from 'react';
import { connect } from 'dva';
import Sandbox from "./sandbox";
import SellSide from "./sellSide";
import { Form, Input, Button, Select, DatePicker } from "quant-ui"
import GridContent from "../../components/GridContent"
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;

class Member2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titles: ["成交视图", "卖", "汇总", "买"]
        }
    }
    onLayoutChange = () => {
        const  { dispatch } = this.props;
        dispatch({
            type:"analytics/echartSizeChange"
        })
    }
    renderItem = (l) => {
        switch (l.i) {
            case "0":
                return <Sandbox item ={l}/>
                break;
            case "1":
                return <SellSide key={l.i} />
                break;
            case "2":
                return <SellSide key={l.i} />
                break;
            case "3":
                return <SellSide key={l.i} />
                break;
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
                    name="analytics"
                    titles={this.state.titles}
                    onLayoutChange={this.onLayoutChange}
                    defaultLayouts={
                        {
                            lg: [
                                { x: 0, y: 0, w: 12, h: 18, i: '0' },
                                { x: 12, y: 0, w: 4, h: 6, i: '1' },
                                { x: 12, y: 6, w: 4, h: 6, i: '2' },
                                { x: 12, y: 12, w: 4, h: 6, i: '3' },
                            ]
                        }
                    }
                    renderItem={this.renderItem}
                />
            </div>
        )
    }
}

export default connect(({ loading }) => {
    return {

    }

})(
    Form.create()(Member2)
)
