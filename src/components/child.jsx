import { withRouter } from "dva/router";
import React from "react";

class Child extends React.Component {
  handleToIndex=()=>{
    console.log(this.props);
    this.props.history.push('/')
  }
  render(){
    return (
      <div>
        <div>我是通用组件</div>
        {/* <button onClick={()=>{
          this.handleToIndex();
        }}>首页_child</button> */}
        <button onClick={this.handleToIndex.bind(this)}>首页_child</button>
      </div>
    )
  }
}

export default withRouter(Child)
