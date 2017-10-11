import React from 'react';
import Sidebar from './Sidebar';


export default class ChineseMenu extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <Sidebar
          menuItems={[
            {
              label: '자장면',
              path: 'jajang',
            },
            {
              label: '짬뽕',
              path: 'jambbong',
            },
          ]}
        />
        ChineseMenu
      </div>
    );
  }
}
