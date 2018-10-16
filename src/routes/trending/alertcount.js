import React, { Component } from 'react';
import { connect } from 'dva';
import echarts from 'echarts';
let option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['直接访问','搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

class Member extends Component {
    constructor(props) {
        super(props)
        this.myChart = null;
        this.resize = null;
    }
    componentDidMount = () => {
        this.myChart = echarts.init(document.getElementById(`trending-trade-alertcount`))
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
            <div id="trending-trade-alertcount" style={{ width: "100%", height: `calc(100% - 36px)` }}>
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
