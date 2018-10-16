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
    tooltip: {
        show: true,
        trigger: "item",
        triggerOn:"click",
        enterable:true,
        formatter: function (params) {
            if (params.seriesName == "a2") {
                return `<div style="padding: 20px;">
                    <h2 style="color: #FFFFFF;">Alert Details</h2>
                    <table frame="void"  cellpadding="4px" rules="none">
                        <tr>
                            <td>ID</td>
                            <td>
                                1684
                            </td>
                        </tr>
                        <tr>
                            <td>ID</td>
                            <td>
                            <div class="anc-echats-break">
                                   的内容很长的内容很长的内容很长的内容
                            </div>
                            </td>
                        </tr>
                    </table>
                </div>`
            }
            return null
        }
    },
    yAxis: {},
    series: [{
        name: "a1",
        symbolSize: 20,
        data: [],
        type: 'scatter',
    }, {
        name: "a2",
        symbolSize: 20,
        data: [],
        type: 'scatter',

        symbol: "image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7"
    },]
}

function option(data, data2) {
    return {
        series: [{
            data: data,
        }, {
            data: data2,
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
            _echarts.echart = this.myChart
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
            let data2 = data.map((ele) => {
                let _ele = { value: [ele.value[0], 100] }
                return { ..._ele }
            })
            this.myChart.setOption(option(data, data2));
        }, 2000)
        this.myChart
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
