import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Row, Col, Card,Dragact } from "quant-ui"
import AlertsHeader from './AlertsHeader';
import AlertTable from './AlertTable';
import DragactCard from "../../components/DragactCard/index.js"
import "./index.less";


const fakeData = [
    { GridX: 0, GridY: 0, w: 18, h: 9, key: '0' },
    { GridX: 0, GridY: 9, w: 6, h: 9, key: '1' },
    { GridX: 6, GridY: 9, w: 6, h: 9, key: '2' },
    { GridX: 12, GridY: 9, w: 6, h: 9, key: '3' },
]
class Alerts extends Component {
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
            return <DragactCard item={item} provided={provided} title={"交易视图"}>
                <AlertTable item={item} />
            </DragactCard>
        } else if (item.key == 1) {
            return <DragactCard item={item} provided={provided} title={"Sell Side"}>
                <AlertTable item={item} />
            </DragactCard>
        } else if (item.key == 2) {
            return <DragactCard item={item} provided={provided} title={"Totals"}>
                <AlertTable item={item} />
            </DragactCard>
        } else if (item.key == 3) {
            return <DragactCard item={item} provided={provided} title={"Buy Side"}>
                <AlertTable item={item} />
            </DragactCard>
        }
    }
    render() {
        return (
            <div>
                <AlertsHeader />
                <div style={{marginTop:"14px"}} className="ancoa-content">
                    <Dragact
                            layout={fakeData} //必填项
                            col={18} //必填项
                            width={this.state.width - 48} //必填项
                            rowHeight={40} //必填项
                            margin={[5, 6]} //必填项
                            className="plant-layout" //必填项
                            style={{ background: '#333' }} //非必填项
                            placeholder={true}
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
    Form.create()(Alerts)
)
