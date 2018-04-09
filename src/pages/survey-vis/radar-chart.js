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


  let update;


  function chart(selection) {
    console.log(selection, scope.data); // eslint-disable-line no-console, max-len

    const svg = selection.append('svg')
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

    const contentWrapper = g.append('g')
      .attr('class', 'contentWrapper');

    const tooltipWrapper = g.append('g')
      .attr('class', 'tooltipWrapper');

    // Set up the small tooltip for when you hover over a circle
    const tooltip = g.append('text')
      .attr('class', 'tooltip')
      .style('opacity', 0);


    update = function () { // eslint-disable-line func-names
      axisGrid.call(renderConcentricRings, scope);

      contentWrapper.call(renderBlob, scope, tooltip);
      tooltipWrapper.call(renderTooltip, scope, tooltip);

      // svg.call(renderColourTiles, config);
      // svg.call(debugData, config, scope.t);
    };

    update();
  }

  chart.data = function chartData(value) {
    if (!arguments.length) return scope.data;
    scope.data = value;
    // this is a noop until a selection is passed...
    if (typeof update === 'function') update();
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
  const radarWrapper = parent.selectAll('.radarWrapper')
    // the identity function doesn't actually make a difference here
    // why do I need to wrap the data in an array here?
    .data([scope.data])
    .enter().append('g')
    .attr('class', 'radarWrapper');

  // spoke
  radarWrapper.selectAll('.radarSpoke')
    .data(d => d)
    .enter().append('line')
    .attr('class', 'radarSpoke')
    .attr('x1', 0)
    .attr('y1', 0)
    .call(setPointCoords, scope, ['x2', 'y2'])
    .style('stroke', (d, i) => scope.config.colorScale(i))
    .style('fill-opacity', 0);

  // The radial line function
  const radarLine = d3.svg.line.radial()
    // .interpolate('linear-closed')
    .interpolate('cardinal-closed')
    .radius(d => scope.rScale(d.value))
    .angle((d, i) => i * scope.angleSlice());

  if (false) { // eslint-disable-line no-constant-condition
    // Append the backgrounds
    radarWrapper
      .append('path')
      .attr('class', 'radarArea')
      .attr('d', d => radarLine(d))
      .style('fill', (d, i) => scope.config.colorScale(i))
      .style('fill-opacity', 0.4);

    // Create the outlines
    radarWrapper.append('path')
      .attr('class', 'radarStroke')
      .attr('d', d => radarLine(d))
      .style('stroke-width', `${scope.config.strokeWidth}px`)
      .style('stroke', (d, i) => scope.config.colorScale(i))
      .style('fill-opacity', 0);
      // .style('filter', 'url(#glow)');
    }

  // radarCircle
  radarWrapper.selectAll('.radarCircle')
    .data(d => d)
    .enter().append('circle')
    .attr('class', 'radarCircle')
    .attr('r', 10)
    .call(setPointCoords, scope)
    .style('fill', (d, i) => scope.config.colorScale(i))
    .style('fill-opacity', 0.95);

  return radarWrapper;
}


function renderTooltip(parent, scope, tooltip) {
  const tooltipRadius = 20;

  parent.selectAll('.radarCircleTooltips')
    .data(scope.data)
    .enter().append('circle')
    .attr('class', 'radarCircleTooltips')
    .style('fill-opacity', 0)
    .attr('r', tooltipRadius)
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
        .transition().delay(200)
          .text('');
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
