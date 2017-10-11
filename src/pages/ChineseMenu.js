import React from 'react';
import Sidebar from './Sidebar';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Recipe from './Recipe';


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
        <div>
          <Switch>
            <Route path={`${this.props.match.url}/jajang`} render={() => <Recipe menuName="자장면"/>}/>
            <Route path="/chinese/jambbong" render={() => <Recipe menuName="짬뽕"/>}/>
            <Route path="/chinese" render={() => {
              return (
                <h2>
                  중식 메뉴에 오신것을 환영합니다
                </h2>
              )
            }}/>
          </Switch>
        </div>
      </div>
    );
  }
}
