import React, { Component } from 'react';
import { connect } from 'dva';
import echarts from 'echarts';
import waring from '../../assets/waring.png';
function randomData() {
    now = +now + nextTime;
    value = Math.random() * 500 + 20;
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
        type: "time",
        // min:echarts.format.formatTime('yyyy-MM-dd hh:mm:ss',new Date())
    },
    dataZoom: [{
        type: "inside",
        // startValue: new Date(+now - 4 * nextTime),
        // endValue: now,
        filterMode: 'empty'
    }, {
        show: true,
        bottom: 10,
        type: 'slider',
        start: 30,
        end: 100,
        // bottom: 10,
        // handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        // handleSize: '105%'
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            animation: false,
            label: {
                backgroundColor: '#505765'
            }
        }
    },
    // tooltip: {
    //     show: true,
    //     trigger: "item",
    //     enterable:true,
    //     formatter: function (params) {
    //         if (params.seriesName == "a2") {
    //             return `<div style="padding: 20px;">
    //                 <h2 style="color: #FFFFFF;">Alert Details</h2>
    //                 <table frame="void"  cellpadding="4px" rules="none">
    //                     <tr>
    //                         <td>ID</td>
    //                         <td>
    //                             1684
    //                         </td>
    //                     </tr>
    //                     <tr>
    //                         <td>ID</td>
    //                         <td>
    //                         <div class="anc-echats-break">
    //                                的内容很长的内容很长的内容很长的内容
    //                         </div>
    //                         </td>
    //                     </tr>
    //                 </table>
    //             </div>`
    //         }
    //         return null
    //     }
    // },
    yAxis: {},
    series: [{
        name: "a1",
        z: 10,
        symbolSize: 20,
        data: [],
        type: 'scatter',
    }, {
        name: "a3",
        data: [],
        z: 1,
        type: 'line',
    }, {
        name: "a2",
        symbolSize: 20,
        data: [],
        z: 1,
        type: 'scatter',
        symbol: "image://" + waring
    },]
}

function option(data, data1, data2) {
    return {
        series: [{
            data: data,
        }, {
            data: data1,
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
            type: "analytics/save",
            payload: echartsArray
        })
    }
    componentDidMount = () => {
        this.myChart = echarts.init(document.getElementById(`analytics-trade-view`))
        this.myChart.setOption(config)
        this.resize = this.myChart.resize;
        this.saveEchartsToModels(this.myChart)

        setInterval(() => {
            data.shift();
            data.push(randomData());
            let data2 = data.map((ele) => {
                return [ele.value[0], 1]
            })
            let data1 = [];
            data.forEach((ele, index, arr) => {
                if (index == arr.length - 1) {
                    data1.push(ele.value)
                } else {
                    data1.push(ele.value)
                    let arr1 = [
                        arr[index + 1].value[0],
                        ele.value[1]
                    ]
                    data1.push(arr1)
                }
            })
            this.myChart.setOption(option(data, data1, data2));
        }, 2000)
        window.addEventListener("resize", this.resize);
    }
    componentWillUnmount = () => {
        window.removeEventListener("resize", this.resize);
    }
    render() {

        return (
            <div id="analytics-trade-view" style={{ width: "100%", height: `100%` }}>


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
