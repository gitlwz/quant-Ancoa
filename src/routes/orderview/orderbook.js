import React, { Component } from 'react';
import { connect } from 'dva';
import echarts from 'echarts';
var myData = ['110.82', '110.21', '109.6', '109.1','110.82', '110.21', '109.6', '109.1','110.82', '110.21', '109.6', '109.1','110.82', '110.21', '109.6', '109.1','110.82', '110.21', '109.6', '109.1','110.82', '110.21', '109.6', '109.1'];
let option = {
        legend: {
            show:false,
            data: ['BID', 'ASK'],
            top: 4,
            right: '20%',
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            formatter: '{b}<br/>{a}: {c}人',
            axisPointer: {
                type: 'shadow',
            }
        },
        dataZoom:[{
            type:"slider",
                yAxisIndex: [0,1, 2] // 表示这个 dataZoom 组件控制 第一个 和 第三个 yAxis

        }],
        toolbox:{
            right:20,
            feature:{
                saveAsImage: {},
                restore: {},
            }
        },
        
        grid: [{
            show: false,
            left: '4%',
            top: 60,
            bottom: 60,
            containLabel: true,
            width: '37%'
        }, {
            show: false,
            left: '50.5%',
            top: 80,
            bottom: 60,
            width: '0%',
        }, {
            show: false,
            right: '4%',
            top: 60,
            bottom: 60,
            containLabel: true,
            width: '37%'
        }, ],

        xAxis: [
            {
            type: 'value',
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'top',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#B2B2B2',
                    fontSize: 12,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1F2022',
                    width: 1,
                    type: 'solid',
                },
            },
        }, {
            gridIndex: 1,
            show: false,
        }, {
            gridIndex: 2,
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'top',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#B2B2B2',
                    fontSize: 12,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1F2022',
                    width: 1,
                    type: 'solid',
                },
            },
        }, ],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                margin: 8,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },

            },
            data: myData,
        }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },

            },
            data: myData.map(function(value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center',
                    }
                }
            }),
        }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },

            },
            data: myData,
        }, ],
        series:  [{
                name: 'BID',
                type: 'bar',
                barGap: 20,
                stack: '入',
                barWidth: 30,
                label: {
                    normal: {
                        show: true,
                    },
                    
                },
                itemStyle: {
                    normal: {
                        color: '#659F83',
                    },
                },
                data: ["", "", 550,200],
            },{
                name: 'BID2',
                type: 'bar',
                barGap: 20,
                barWidth: 30,
                stack: '入',
                label: {
                    normal: {
                        show: true,
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#2E8534',
                    },
                },
                data: ["530","530","530","530","530","530","530","530","530","530","530","530","530","530","530","530","530","530","530","530"],
            },{
                name: 'ASK',
                type: 'bar',
                barGap: 20,
                stack: '出',
                barWidth: 30,
                xAxisIndex: 2,
                yAxisIndex: 2,
                label: {
                    normal: {
                        show: true,
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#F68989',
                    },
                },
                data: [121, 388, 233],
            },{
                name: 'ASK2',
                type: 'bar',
                stack: '出',
                barGap: 20,
                barWidth: 30,
                xAxisIndex: 2,
                yAxisIndex: 2,
                label: {
                    normal: {
                        show: true,
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#C02F52',
                    },
                },
                data: [121, 388, 233],
            }
        ],
        animationEasing: 'elasticOut',
        animationDurationUpdate: function (idx) {
            return 500;
        }
};




class Member extends Component {
    constructor(props) {
        super(props)
        this.myChart = null;
        this.resize = null;
    }
    componentDidMount = () => {
        this.myChart = echarts.init(document.getElementById(`orderview-trade-view`))
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
            type: "orderview/save",
            payload: echartsArray
        })
        window.addEventListener("resize", this.resize);
        setTimeout(()=>{
            this.myChart.setOption({
                series:[{
                    data: ["", "", 550,100],
                }]
            })
        },2000)
    }
    componentWillUnmount = () => {
        window.removeEventListener("resize", this.resize);
    }
    render() {

        return (
            <div id="orderview-trade-view" style={{ width: "100%", height: `calc(100% - 36px)` }}>
            </div>
            );
    }
}
export default connect(({ orderview }) => {
    const { echartsArray } = orderview;
    return {
        echartsArray
    }

})(
    Member
)
