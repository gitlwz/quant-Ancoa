import React, { Component } from 'react';
import { connect } from 'dva';
import echarts from 'echarts';
function randomData() {
    let data = []
    for (let index = 0; index < 10; index++) {
        let now = new Date(+new Date() + index*24 * 60 * 60 * 1000);
        let value = Math.random() * 100;
        data.push({
            name: now.toString(),
            value: [
                [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                Math.round(value)
            ]
        })

    }
    return data
}

let option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        left: "right",
        orient: "vertical",
        top: "20px",
        align: "left",
        data: ['交易化', '非正常交易', '非正常价格交易', '异常订单', '非法预先交易', '高波动性', "非正常的价格上涨"]
    },
    grid: {
        left: '3%',
        right: '150px',
        bottom: '20px',
        top: "10px",
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {},
        }
    },
    xAxis: {
        type: 'time',
        boundaryGap: false,
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '交易化',
            type: 'line',
            data: randomData()
        },
        {
            name: '非正常交易',
            type: 'line',
            data:randomData()
        },
        {
            name: '非正常价格交易',
            type: 'line',
            data:randomData()
        },
        {
            name: '异常订单',
            type: 'line',
            data:randomData()
        },
        {
            name: '非法预先交易',
            type: 'line',
            data:randomData()
        },
        {
            name: '高波动性',
            type: 'line',
            data:randomData()
        },
        {
            name: '非正常的价格上涨',
            type: 'line',
            data:randomData()
        }
    ]
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
        this.myChart = echarts.init(document.getElementById(`trending-trade-view`))
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
            <div id="trending-trade-view" style={{ width: "100%", height: `100%` }}>
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
