import React from "react";

import "./SingleStackBarPlot.css";


import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

function SingleStackBarPlot(props) {
  
  function setData(x, color) {
    return {
      x: [x],
      yaxis: "y",
      type: "bar",
      barmode: "stack",
      texttemplate: "%{x:%}",
      textposition: "auto",
      hoverinfo: "none",
      orientation: "h",
      marker: { color: color },
    };
  }

  function getData() {
    let data = [];
    for (var i = 0; i < props.dist.length; i++) {
      data.push(
        setData(props.dist[i], props.colorScheme[i] )
      );
    }
    return data;
  }

  const layout = {
    barmode: "stack",
    xaxis: {
      tickformat: "%",
      showgrid: false,
      zeroline: false,
      fixedrange: true,
      showticklabels: false,
    },
    yaxis: {
      automargin: true,
      fixedrange: true,
      showticklabels: false,
    },
    width: props.width,
    height: props.height,
    margin: { l: 0, r: 1, b: 1, t: 1, pad: 0 },
    showlegend: false,
    static: true,
  };

  const display = {
    displayModeBar: false,
    staticPlot: true
  };

  const traces = getData();

  return (<Plot data={traces} layout={layout} config={display} />);
}

export default SingleStackBarPlot;
