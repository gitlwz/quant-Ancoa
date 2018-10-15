import React, { Component } from 'react';
import { connect } from 'dva';
import echarts from 'echarts';
import moment from 'moment';
function randomData() {
    now = new Date(+now + nextTime);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [now,
            Math.round(value)
        ]
    }
}

var data = [];
var now = +new Date();
var nextTime = 15 * 60 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 10; i++) {
    data.push(randomData());
}

let config = {
    xAxis: {
        type: "time"
    },
    dataZoom: {
        type: "inside",
        // startValue: new Date(+now - 4 * nextTime),
        // endValue: now,
        filterMode: 'empty'
    },
    yAxis: {},
    series: [{
        symbolSize: 20,
        data: [],
        type: 'scatter'
    }]
}

function option(data) {
    return {
        series: [{
            data: data,
        }]
    }
};

class Member extends Component {
    constructor(props) {
        super(props)
        this.myChart = null;
        this.resize = null;
    }
    componentDidMount = () => {
        this.myChart = echarts.init(document.getElementById(`analytics-trade-view`))
        this.myChart.setOption(config)
        this.resize = this.myChart.resize;
        const { item, dispatch, echartsArray } = this.props;
        let _echarts = echartsArray.find((ele) => ele.key == item.key);
        if (!!_echarts) {

        } else {
            echartsArray.push({
                key: item.key,
                echart: this.myChart
            })
        }
        dispatch({
            type: "analytics/save",
            payload: echartsArray
        })
        setInterval(() => {
            data.shift();
            data.push(randomData());
            this.myChart.setOption(option(data));
        }, 2000)
        window.addEventListener("resize", this.resize);
    }
    componentWillUnmount = () => {
        window.removeEventListener("resize", this.resize);
    }
    render() {

        return (
            <div id="analytics-trade-view" style={{ width: "100%", height: `calc(100% - 36px)` }}>


            </div>

        );
    }
}
export default connect(({ analytics }) => {
    const { echartsArray } = analytics;
    return {
        echartsArray
    }

})(
    Member
)
