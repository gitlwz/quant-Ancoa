import React, { Component } from 'react';
import { connect } from 'dva';
import echarts from 'echarts';
let option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
};

class Member extends Component {
    constructor(props) {
        super(props)
        this.myChart = null;
        this.resize = null;
    }
    componentDidMount = () => {
        this.myChart = echarts.init(document.getElementById(`trending-trade-topitems`))
        this.myChart.setOption(option)
        this.resize = this.myChart.resize;
        const { item, dispatch, echartsArray } = this.props;
        let _echarts = echartsArray.find((ele) => ele.key == item.key);
        if (!!_echarts) {
            _echarts.echart = this.myChart
        } else {
            echartsArray.push({
                key: item.key,
                echart: this.myChart
            })
        }
        dispatch({
            type: "trending/save",
            payload: echartsArray
        })
        window.addEventListener("resize", this.resize);
    }
    componentWillUnmount = () => {
        window.removeEventListener("resize", this.resize);
    }
    render() {

        return (
            <div id="trending-trade-topitems" style={{ width: "100%", height: `calc(100% - 36px)` }}>
            </div>
            );
    }
}
export default connect(({ trending }) => {
    const { echartsArray } = trending;
    return {
        echartsArray
    }

})(
    Member
)
