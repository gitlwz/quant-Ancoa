import React, { Component } from 'react';
import { connect } from 'dva';
import echarts from 'echarts';
import waring from '../../assets/waring.png';
import waring1 from '../../assets/waring1.png';
import waring2 from '../../assets/waring2.png';
import waring10 from '../../assets/waring10.png';
import moment from "moment";


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

function getLineData(data) {
    let lineData = []
    data.forEach((ele, index, arr) => {
        lineData.push({
            value: [ele.value[0], ele.value[1]]
        })
        if (index !== arr.length - 1) {
            lineData.push({
                value: [arr[index].value[0], arr[index + 1].value[1]]
            })
        }
    })
    return lineData
}

var data = [];
var now = +new Date();
var nextTime = 15 * 60 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 10; i++) {
    data.push(randomData());
}

let config = {
    legend: {
        data: ["买", "卖", "成交"]
    },
    grid: [{
        
    },{

    }],
    yAxis: [{ name: "价格"},{ name: "价格222",gridIndex:1,show:false}],
    xAxis: [{
        type: "time",
        name: "时间",

        axisLabel: {
            formatter: function (value, index) {
                return moment(value).format("YY-MM-DD HH:mm:ss");
            }
        }
    },{
        type: "time",
        show:false,
        gridIndex:1,
        
    }],
    toolbox: {
        feature: {
            dataZoom:{
                xAxisIndex:[0,1],
                yAxisIndex:0,
            },
            saveAsImage: {},
            restore: {}
        }
    },
    dataZoom: [{
        type: "inside",
        filterMode: 'none'
    }, {
        show: true,
        bottom: 10,
        type: 'slider',
        start: 30,
        end: 100,
        xAxisIndex:[0,1]
        // bottom: 10,
        // handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        // handleSize: '105%'
    },{
        show: true,
        type: 'slider',
        orient:"vertical"
        // bottom: 10,
        // handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        // handleSize: '105%'
    }],
    tooltip: {
        trigger: 'item',
        formatter:  (params) => {
            if (params.seriesName == "waring") {
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
                                的内容很长的内容很长的内容很长的内容
                            </td>
                        </tr>
                    </table>
                </div>`
            }

            let str = ""
            str += `
                <div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">
                ${params.marker}${params.seriesName}
                </div>
                时间： ${params.value[0]}
                <br/>
                价格：${params.value[1]}
                <br/>
                手数：${params.value[2]}
                <br/>
                很多信息：1
                <br/>
                很多信息：2
                `
            return str;
        },
    },
    series: [{
        name: "买",
        z: 10,
        symbolSize: 20,
        data: [],
        type: 'scatter',
        itemStyle: {
            color: "#00B0F0",
            borderColor: "#0066CC",
            borderWidth: 1,
        },
        xAxisIndex:0,
        yAxisIndex:0,
        emphasis: {
            show: true,
            itemStyle: {
                shadowBlur: 5,
                shadowColor: '#0066CC',
                shadowOffsetY: 2,
            }
        }
        // ,symbolSize:function(data){
        //     return data[2]/5
        // }
    }, {
        name: "卖",
        z: 10,
        symbolSize: 20,
        data: [],
        type: 'scatter',
        itemStyle: {
            color: "#FF0000",
            borderColor: "#FF3300",
            borderWidth: 1,
        },
        xAxisIndex:0,
        yAxisIndex:0,
        emphasis: {
            show: true,
            itemStyle: {
                shadowBlur: 5,
                shadowColor: '#FF3300',
                shadowOffsetY: 2,
            }

        }
        // ,symbolSize:function(data){
        //     return data[2]/5
        // }
    }, {
        name: "成交",
        z: 10,
        symbolSize: 20,
        data: [],
        type: 'scatter',
        itemStyle: {
            color: "#92D050",
            borderColor: "#92D050",
            borderWidth: 1,
        },
        xAxisIndex:0,
        yAxisIndex:0,
        emphasis: {
            show: true,
            itemStyle: {
                shadowBlur: 5,
                shadowColor: '#92D050',
                shadowOffsetY: 2,
            }
        }
        // ,symbolSize:function(data){
        //     return data[2]/5
        // }
    }, {
        name: "waring",
        symbolSize: 20,
        data: [],
        symbolKeepAspect: true,
        z: 1,
        xAxisIndex:1,
        yAxisIndex:1,
        type: 'scatter',
        symbol: "image://" + waring
    }, {
        name: "line",
        data: [],
        z: 1,
        xAxisIndex:0,
        yAxisIndex:0,
        hoverAnimation: false,
        legendHoverLink: false,
        type: 'line',
        symbol: "none"
    }]
}

function option() {
    let data = [{
        value: ['2018/10/29 10:00:01.237', 100, Math.random() * 250],

    }, {
        value: ['2018/10/29 10:00:01.239', 102, Math.random() * 250]
    }, {
        value: ["2018/10/29 10:00:04.471", 105, Math.random() * 250]
    }, {
        value: ["2018/10/29 10:00:10.437", 106, Math.random() * 250]
    }, {
        value: ["2018/10/29 10:00:10.649", 107, Math.random() * 250]
    }, {
        value: ["2018/10/29 10:00:10.653", 102, Math.random() * 250]
    }, {
        value: ["2018/10/29 10:00:11.249", 105, Math.random() * 250]
    }, {
        value: ["2018/10/29 10:04:01.251", 103, Math.random() * 250]
    }, {
        value: ["2018/10/29 10:10:03.456", 100, Math.random() * 250]
    }, {
        value: ["2018/10/29 10:15:45.255", 103, Math.random() * 250]
    }, {
        value: ["2018/10/29 10:15:47.256", 102, Math.random() * 250]
    }, {
        value: ["2018/10/29 10:20:59.299", 102, Math.random() * 250]
    }, {
        value: ["2018/10/29 10:25:59.261", 100, Math.random() * 250]
    }
    ]
    let data2 = [
        { value: ["2018/10/29 10:00:01.238", 100, Math.random() * 250] },
        { value: ["2018/10/29 10:00:03.340", 101, Math.random() * 250] },
        { value: ["2018/10/29 10:00:06.242", 102, Math.random() * 250] },
        { value: ["2018/10/29 10:00:10.647", 103, Math.random() * 250] },
        { value: ["2018/10/29 10:00:10.651", 105, Math.random() * 250] },
        { value: ["2018/10/29 10:00:10.654", 103, Math.random() * 250] },
        { value: ["2018/10/29 10:01:00.420", 104, Math.random() * 250] },
        { value: ["2018/10/29 10:06:06.763", 103, Math.random() * 250] },
        { value: ["2018/10/29 10:10:03.460", 102, Math.random() * 250] },
        { value: ["2018/10/29 10:15:46.255", 101, Math.random() * 250] },
        { value: ["2018/10/29 10:20:54.457", 102, Math.random() * 250] },
        { value: ["2018/10/29 10:22:01.540", 101, Math.random() * 250] },
        { value: ["2018/10/29 10:25:59.271", 101, Math.random() * 250] },
    ]
    let data3 = [
        {
            value: ["2018/10/29 10:00:01.238", 100, Math.random() * 250],
            symbolOffset: ['50%', 0]
        },
        { value: ["2018/10/29 10:00:03.340", 101, Math.random() * 250] },
        { value: ["2018/10/29 10:00:06.242", 102, Math.random() * 250] },
        { value: ["2018/10/29 10:00:10.647", 103, Math.random() * 250] },
        { value: ["2018/10/29 10:00:10.651", 105, Math.random() * 250] },
        { value: ["2018/10/29 10:00:10.654", 103, Math.random() * 250] },
        { value: ["2018/10/29 10:01:00.420", 104, Math.random() * 250] },
        { value: ["2018/10/29 10:06:06.763", 103, Math.random() * 250] },
        { value: ["2018/10/29 10:10:03.460", 102, Math.random() * 250] },
        { value: ["2018/10/29 10:15:46.255", 101, Math.random() * 250] },
        { value: ["2018/10/29 10:20:54.457", 102, Math.random() * 250] },
        { value: ["2018/10/29 10:22:01.540", 101, Math.random() * 250] },
        { value: ["2018/10/29 10:25:59.271", 101, Math.random() * 250] },
    ]

    let data4 = [
        { value: ["2018/10/29 10:00:01.238", 0] },
        { value: ["2018/10/29 10:00:03.340", 0] },
        { value: ["2018/10/29 10:00:06.242", 0] },
        { value: ["2018/10/29 10:00:10.647", 0] },
        { value: ["2018/10/29 10:00:10.651", 0] },
        { value: ["2018/10/29 10:00:10.654", 0] },
        { value: ["2018/10/29 10:01:00.420", 0] },
        { value: ["2018/10/29 10:06:06.763", 0] },
        {
            value: ["2018/10/29 10:10:03.460", 0],
            symbol: "image://" + waring1,
            symbolSize: 40,
        },
        {
            value: ["2018/10/29 10:15:46.255", 0],
            symbol: "image://" + waring2,
            symbolSize: 40,
        },
        {
            value: ["2018/10/29 10:20:54.457", 0],
            symbol: "image://" + waring10,
            symbolSize: 40,
        },
        { value: ["2018/10/29 10:22:01.540", 0] },
        { value: ["2018/10/29 10:25:59.271", 0] },
    ]
    let data5 = getLineData(data3);
    return {
        series: [{
            data: data,
        }, {
            data: data2,
        }, {
            data: data3,
        }, {
            data: data4,
        }, {
            data: data5,
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
        this.myChart.on('legendselectchanged', (params) => {
            if (params.name == "成交") {
                let falg = params["selected"]["成交"]

                this.myChart.dispatchAction({
                    type: 'legendToggleSelect',
                    // 图例名称
                    name: "line"
                })
            }
        });
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
