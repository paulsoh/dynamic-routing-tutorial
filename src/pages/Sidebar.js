import React from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';


class Sidebar extends React.Component {
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
                <Link to={`${this.props.match.url}/${item.path}`}>
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <button onClick={() => this.props.history.push('/')}>
          홈으로 가기
        </button>
      </aside>
    );
  }
}

export default withRouter(Sidebar);
