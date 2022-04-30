//先克隆marquee里所有行（row）
$('.marquee-view .marquee').each(function(){
   let rows = $(this).children().clone();
   $(this).append(rows);
})
//应用图表
  //实例化对象 注意这里有点 类选择器
//   (function(){
//     let myChart = echarts.init(document.querySelector('.box1'));

// //指定配置项和数据

// let option = {

//   tooltip: {
//     trigger: 'item',
//     formatter: '{a} <br/>{b} : {c} ({d}%)'
//   },

 
//   series: [
    
//     {
//       name: 'Area Mode',
//       type: 'pie',
//       radius: [20, 140],
//       center: ['75%', '50%'],
//       roseType: 'area',
//       itemStyle: {
//         borderRadius: 5
//       },
//       data: [
//         { value: 30, name: 'rose 1' },
//         { value: 28, name: 'rose 2' },
//         { value: 26, name: 'rose 3' },
//         { value: 24, name: 'rose 4' },
//         { value: 22, name: 'rose 5' },
//         { value: 20, name: 'rose 6' },
//         { value: 18, name: 'rose 7' },
//         { value: 16, name: 'rose 8' }
//       ]
//     }
//   ]
// };
// //配置项和数据给我们实例化对象
// myChart.setOption(option);
//    })()

// 

// (function(){
//   let myChart = echarts.init(document.querySelector('.box1'));

// //指定配置项和数据

// let option = {
// tooltip: {
//   trigger: 'item',
//   formatter: '{a} <br/>{b} : {c} ({d}%)'
// },
// //修改颜色的位置
// color: [
//     '#006cff','#60cda0','#ed8884','#ff9f7f','#0096ff',
//     '#9fe6ff','#32c5e9',
// ],
// series: [
//   {
//     name: '点位模式',
//     type: 'pie',
//     radius: [20, 80],
//     center: ['50%', '50%'],
//     roseType: 'radius',
//     itemStyle: {
//       borderRadius: 0
//     },
//     colorBy :'data',
//     data: [
//       { value: 30, name: '教学楼点位' },
//       { value: 28, name: '食堂点位' },
//       { value: 22, name: '图书馆点位' },
//       { value: 24, name: '艺体楼点位' },
//       { value: 15, name: '操场点位' },
//       { value: 20, name: '宿舍楼点位' },
//       { value: 18, name: '行政楼点位' },
      
//     ],
//     //改字体 颜色
//     label:{
//         fontSize : 10,
//         color:'rgb(189, 189, 255)',
//         fontWeight :'normal'
//     },
//     //改线长度
//     labelLine:{
//         length:6,length2:10
//     }


//   }
// ]
// };
// //配置项和数据给我们实例化对象
// myChart.setOption(option);
// //饼图适配屏幕缩放
// window.addEventListener('resize',function(){
//   //让图表调用resize这个函数 调用这个方法
//   myChart.resize();
// })
//  })()

//折现图
(function(){
  //实例化对象
  let myChart = echarts.init(document.querySelector('.line'));
  //配置数据
  let option = {

    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Email', 'Union Ads' ]
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
   
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      }
    ]
  };
  //把数据给对象
  myChart.setOption(option);
})()