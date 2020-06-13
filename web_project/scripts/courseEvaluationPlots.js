var divId = "myDiv";
// var divIdList = ["myDiv1", "myDiv2", "myDiv3", "myDiv4"];
var divIdList = ["myDiv1"];

var reviewClass = ["Terrible", "Fair", "Good", "Excellent", "Perfect"];
// var studentIdentities = ["Undergrads", "Grads", "Overall"];
var studentIdentities = ["Overall"];
var color = ['#012f62', '#6e7693', '#c6c6c6','#dfb879','#e9ab14']
// var distribute = [
//   [0.2, 0.3, 0.5],
//   [0.1, 0.2, 0.2],
//   [0.7, 0.5, 0.3]
// ]
var distribute = [
  [0.1],
  [0.2],
  [0.3],
  [0.3],
  [0.1]
]
var traces = getData();

function setData(name, yValue, color, xValue) {
  var data = {
    name: name,
    x: xValue,
    y: yValue,
    yaxis: 'y',
    type: "bar",
    barmode: 'stack',
    // hovertemplate: "%{x:%}",
    texttemplate:"%{x:%}",
    textposition: 'auto',
    hoverinfo: 'none',
    orientation: 'h',
    marker: {
      color: color
    },
  };
  return data;
}

function getData() {
  data = [];
  for (var i = 0; i < reviewClass.length; i++) {
    data.push(setData(reviewClass[i], studentIdentities, color[i], distribute[i]));
  }
  return data;
}


var layouts = {
  // title: "reviews of the professor",
  barmode: "stack",
  // hovermode: "closest",
  xaxis: {
    tickformat: "%",
    showgrid: false,
    zeroline: false,
    fixedrange: true,
    // domain: [0, 1]
    showticklabels: false,
    // tickvals: [0,1],
    // ticktext : ['terrible', 'exellent'],
  },
  yaxis: {
    // anchor: 'y',
    automargin: true,
    fixedrange: true,
    showticklabels: false,
  },
  // plot_bgcolor:  "#fbad50",
  // paper_bgcolor: "#fbad50",
  width: $("#myDiv1").width(),
  height: $("#myDiv1").height(),
  // autosize: true,
  margin: {
    l: 10,
    r: 10,
    b: 5,
    t: 5,
    pad: 0
  },
  showlegend: false,
  static: true,
};

var display = {
  displayModeBar: false,
  // responsive: true
}

for (let i = 0; i < divIdList.length; i++) {
  Plotly.newPlot(divIdList[i], traces, layouts, display); 
  // window.onresize = function() {
  //   Plotly.Plots.resize(gd);
  // };
}

// window.onresize = function () {
//   Plotly.Plots.resize(gd);
// };

// Plotly.newPlot(divId, traces, layouts, display)

// var trace1 = {
//   type: 'bar',
//   x: [1, 2, 3, 4],
//   y: [5, 10, 2, 8],
//   marker: {
//       color: '#C8A2C8',
//       line: {
//           width: 2.5
//       }
//   },
// };

// var data = [ trace1 ];

// var layout = { 
//   title: 'Responsive to window\'s size!',
//   font: {size: 18},
//   width: $("#myDiv").offsetParent().width() ,
//   height: 300,
// };

// console.log($("#myDiv").width());

// // var config = {responsive: true}

// Plotly.newPlot('myDiv', data, layout);
// var a = 800;
// window.onresize = function() {
//     console.log($("#myDiv").width());
//     Plotly.relayout('myDiv', {
//       width: $("#myDiv").width(),
//     });
// };

