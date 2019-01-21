import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import './styles.css';

class Graph extends Component {
  static propTypes = {
    data: PropTypes.object
  };

  render() {
    const { data } = this.props;
    const parseDate = d3.timeParse('%Y-%m-%d');

    const x = d3.scaleLinear()
      .domain(d3.extent(data, d => parseDate(d.weekEnding)))
      .range([0, 775]);

    const y = d3.scaleLinear()
      .domain([150, d3.max(data, d => d.retailSales)])
      .range([200, 150]);
    
    const y2 = d3.scaleLinear()
      .domain([200, d3.max(data, d => d.wholesaleSales)])
      .range([250, 200]);
    
    const retailLine = d3.line()
      .x(data => x(parseDate(data.weekEnding)))
      .y(data => y(data.retailSales))
      .curve(d3.curveCatmullRom.alpha(0.5));
    
    const wholesaleLine = d3.line()
      .x(data => x(parseDate(data.weekEnding)))
      .y(data => y2(data.wholesaleSales))
      .curve(d3.curveCatmullRom.alpha(0.5));
    
    return (
      <svg width={775} height={500}>
        <path className={'retail-sales'} d={retailLine(data)} />
        <path className={'wholesale-sales'} d={wholesaleLine(data)} />
      </svg>
    );
  }
}

export default Graph;
