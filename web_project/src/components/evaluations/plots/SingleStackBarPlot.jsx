import React from "react";

import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

function SingleStackBarPlot(props) {
  const color = ["#012f62", "#6e7693", "#c6c6c6", "#dfb879", "#e9ab14"];
  const distribute = [0.1, 0.2, 0.3, 0.3, 0.1];

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
    for (var i = 0; i < color.length; i++) {
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
    width: 400,
    height: 60,
    margin: { l: 10, r: 10, b: 5, t: 5, pad: 0 },
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
