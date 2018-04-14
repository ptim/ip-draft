/* eslint-disable no-use-before-define */
import * as d3 from 'd3'

export function radarChart(config) { // eslint-disable-line no-unused-vars
  // All options that should be accessible to caller
  const scope = {
    config,
    data: [],
    width: window.innerWidth,
    height: window.innerHeight,
    t: d3.transition().duration(1500),

    // how many 'levels' for the grid
    levels: 10,
  };

  // Radius of the outermost circle
  scope.radius = Math.min(scope.width * 0.4, scope.height * 0.4);

  // The width in radians of each 'slice'
  scope.angleSlice = () => Math.PI * 2 / scope.data.length;

  scope.maxValue = 10;

  // Scale for the radius
  scope.rScale = d3.scale.linear()
    .range([0, scope.radius])
    .domain([0, scope.maxValue]);


  let svg;
  let update;
  let updateDimensions;


  function chart(selection) {

    svg = selection.append('svg')
      .attr('height', scope.height)
      .attr('width', scope.width);

    const defs = svg.append('defs');

    // Filter for the outside glow
    const filter = defs.append('filter').attr('id', 'glow');
    filter.append('feGaussianBlur')
      .attr('stdDeviation', '2.5')
      .attr('result', 'coloredBlur');
    const feMerge = filter.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'coloredBlur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    const g = svg.append('g')
      .attr('class', 'wrapper')
      .attr('transform', `translate(${scope.width / 2},${scope.height / 2})`);

    const axisGrid = g.append('g')
      .attr('class', 'axisGrid');

    axisGrid.call(renderConcentricRings, scope);

    const contentWrapper = g.append('g')
      .attr('class', 'contentWrapper');

    const tooltipWrapper = g.append('g')
      .attr('class', 'tooltipWrapper');

    // Set up the small tooltip for when you hover over a circle
    const tooltip = g.append('text')
      .attr('class', 'tooltip')
      .style('opacity', 0);


    update = function () { // eslint-disable-line func-names
      contentWrapper.call(renderBlob, scope, tooltip);
      tooltipWrapper.call(renderTooltip, scope, tooltip);
    };

    updateDimensions = function () {
      svg.attr('width', scope.width);
      svg.attr('height', scope.height);
      update();
    }

    update();
  }

  chart.data = function chartData(value) {
    if (!arguments.length) return scope.data;
    scope.data = value;
    // this is a noop until a selection is passed...
    if (typeof update === 'function') update();
    return chart;
  };

  chart.dimensions = function chartDimensions(value) {
    if (!arguments.length) return [scope.width, scope.height];
    scope.width = value[0];
    scope.height = value[1];
    // this is a noop until a selection is passed...
    if (typeof updateDimensions === 'function') updateDimensions();
    return chart;
  };

  chart.width = function chartWidth(value) {
    if (!arguments.length) return scope.width;
    scope.width = value;
    return chart;
  };

  chart.height = function chartHeight(value) {
    if (!arguments.length) return scope.height;
    scope.height = value;
    return chart;
  };

  return chart;
}


function renderConcentricRings(parent, scope) {
  parent.selectAll('.levels')
    .data(d3.range(1, scope.levels + 1).reverse())
    .enter()
    .append('circle')
    .attr('class', 'gridCircle')
    .attr('r', d => scope.radius / scope.levels * d)
    .style('stroke', scope.config.colours.get('lightSmoke'))
    .style('fill-opacity', 0);
    // .style('fill', config.colours.lightSmoke)
}


function renderBlob(parent, scope) {
  // spoke
  let radarSpoke = parent.selectAll('.radarSpoke')
    .data(scope.data)

  radarSpoke.enter().append('line')
    .attr('class', 'radarSpoke')
    .attr('x1', 0)
    .attr('y1', 0)
    .style('fill-opacity', 0)

  radarSpoke
    .call(setPointCoords, scope, ['x2', 'y2'])
    .style('stroke', (d, i) => scope.config.colorScale(i))

  const displayOutline = false
  if (displayOutline) {
    // The radial line function
    const radarLine = d3.svg.line.radial()
      // .interpolate('linear-closed')
      .interpolate('cardinal-closed')
      .radius(d => scope.rScale(d.value))
      .angle((d, i) => i * scope.angleSlice())

    // Append the backgrounds
    let radarArea = parent.selectAll('.radarArea')
      .data([scope.data])

    radarArea.enter().append('path')
      .attr('class', 'radarArea')
      .style('fill-opacity', 0.4);

    radarArea
      .attr('d', d => radarLine(d))
      .style('fill', (d, i) => scope.config.colorScale(i))

    // Create the outlines
    let radarStroke = parent.selectAll('.radarStroke')
      .data([scope.data])

    radarStroke.enter().append('path')
      .attr('class', 'radarStroke')
      .style('stroke-width', `${scope.config.strokeWidth}px`)
      .style('fill-opacity', 0);
      // .style('filter', 'url(#glow)');

    radarStroke
      .attr('d', d => radarLine(d))
      .style('stroke', (d, i) => scope.config.colorScale(i))
    }

  let radarCircle = parent.selectAll('.radarCircle')
    .data(scope.data)

  radarCircle.enter().append('circle')
    .attr('class', 'radarCircle')
    .attr('r', 10)
    .style('fill-opacity', 0.95)

  radarCircle
    .call(setPointCoords, scope)
    .style('fill', (d, i) => scope.config.colorScale(i))

  return parent;
}


function renderTooltip(parent, scope, tooltip) {
  const tooltipRadius = 20;

  let circles = parent.selectAll('.radarCircleTooltips')
    .data(scope.data)

  circles.enter().append('circle')
    .attr('class', 'radarCircleTooltips')
    .style('fill-opacity', 0)
    .attr('r', tooltipRadius)

  circles
    .call(setPointCoords, scope)
    .on('mouseover', function handleMouseover(d) {
      const $this = d3.select(this);

      tooltip
        .attr('x', parseFloat($this.attr('cx')) + tooltipRadius)
        .attr('y', parseFloat($this.attr('cy')) - tooltipRadius)
        .text(`${d.axis}: ${d.value}`)
        .transition().duration(200)
          .style('opacity', 1);
    })
    .on('mouseout', () => {
      tooltip
        .transition().duration(200)
          .style('opacity', 0)
        .transition()
          .text('')
    });
}


function setPointCoords(selection, scope, attrs) {
  if (typeof attrs === 'undefined') attrs = ['cx', 'cy']; // eslint-disable-line no-param-reassign

  selection
    .attr(attrs[0], (d, i) => (
      scope.rScale(d.value) * Math.cos(scope.angleSlice() * i - Math.PI / 2)
    ))
    .attr(attrs[1], (d, i) => (
      scope.rScale(d.value) * Math.sin(scope.angleSlice() * i - Math.PI / 2)
    ));
}

export default radarChart
