import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactTable from 'react-table';
import "react-table/react-table.css";

class Sales extends Component {
  static propTypes = {
    sales: PropTypes.object
  };

  columns = [
    {
      Header: 'Week Ending',
      accessor: 'weekEnding'
    },
    {
      Header: 'Retail Sales',
      accessor: 'retailSales'
    },
    {
      Header: 'Wholesale Sales',
      accessor: 'wholesaleSales'
    },
    {
      Header: 'Units Sold',
      accessor: 'unitsSold'
    },
    {
      Header: 'Retailer Margin',
      accessor: 'retailerMargin'
    }
  ];

  render() {
    const { sales } = this.props;
    return (
      <div style={{ background: 'white' }}>
        <ReactTable
          className={'-highlight'}
          columns={this.columns}
          data={sales}
          defaultSorted={[{ id: 'weekEnding', desc: false }]}
          showPagination={false}
        />
      </div>
    );
  }
}

export default Sales;