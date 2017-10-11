import React from 'react';
import Sidebar from './Sidebar';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Recipe from './Recipe';


export default class KoreanMenu extends React.Component {
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
              label: '김밥',
              path: 'gimbab',
            },
            {
              label: '비빔밥',
              path: 'bibimbab',
            },
          ]}
        />
        <div>
          <Switch>
            <Route path={`${this.props.match.url}/gimbab`} render={() => <Recipe menuName="김밥"/>}/>
            <Route path={`${this.props.match.url}/bibimbab`} render={() => <Recipe menuName="비빔밥"/>}/>
            <Route path={`${this.props.match.url}`} render={() => {
              return (
                <h2>
                  한식 메뉴에 오신것을 환영합니다
                </h2>
              )
            }}/>
          </Switch>
        </div>
      </div>
    );
  }
}
