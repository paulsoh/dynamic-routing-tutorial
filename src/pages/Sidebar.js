import React from 'react';


export default class Sidebar extends React.Component {
  render() {
    const menuItems = this.props.menuItems || [];
    return (
      <aside
        style={{
          backgroundColor: 'bisque',
        }}
      >
        <ul>
          {menuItems.map((item) => {
            return (
              <li>
                <a>
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </aside>
    );
  }
}
