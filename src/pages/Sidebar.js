import React from 'react';


export default class Sidebar extends React.Component {
  render() {
    return (
      <aside
        style={{
          backgroundColor: 'bisque',
        }}
      >
        <ul>
          <li>
            <a>
              자장면
            </a>
          </li>
          <li>
            <a>
              짬뽕
            </a>
          </li>
          <li>
            <a>
              볶음밥
            </a>
          </li>
        </ul>
      </aside>
    );
  }
}
