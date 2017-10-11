import './App.css'
import React, { Component } from 'react';
import ChineseMenu from './pages/ChineseMenu';
import JapaneseMenu from './pages/JapaneseMenu';
import KoreanMenu from './pages/KoreanMenu';
import Navbar from './pages/Navbar';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'lavender'
          }}
        >
          <h1 style={{ textAlign: 'center' }}>
            레시피 앱
          </h1>
          <Navbar />
          <div>
            <Route path="/chinese" component={ChineseMenu}/>
            <Route path="/japanese" component={JapaneseMenu}/>
            <Route path="/korean" component={KoreanMenu}/>
            <Route path="/" render={() => {
              return (
                <h2>
                  레시피 앱에 오신 것을 환영합니다
                </h2>
              )
            }} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
