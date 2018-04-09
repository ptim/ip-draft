import React, { Component } from 'react'
import * as d3 from 'd3'
import radarChart from './radar-chart'


const initialData = [
  { axis: 'culture',     value: 9 },
  { axis: 'empowerment', value: 6 },
  { axis: 'community',   value: 8 },
  { axis: 'education',   value: 5 },
  { axis: 'work',        value: 7 },
  { axis: 'health',      value: 8 },
]

const config = {
  colours: [
    {name: 'orange',     hex: '#f47721'},
    {name: 'blue',       hex: '#008fb4'},
    {name: 'green',      hex: '#82c341'},
    {name: 'smoke',      hex: '#414142'},
    {name: 'lightSmoke', hex: '#cccccc'},
  ],
  fontSize: 96,
}


class SurveyVis extends Component {
  componentDidMount() {
    this.drawChart()
  }

  shouldComponentUpdate() {
    return false
  }

  chart = () => {}

  drawChart() {
    config.colours.get = name => {
      let i = config.colours.findIndex(i => i.name === name)
      return i > -1 ? config.colours[i].hex : '#f00'
    }

    config.colorScale = d3.scale.linear()
      .domain([1, initialData.length])
      .interpolate(d3.interpolateHcl)
      .range([config.colours.get('blue'), config.colours.get('green')])

    this.chart = radarChart(config).data(initialData)

    d3.select('.chart')
      .call(this.chart)


    // At some point we render a child, say a tooltip
    // const tooltipData = ...
    // this.renderTooltip([50, 100], tooltipData)
  }

  handleClick = () => {
    const data = initialData.map(i => ({
      axis: i.axis,
      value: Math.floor(Math.random() * 10),
    }))

    this.chart.data(data)
  }

  render () {
    return (
      <div>
        <h1 style={{color: config.colours[1].hex}}>
          Demo Survey
        </h1>

        <div className="controls">
          <button onClick={this.handleClick}>Randomize Data</button>
        </div>

        <div className="chart"></div>
      </div>
    )
  }
}

export default SurveyVis
