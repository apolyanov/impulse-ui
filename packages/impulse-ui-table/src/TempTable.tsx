import React, { CSSProperties } from 'react';
import { neutral2 } from '@impulse-ui/colours';

import { Table } from './components/table/Table';

const headerStyle: React.CSSProperties = {
  padding: '8px 16px',
};

const headerGroupStyle: React.CSSProperties = {
  backgroundColor: neutral2,
  borderRadius: '8px',
  filter: 'drop-shadow(0 1px 1px rgba(0, 0, 0, 0.2))',
};

const footerGroupStyle: React.CSSProperties = {
  filter: 'drop-shadow(0 1px 1px rgba(0, 0, 0, 0.2))',
};

const footerStyle: React.CSSProperties = {
  padding: '8px 16px',
  backgroundColor: neutral2,
  textAlign: 'center',
};

const tableDataStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '8px 16px',
};

const tableBodyStyle: CSSProperties = {
  margin: '16px 8px',
};

const TempTable = () => {
  return (
    <Table>
      <thead style={headerGroupStyle}>
        <tr>
          <th style={headerStyle}>Header 1</th>
          <th style={headerStyle}>Header 2</th>
          <th style={headerStyle}>Header 3</th>
          <th style={headerStyle}>Header 4</th>
          <th style={headerStyle}>Header 5</th>
          <th style={headerStyle}>Header 6</th>
        </tr>
      </thead>
      <tbody style={tableBodyStyle}>
        <tr style={{ backgroundColor: 'red' }}>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
        </tr>
        <tr>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
        </tr>
        <tr>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
        </tr>
        <tr>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
        </tr>
        <tr>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
          <td style={tableDataStyle}>Table Cell 1</td>
        </tr>
      </tbody>
      <tfoot style={footerGroupStyle}>
        <tr>
          <td style={footerStyle}>Footer 1</td>
          <td style={footerStyle}>Footer 2</td>
          <td style={footerStyle}>Footer 3</td>
          <td style={footerStyle}>Footer 4</td>
          <td style={footerStyle}>Footer 5</td>
          <td style={footerStyle}>Footer 6</td>
        </tr>
      </tfoot>
    </Table>
  );
};

export { TempTable };
