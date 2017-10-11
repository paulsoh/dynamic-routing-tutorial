import React from 'react';


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
        <a>
          중식
        </a>
        <a>
          일식
        </a>
        <a>
          한식
        </a>
      </nav>
    );
  }
}
