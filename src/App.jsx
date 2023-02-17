import React from "react";
import "./style.css";

// super class = React.Component (React Team)
// sub class = App (You)
class App extends React.Component {
  
  constructor(props /* { message: 'hi likelion' } */) {
    super(props); // must call
  }

  render() {
    console.log(this.props.message);
    
    return (
      <div>
        <h1>React 펀더멘탈</h1>
        <p>React 1주차 학습 내용을 다시 한 번 정리합니다.</p>
        <p>{this.props.message}</p>
      </div>
    );
  }
}


export default App;