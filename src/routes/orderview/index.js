import React, { Component } from 'react';
import { connect } from 'dva';
import DragactCard from "../../components/DragactCard/index.js"
import { Dragact, Form, Button, Select, DatePicker } from "quant-ui"
import "./index.less";
import Transactions from "./Transactions";
import OrderBook from "./orderbook"
import SellSide from "./sellSide";
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;
const fakeData = [
    { GridX: 0, GridY: 0, w: 5, h: 18, key: '0' },
    { GridX: 5, GridY: 0, w: 8, h: 18, key: '1' },
    { GridX: 13, GridY: 0, w: 3, h: 6, key: '2' },
    { GridX: 13, GridY: 3, w: 3, h: 6, key: '3' },
    { GridX: 13, GridY: 6, w: 3, h: 6, key: '4' },
]
class Member extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: window.innerWidth
        }
    }
    componentDidMount = () => {
        window.addEventListener('resize', this.resizeFooterToolbar);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeFooterToolbar);
    }
    resizeFooterToolbar = () => {
        this.setState({
            width: window.innerWidth
        })
    }
    rednerDragact = (item, provided) => {
        if (item.key == 0) {
            return <DragactCard item={item} provided={provided} title={"Transactions"}>
                <Transactions item={item} />
            </DragactCard>
        } else if (item.key == 1) {
            return <DragactCard item={item} provided={provided} title={"Transactions"}>
                <OrderBook item={item} />
            </DragactCard>
        }  else if (item.key == 2) {
            return <DragactCard item={item} provided={provided} title={"Totals"}>
                <SellSide item={item} />
            </DragactCard>
        } else if (item.key == 3) {
            return <DragactCard item={item} provided={provided} title={"Buy Side"}>
                <SellSide item={item} />
            </DragactCard>
        } else if (item.key == 4) {
            return <DragactCard item={item} provided={provided} title={"Buy Side"}>
                <SellSide item={item} />
            </DragactCard>
        }
    }
    onDragEnd = (GridItemEvent) => {
        const { dispatch } = this.props;
        let { UniqueKey, GridX, GridY, h, w } = GridItemEvent;
        let index = fakeData.findIndex(ele => ele.key == UniqueKey);
        if (fakeData[index].w != w || fakeData[index].h != h) {
            dispatch({
                type: "orderview/size",
                payload: UniqueKey
            })
        }
    }
    render() {
        let { form: { getFieldDecorator } } = this.props;
        return (
            <div>
                <Form style={{ marginBottom: "14px" }} layout="inline">
                    <FormItem
                        label="Source"
                    >
                        {getFieldDecorator('select')(
                            <Select style={{ width: "140px" }} placeholder="Please select a country">
                                <Option value="china">China</Option>
                                <Option value="use">U.S.A</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        label="Security"
                    >
                        {getFieldDecorator('Security')(
                            <Select style={{ width: "140px" }} placeholder="Please select a country">
                                <Option value="china">China</Option>
                                <Option value="use">U.S.A</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        label="Date"
                    >
                        {getFieldDecorator('Date')(
                            <RangePicker />
                        )}
                    </FormItem>
                    <FormItem
                        label="Plot"
                    >
                        {getFieldDecorator('Security')(
                            <Select style={{ width: "140px" }} placeholder="Please select a country">
                                <Option value="china">China</Option>
                                <Option value="use">U.S.A</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        label="Style"
                    >
                        {getFieldDecorator('Security')(
                            <Select style={{ width: "140px" }} placeholder="Please select a country">
                                <Option value="china">China</Option>
                                <Option value="use">U.S.A</Option>
                            </Select>
                        )}
                    </FormItem>
                    <span className="anc-btns">
                        <Button>New Plot</Button>
                    </span>
                    <span className="anc-btns">
                        <Button>OverLay L</Button>
                    </span>
                    <span className="anc-btns">
                        <Button>OverLay R</Button>
                    </span>
                </Form>
                <div>
                    <Dragact
                        layout={fakeData} //必填项
                        col={16} //必填项
                        width={this.state.width - 48} //必填项
                        rowHeight={40} //必填项
                        margin={[5, 5]} //必填项
                        className="plant-layout" //必填项
                        style={{ background: '#333' }} //非必填项
                        placeholder={true}
                        onDragEnd={this.onDragEnd}
                    >
                        {
                            this.rednerDragact
                        }
                    </Dragact>

                </div>
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
