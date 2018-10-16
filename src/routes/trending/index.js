import React, { Component } from 'react';
import { connect } from 'dva';
import DragactCard from "../../components/DragactCard/index.js"
import { Dragact, Form, Button, Select, DatePicker } from "quant-ui"
import debounce from "lodash/debounce"
import Sources from "./sources"
import Topitems from "./topitems"
import Alertcount from "./alertcount"
import Alerttypes from "./alerttypes"

const FormItem = Form.Item;
const fakeData = [
    { GridX: 0, GridY: 0, w: 12, h: 10, key: '0' },
    { GridX: 12, GridY: 0, w: 6, h: 10, key: '1' },
    { GridX: 0, GridY: 10, w: 9, h: 8, key: '2' },
    { GridX: 9, GridY: 10, w: 9, h: 8, key: '3' },
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
    rednerDragact = (item, provided) => {
        if (item.key == 0) {
            return <DragactCard item={item} provided={provided} title={"Sources"}>
                <Sources item={item} />
            </DragactCard>
        } else if (item.key == 1) {
            return <DragactCard item={item} provided={provided} title={"Topitems"}>
                <Topitems item={item} />
            </DragactCard>
        }  else if (item.key == 2) {
            return <DragactCard item={item} provided={provided} title={"Alertcount"}>
                <Alertcount item={item} />
            </DragactCard>
        } else if (item.key == 3) {
            return <DragactCard item={item} provided={provided} title={"Alerttypes"}>
                <Alerttypes item={item} />
            </DragactCard>
        }
    }
    resizeFooterToolbar = () => {
        this.setState({
            width: window.innerWidth
        })
    }
    
    onDragEnd = (GridItemEvent) => {
        const { dispatch } = this.props;
        let { UniqueKey, GridX, GridY, h, w } = GridItemEvent;
        let index = fakeData.findIndex(ele => ele.key == UniqueKey);
        if (fakeData[index].w != w || fakeData[index].h != h) {
            this.props.dispatch({
                type: "trending/size",
                payload: UniqueKey
            })
        }
    }
    render() {
        let { form: { getFieldDecorator } } = this.props;
        return (
            <div>
                <div className="ancoa-content">
                    <Dragact
                        layout={fakeData} //必填项
                        col={18} //必填项
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
