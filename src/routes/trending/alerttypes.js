import React, { Component } from 'react';
import { connect } from 'dva';
import echarts from 'echarts';
function randomData() {
    let data = []
    for (let index = 0; index < 10; index++) {
        let now = new Date(+new Date() + index * 24 * 60 * 60 * 1000);
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
    title: {
        text: 'Alert Types:All'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        left: "right",
        orient: "vertical",
        top: "20px",
        align: "left",
        data: ['IRS', 'EBR']
    },
    grid: {
        left: '50',
        right: '100px',
        bottom: '20px',
        top: "50px",
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'time',
        boundaryGap: false,
    },
    yAxis: {
        type: 'value',
        name: "Alert to Trade \n Ratio",
        // nameRotate: 90,
        nameGap: 30,
        nameLocation: "middle",
        nameTextStyle:{
            fontWeight:"bold",
            fontSize:"18",
            align :"right",
        },
        axisLine: {
            lineStyle: {
                color: '#333'
            }
        },
        axisLabel: {
            formatter: function (value) {
                return value;
            }
        },
    },
    series: [

        {
            name: 'IRS',
            type: 'line',
            data: randomData()
        },
        {
            name: 'EBR',
            type: 'line',
            data: randomData()
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
        this.myChart = echarts.init(document.getElementById(`trending-trade-alerttypes`))
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
            <div id="trending-trade-alerttypes" style={{ width: "100%", height: `100%` }}>
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
