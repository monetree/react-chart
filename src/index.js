import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: 'Pie3D',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: {
        "chart": {
          "caption": "Recommended Portfolio Split",
          "subCaption": "For a net-worth of $1M",
          "showValues": "1",
          "showPercentInTooltip": "0",
          "numberPrefix": "$",
          "enableMultiSlicing": "1",
          "theme": "fusion"
        },
        "data": [
          {
            "label": "Equity",
            "value": "300000"
          },
          {
            "label": "Debt",
            "value": "230000"
          },
          {
            "label": "Bullion",
            "value": "180000"
          },
          {
            "label": "Real-estate",
            "value": "270000"
          },
          {
            "label": "Insurance",
            "value": "20000"
          }
        ]
      }
};

class Chart extends Component {
  render () {
    return <ReactFC {...chartConfigs} />;
  }
}

ReactDOM.render(
  <Chart />,
  document.getElementById('root'),
);
