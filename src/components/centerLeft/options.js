/*
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-03-01 20:05:08
 * @LastEditors: JayShen
 * @LastEditTime: 2021-04-19 19:18:34
 */
// import echarts from "echarts";
import {
    pieColor,
    pieColor2
} from "@/utils/echartColor";
// 品牌商类型--饼图
export const brandType = (data) => ({
    data: data.map(item => {
        return {
            value: item.value,
            name: item.name
        }
    }),
    lineWidth: 35,
    radius: "70%",
    activeRadius: "75%",
    digitalFlopStyle: {
        // fontSize: 20,
        fill: "#fff",
    },
    color: pieColor,
    legend: {
        show: false,
    },
})
// 品牌商规模--柱状图
export const brandSize = (data = [{
        name: "南阳",
        value: 167,
    },
    {
        name: "周口",
        value: 123,
    },
    {
        name: "漯河",
        value: 98,
    },
    {
        name: "郑州",
        value: 75,
    },
    {
        name: "西峡",
        value: 66,
    },
    {
        name: "西峡1",
        value: 66,
    },
]) => ({
    data: data,
    color: pieColor2,
    unit: "占比",
    showValue: true,
})
// 地域分布--饼图
export const geographicalDistribution = (data = [{
        value: 38,
        regionName: '华南'
    }, {
        value: 31,
        regionName: '华东'
    },
    {
        value: 12,
        regionName: '华北'
    },
    {
        value: 11,
        regionName: '华中'
    },
    {
        value: 3,
        regionName: '西北'
    },
    {
        value: 2,
        regionName: '西南'
    },
    {
        value: 3,
        regionName: '东北'
    },

]) => ({
    radius: "70%",
    activeRadius: "80%",
    data: data.map(item => {
        return {
            value: item.value,
            name: item.regionName
        }
    }),
    color: ['#60CAAE', '#FCCE48', '#315EEF', '#E7A976', '#E96074', '#664CC7', '#3DAAEB'],
    digitalFlopStyle: {
        fontSize: 20
    },
})
// 款式分类--百分比环图
export const styleClassification = (data, color, total) => ({
    color: color,
    legend: {
        show: false
    },

    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['60%', '80%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
        },
        labelLine: {
            show: false
        },
        data: [{
                value: data,
                name: '直接访问',
                label: {
                    normal: {
                        show: true,
                        formatter: '{d}%',
                        textStyle: {
                            fontSize: 18,
                            fontWeight: 'bolder',
                        },
                    }
                },
            },
            {
                value: total,
                name: '邮件营销'
            }
        ]
    }]

});
// 订单金额--柱状图
export const orderAmount = (data = [12, 3, 44, 23, 5, 56]) => ({
    grid: {
        left: "5%",
        right: "5%",
        bottom: "5%",
        top: "10%",
        containLabel: true,
    },
    xAxis: {
        type: "category",
        data: data.map(item => item.code),
        axisLabel: {
            show: true,
            textStyle: {
                color: "#fff",
                fontSize: 14,
            },
        },
    },
    yAxis: {
        type: "value",
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    //设置柱的宽度，要是数据太少，柱子太宽不美观~
    barWidth: 20,
    series: [{
        data: data.map(item => item.value * 100),
        type: 'bar',
        itemStyle: {
            normal: {
                color: function (params) {
                    var colorList = ['#C76668', '#6BB5FE', '#2CCEAF', '#E7A976'];
                    return colorList[params.dataIndex]
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{c}%'
                }
            }
        },
        animationDelay: function (idx) {
            return idx * 40;
        },
    }]
})
// 订单增长情况
export const orderGrowth = (data) => ({
    grid: {
        left: "5%",
        right: "5%",
        bottom: "5%",
        top: "5%",
        containLabel: true,
    },
    xAxis: {
        type: "category",
        data: data.map(item => item.orderMonth),
        axisLabel: {
            show: true,
            textStyle: {
                color: "#fff",
                fontSize: 10,
            },
            interval: "auto",
            rotate: -60

        },
        // 坐标轴设置
        axisLine: {
            show: true,
            lineStyle: {
                color: "#010A1C",
                width: 3, //这里是为了突出显示加上的
            },
        }
    },
    yAxis: {
        type: "value",
        axisLine: {
            show: true,
            lineStyle: {
                color: "#010A1C",
                width: 2, //这里是为了突出显示加上的
            },
        },
        axisLabel: {
            textStyle: {
                color: "#fff",
                fontSize: 12,
            },
        },
        // 背景分割线
        splitLine: {
            show: true,
            interval: 0,
            lineStyle: {
                color: "#010A1C"
            }
        }
    },
    series: [{
        data: data.map(item => item.num),
        type: "bar",
        color: "#60CAAE",
        barWidth: 12,
        borderRadius: [3, 3, 0, 0],
    }, ]
})
// 订单生产类型--饼图
export const orderProductionType = (data = [{
        value: 735,
        name: "中国"
    },
    {
        value: 510,
        name: "美国"
    },
    {
        value: 434,
        name: "发过"
    },
    {
        value: 335,
        name: "因果"
    }
]) => ({
    tooltip: {
        trigger: "item",
    },
    legend: {
        show: true,
        left: 20,
        bottom: 0,
        itemWidth: 14,
        itemHeight: 14,
        textStyle: {
            color: '#C5E4FF',
            fontSize: 16
        }
    },
    series: [{
        // name: "访问来源",
        type: "pie",
        radius: "80%",
        color: ['#FCCE48', '#60CAAE'],
        data: data.map(item => {
            return {
                value: item.num,
                name: item.cooperationType
            }
        }),
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
            },
        },
        // 指示线文字
        label: {
            normal: {
                formatter: "{d}%", //数值和百分比
                fontSize: 16,
            }

        }
    }, ],
})

