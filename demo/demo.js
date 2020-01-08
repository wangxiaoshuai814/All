window.onload = function() {
    option = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
        }]
    };
    var myCharts = echarts.init(document.getElementById('demo'))
    var res = [
        [30, 45, 542, 232, 423, 545, 424],
        [432, 42, 423, 655, 422, 556, 244],
        [22, 42, 232, 453, 665, 556, 222]
    ]
    setInterval(giet, 1000)

    function giet() {
        var i = parseInt(Math.random() * res.length) //随机取整数，生成一个大于0小于1 的小数 parseint碰见小数点后面直接截取了
        option.series[0].data = res[i]
        myCharts.setOption(option)
        console.log(i)
    }
    giet();
    window.onresize = function() {
        myCharts.resize();
    }
}