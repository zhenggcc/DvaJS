import { connect } from "dva";
import React from "react";

import { testCnode, testMock } from "../services/example"
// import * as apis from "../services/example"

class IndexPage extends React.Component {
    handleSetName = () => {
        console.log(this.props);
        this.props.dispatch({
            type: "indexTest/setName",
            data: {
                name: "猪猪侠"
            }
        })
    }
    handleSetNameAsync = () => {
        this.props.dispatch({
            type: "indexTest/setNameAsync",
            data: {
                name: "猪猪侠"
            }
        })
    }
    componentDidMount() {
        // console.log("testCnode")
        // apis.testCnode().then((res)=>{
        //     console.log(res);
        // })
        testMock().then((res) => {
            console.log(res);
        })
    }
    testCnode = () => {
        this.props.dispatch({
            type: "indexTest/testCnode",
        })
    }
    setTestMockData = () => {
        console.log(this.props);
        this.props.dispatch({
            // call 方式修改
            type: "indexTest/testMock",
            /*
                put 方式修改
            */
            // type: "indexTest/setTestMockData",
            // data: {
            //     data: [
            //         {
            //             name: "yh",
            //             age: 8,
            //             sex: "woman"
            //         }
            //     ]
            // }
        })
    }
    render() {
        console.log(this.props.cnodeData);
        return (
            <div>
                <div>我是首页</div>
                {/* <br /> */}
                {this.props.msg}
                <br />
                {this.props.name}
                <button onClick={this.handleSetName}>setName</button>
                <button onClick={this.handleSetNameAsync}>setNameAsync</button>
                <br />
                <button onClick={this.testCnode}>testCnode</button>
                <br />
                <button onClick={this.setTestMockData}>setTestMockData</button>
            </div>

        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        msg: '获取model',
        name: state.indexTest.name,
        cnodeData: state.indexTest.cnodedata,
        testMockData: state.indexTest.testmockdata
    }
}

export default connect(mapStateToProps)(IndexPage)