// 服务类型 雷达图
export const serviceType = (data) => ({
    axisLine: {
        lineStyle: {
            color: 'green',
        },
    },
    radar: {
        center: ['50%', '55%'],
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#C5E4FF',
                fontSize: 20
            }
        },
        //雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
        splitArea: {
            show: false,
            areaStyle: {
                color: 'rgba(255,0,0,0)', // 图表背景的颜色
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                width: 2,
                color: '#1765A5', // 设置网格的颜色
            },
        },
        indicator: data.map(item => {
            return {
                name: item.requirementTypeName,
                max: 1
            }
        })
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        //  color:'red',
        areaStyle: {
            normal: {
                color: '#FF7D7F' // 填充的颜色。[ default: "#000" ]
            }
        },
        data: [{
            value: data.map(item => {
                return item.percent
            })
        }],
        // data: [{
        //     value: [5000, 14000, 28000, 31000, 42000, 21000],
        //     name: '实际开销'
        // }]
    }]
})
// 颜色构成--柱形图
export const colorComposition = (colorCompositionData) => ({
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
        },
    },
    grid: {
        left: "5%",
        right: "5%",
        bottom: "5%",
        top: "5%",
        containLabel: true,
    },
    xAxis: {
        show: false,
    },
    yAxis: {
        type: "category",
        data: colorCompositionData.map((item) => {
            return item.name
        }),
        splitLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: "#C5E4FF",
                fontSize: 20,
            },
        },
    },
    series: [{
        name: "2011年",
        type: "bar",
        data: colorCompositionData.map((item) => {
            return item.value
        }),
        // 柱形图数据展示
        label: {
            show: true,
            position: 'right',
            valueAnimation: true,
            color: '#C5E4FF',
            formatter: '{c}%'
        },
        // 柱形图背部阴影
        showBackground: true,
        backgroundStyle: {
            color: '#0b1838'
        },
        itemStyle: {
            normal: {
                color: function (params) {
                    var colorList = ['#fff', '#E7A976', '#2CCEAF', '#C76668', '#3DAAEB'];
                    return colorList[params.dataIndex]
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{c}%'
                }
            }
        },
    }, ],
    // color: ["#3DAAEB", '#fff'],
    barWidth: 10,
})
// 品牌商订单排行
export const ppsRankList = (data) => ({
    header: ['名称', '数量', '排名'],
    headerBGC: '#15B1AF',
    // oddRowBGC: '#0B86C2',
    // evenRowBGC: '',
    columnWidth: [160],
    align: ['left', 'center', 'center'],
    data: data.map((item, index) => {
        return [
            item.customerName,
            item.quantity,
            index
        ]
    })
})


// 分销商订单排行
export const fxsRankList = (data) => ({
    header: ['名称', '数量', '排名'],
    headerBGC: '#15B1AF',
    // oddRowBGC: '#0B86C2',
    // evenRowBGC: '',
    align: ['left', 'center', 'center'],
    columnWidth: [160],
    data: data.map((item, index) => {
        return [
            item.customerName,
            item.quantity,
            index
        ]
    })
})