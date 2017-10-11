import React from 'react';


export default class Recipe extends React.Component {
  render() {
    return (
      <div>
        "{this.props.menuName}" 에 대한 레시피입니다

        <ul>
          <li>
            1 단계
            <p>
              재료를 준비하세요
            </p>
          </li>
          <li>
            2 단계
            <p>
              "{this.props.menuName}" 완성
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
