import React from 'react';
import {
  Link,
} from 'react-router-dom';


export default class Navbar extends React.Component {
  render() {
    return (
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          backgroundColor: 'aquamarine',
          padding: '10px',
        }}
      >
        <Link to="/chinese">
          중식
        </Link>
        <Link to="/japanese">
          일식
        </Link>
        <Link to="/korean">
          한식
        </Link>
      </nav>
    );
  }
}
