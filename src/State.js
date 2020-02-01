import React from "react";

class Food extends React.Component {
    constructor() {
      super();
      this.state = {
        rating: 0,
      };
    }
   
    plusscore() {
      this.setState((prevState, props) => {
        return { rating: prevState.rating + 0.5 }
      });
    }
   
    render() {
      return (<button
                onClick={() => this.plusscore()}
              >
                rating : {this.state.rating}
              </button>);
    }
  }

  /* 평점을 부여하는 rating을 사용자가 지정하는 동적데이터로 바뀌어 설정하는 경우의 예시를 예를 들어 작성
   버튼을 클릭시 마다 평점이 0.5씩 제한되어 있음 향후 스크롤 방식과 rating을 5점 이상 올리기 않는 
  구성할 예정 */
  