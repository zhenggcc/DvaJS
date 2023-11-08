import { connect } from "dva";
import React from "react";

class IndexPage extends React.Component{
    handleSetName=()=>{
        console.log(this.props);
        this.props.dispatch({
            type: "indexTest/setName",
            data:{
                name:"猪猪侠"
            }
        })
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <div>我是首页</div>
                {/* <br /> */}
                { this.props.msg }
                <br />
                { this.props.name }
                <button onClick={this.handleSetName}>setName</button>
            </div>

        )
    }
}

const mapStateToProps = state=>{
    console.log(state);
    return {
        msg: '获取model',
        name: state.indexTest.name
    }
}

export default connect (mapStateToProps)(IndexPage)
