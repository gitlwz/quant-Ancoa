import React, { Component } from 'react';
import { connect } from 'dva';
import echarts from 'echarts';
var myData = ['1249.56', '1240.30', '1231.05', '1221.79','1212.54', '1203.28', "1194.02","1184.77","1175.51","1166.26","1157.00","1147.74","1138.49","1129.23","1119.98","1110.72","1101.46","1092.21","1082.95","1073.70","1064.44"];
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
                data: ["","","","","","","","","","","55","300","450","","","240","","","30","",""],
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
                data: ["","","","","","","","","","","","120","","","","","","","","",""],
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
                data: ["","23","","","22","","","500","158","251","54","","","","","","","","","",""],
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
                data: ["","23","","","22","","","500","158","251","54","","","","","","","","","",""],
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
            type: "orderview/save",
            payload: echartsArray
        })
    }
    componentDidMount = () => {
        this.myChart = echarts.init(document.getElementById(`orderview-trade-view`))
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
