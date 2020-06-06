var divId = "myDiv";

// var goupLabels = ["General", "Grads", "Undergrads"];
// var assessmentLabels = ["Terrible", "Satisfied", "Excellent"];
// var assessmentColors = ['#363062', '#4d4c7d', '#827397'];
// var x = [
//   [1, 2, 3],
//   [3, 4, 5]
// ]
// var x1 = [1,1,1]


var data = [
  {
    name: "Terrible",
    y: ["Overall", "Grads", "Undergrads"],
    yaxis: 'y',
    type: "bar",
    barmode: 'stack',
    orientation: 'h',
    marker: {
      color: '#363062'
    },
    x: [0.2, 0.3, 0.1],
  },
  {
    name: "Satisfied",
    y: ["Overall", "Grads", "Undergrads"],
    yaxis: 'y',
    type: "bar",
    barmode: 'stack',
    orientation: 'h',
    marker: {
      color: '#4d4c7d'
    },
    x: [0.2, 0.3, 0.1],
  },
  {
    name: "Exellent",
    y: ["Overall", "Grads", "Undergrads"],
    yaxis: 'y',
    type: "bar",
    barmode: 'stack',
    orientation: 'h',
    marker: {
      color: '#827397'
    },
    x: [0.2, 0.3, 0.1],
  },

];


var layouts = {
  barmode: "stack",
  xaxis: {
    tickformat: "%",
    showgrid: false,
    zeroline: false,
    // showticklabels: false,
    // tickvals: [0,1],
    // ticktext : ['terrible', 'exellent'],
  },
  yaxis: {
    // anchor: 'y',
    automargin: true,
  },
  // plot_bgcolor: "#",
  // paper_bgcolor: "#fbad50",

  width: 700,
  height: 150,
  margin: {
    l: 50,
    r: 50,
    b: 20,
    t: 20,
    pad: 3
  },
  // showlegend: false,
};

var display = {
  displayModeBar: false,
}

Plotly.newPlot(divId, data, layouts, display)


// Plotly.newPlot(
//   "myDiv",
//   [
//     {
//       x: ["A", "B", "C"],
//       y: [0.3, 0.35, 0.4],
//       type: "bar",
//       name: "series 1a", 
//       xaxis: 'x1',
//       barmode: 'stack', 
//       marker: {color: '#448'}
//     },
//     {
//       x: ["A", "B", "C"],
//       y: [0.6, 0.50, 0.40],
//       type: "bar",
//       name: "series 1b", 
//       xaxis: 'x1',
//       barmode: 'stack', marker: {color: '#88C'}
//     },
//     {
//       x: ["A", "B", "C"],
//       y: [0.1, 0.15, 0.20],
//       type: "bar",
//       name: "series 1c", 
//       xaxis: 'x1',
//       barmode: 'stack', 
//       marker: {color: '#CCF'}
//     },
//     {
//       x: ["A", "B", "C"],
//       y: [0.3, 0.35, 0.4],
//       type: "bar",
//       name: "series 2a",
//       xaxis: 'x2',     
//       barmode: 'stack', marker: {color: '#080'}
//     },
//     {
//       x: ["A", "B", "C"],
//       y: [0.25, 0.15, 0.05],
//       type: "bar",
//       name: "series 2b",
//       xaxis: 'x2',     
//       barmode: 'stack', marker: {color: '#8c8'}
//     },
//     {
//       x: ["A", "B", "C"],
//       y: [0.45, 0.50, 0.55],
//       type: "bar",
//       name: "series 2c", 
//       xaxis: 'x2',
//       barmode: 'stack', marker: {color: '#CFC'}
//     },
//      {
//       x: ["A", "B", "C"],
//       y: [0.3, 0.35, 0.4],
//       type: "bar",
//       name: "series 3a", 
//       xaxis: 'x3',
//       barmode: 'stack', marker: {color: '#880'}
//     },
//     {
//       x: ["A", "B", "C"],
//       y: [0.6, 0.50, 0.40],
//       type: "bar",
//       name: "series 3b", 
//       xaxis: 'x3',
//       barmode: 'stack', marker: {color: '#CC8'}
//     },
//     {
//       x: ["A", "B", "C"],
//       y: [0.1, 0.15, 0.20],
//       type: "bar",
//       name: "series 3c", 
//       xaxis: 'x3',
//       barmode: 'stack', marker: {color: '#FFC'}
//     },
//   ],
//   {
//     barmode: "stack",
//     yaxis: {tickformat: '%'},
//     xaxis: {
//       domain: [0, 0.33],
//       anchor: 'x1', 
//       title: 'Apples'
//     },
//     xaxis2: {
//       domain: [0.33, 0.66],
//       anchor: 'x2', title: 'Pears'
//     },
//     xaxis3: {
//       domain: [0.67, 1.0],
//       anchor: 'x3', title: 'Cherries'
//     }
//   }
// );