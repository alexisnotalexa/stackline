import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import './styles.css';

class Graph extends Component {
  static propTypes = {
    data: PropTypes.object
  };

  renderMonths = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return (
      <div className={'graph--months'}>
        {months.map(month => <span className={'graph--text'}>{month}</span>)}
      </div>
    );
  }

  render() {
    const { data } = this.props;
    const parseDate = d3.timeParse('%Y-%m-%d');

    const x = d3.scaleLinear()
      .domain(d3.extent(data, d => parseDate(d.weekEnding)))
      .range([0, 750]);

    const y = d3.scaleLinear()
      .domain([100, d3.max(data, d => d.retailSales)])
      .range([150, 100]);
    
    const y2 = d3.scaleLinear()
      .domain([150, d3.max(data, d => d.wholesaleSales)])
      .range([200, 150]);
    
    const retailLine = d3.line()
      .x(data => x(parseDate(data.weekEnding)))
      .y(data => y(data.retailSales))
      .curve(d3.curveCatmullRom.alpha(0.5));
    
    const wholesaleLine = d3.line()
      .x(data => x(parseDate(data.weekEnding)))
      .y(data => y2(data.wholesaleSales))
      .curve(d3.curveCatmullRom.alpha(0.5));
    
    return (
      <div className={'graph'}>
        <span className={'graph--text'}>Retail Sales</span>
        <svg width={750} height={300}>
          <path className={'retail-sales'} d={retailLine(data)} />
          <path className={'wholesale-sales'} d={wholesaleLine(data)} />
        </svg>
        {this.renderMonths()}
      </div>
    );
  }
}

export default Graph;
