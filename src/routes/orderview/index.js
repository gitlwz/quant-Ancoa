import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Button, Select, DatePicker } from "quant-ui"
import "./index.less";
import Transactions from "./Transactions";
import OrderBook from "./orderbook"
import Orderbooktable from "./orderbooktable"
import SellSide from "./sellSide";
import SellSidehz from "./sellSidehz";
import SellSidhm from "./sellSidehm";
import GridContent from "../../components/GridContent"
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;

class Member extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titles: ["Transactions", "订单薄", "卖", "汇总", "买"],
            lableArray:[{name:"PF1872",id:"1"},{name:"PF1871",id:"2"}],
            lableSelect:1
        }
    }
    onLayoutChange = () => {
        const  { dispatch } = this.props;
        dispatch({
            type:"orderview/echartSizeChange"
        })
    }
    renderItem = (item) => {
        if (item.i == 0) {
            return <Transactions item={item} />
        } else if (item.i == 1) {
            return <OrderBook item={item} />
        } else if (item.i == 2) {
            return <SellSide item={item} />
        } else if (item.i == 3) {
            return <SellSidehz item={item} />
        } else if (item.i == 4) {
            return <SellSidhm item={item} />
        }
    }
    ontagClose = (lableArray,lableSelect) => {
        console.log("*********",lableArray,lableSelect)
        this.setState({
            lableArray,
            lableSelect
        })
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
                    name="orderview"
                    titles={this.state.titles}
                    onLayoutChange={this.onLayoutChange}
                    lableArray = { this.state.lableArray}
                    lableSelect ={ this.state.lableSelect}
                    ontagClose={this.ontagClose}
                    defaultLayouts={
                        {
                            lg: [
                                { x: 0, y: 0, w: 5, h: 18, i: '0' },
                                { x: 5, y: 0, w: 8, h: 18, i: '1' },
                                { x: 13, y: 0, w: 3, h: 6, i: '2' },
                                { x: 13, y: 3, w: 3, h: 6, i: '3' },
                                { x: 13, y: 6, w: 3, h: 6, i: '4' },

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
