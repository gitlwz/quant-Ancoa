import React, { Component } from 'react';
import { connect } from 'dva';
import echarts from 'echarts';
let option = {
    xAxis: {
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        axisLabel:{
            rotate:45,
            interval :0,
        },
        data: ['IRS:BKIR', 'IRS:RYA', 'IRS:PAP', 'IRS:CRH', 'IRS:KYG', 'IRS:SKG', 'IRS:ABI', 'IRS:GCC', 'IRS:KSP', 'IRS:ARYN']
    },
    tooltip: {
    },
    grid: {
        top: 10,
        bottom: 20,
        left: 20,
        right: 20,
        containLabel: true
    },
    yAxis: {
        type: 'value',

    },
    series: [{
        name: '交易量',
        type: 'bar',
        barWidth: '60%',
        data: [300, 280, 200, 190, 180, 170, 150, 100, 80, 30],
    }]
};

class Member extends Component {
    constructor(props) {
        super(props)
        this.myChart = null;
        this.resize = null;
    }
    saveEchartsToModels = (myChart) => {
        const { item, dispatch, echartsArray } = this.props;
        let _echarts = echartsArray.find((ele) => ele.i == item.i);
        if (!!_echarts) {
            _echarts.echart = myChart
        } else {
            echartsArray.push({
                i: item.i,
                echart: myChart
            })
        }
        dispatch({
            type: "trending/save",
            payload: echartsArray
        })
    }
    componentDidMount = () => {
        this.myChart = echarts.init(document.getElementById(`trending-trade-topitems`))
        this.myChart.setOption(option)
        this.resize = this.myChart.resize;
        this.saveEchartsToModels(this.myChart)
        window.addEventListener("resize", this.resize);
    }
    componentWillUnmount = () => {
        window.removeEventListener("resize", this.resize);
    }
    render() {

        return (
            <div id="trending-trade-topitems" style={{ width: "100%", height: `100%` }}>
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
