var divId = "myDiv";
var divIdList = ["myDiv1","myDiv2", "myDiv3", "myDiv4" ];

var reviewClass = ["Terrible", "Satisfied", "Exellent"];
var studentIdentities = ["Overall", "Grads", "Undergrads"];
var color = ['#363062', '#4d4c7d', '#827397']
var distribute = [
  [0.2, 0.3, 0.1],
  [0.2, 0.3, 0.1],
  [0.2, 0.3, 0.1]
]
var traces = getData();

function setData(name, yValue, color, xValue){
  var data = {
    name: name,
    x: xValue, y: yValue,
    yaxis: 'y', type: "bar", barmode: 'stack', orientation: 'h',
    marker: { color: color },
  };
  return data;
}

function getData(){
  data = [];
  for(var i =0;i < studentIdentities.length; i++){
    data.push(setData(reviewClass[i] ,studentIdentities,color[i],distribute[i]));
  }
  return data;
}


var layouts = {
  title: "reviews of the professor",
  barmode: "stack",
  xaxis: {
    tickformat: "%",
    showgrid: false,
    zeroline: false,
    fixedrange: true,
    // domain: [0, 1]
    // showticklabels: false,
    // tickvals: [0,1],
    // ticktext : ['terrible', 'exellent'],
  },
  yaxis: {
    // anchor: 'y',
    automargin: true,
    fixedrange: true,
  },
  // plot_bgcolor: "#",
  // paper_bgcolor: "#fbad50",

  width: 700,
  height: 180,
  margin: {
    l: 50,
    r: 50,
    b: 20,
    t: 50,
    pad: 3
  },
  // showlegend: false,
  static: true,
};

var display = {
  displayModeBar: false,
}


for (let i = 0; i < divIdList.length; i++) {
  Plotly.newPlot(divIdList[i], traces, layouts, display); 
}
// Plotly.newPlot(divId, traces, layouts, display)

