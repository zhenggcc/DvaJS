import { testCnode, testMock } from '../services/example'
export default {
  namespace: 'indexTest',
  state: {
    name: 'msea',
    cnodedata:[],
    testmockdata:[
      {
        name:"default",
        age:"100",
        sex:"man"
      }
    ]
  },
  reducers: {
    setName(state, payLoad){
      console.log(payLoad);
      /*
        state同名 导致视图层没跟新
      */
      // console.log(state);
      // state.name = payLoad.data.name
      // console.log(state);

      let _state = JSON.parse(JSON.stringify(state));
      console.log(_state);
      _state.name = payLoad.data.name;
      return _state
    },
    setCnodeDataList(state,payload){
      let _state = JSON.parse(JSON.stringify(state));
      console.log(payload);
      _state.cnodedata = payload.data
      return _state
    },
    testSubscriptions(state, payload){
      console.log("用户页");
      return state
    },
    setTestMockData(state, payload){
      console.log("修改mockdata");
      console.log(payload);
      let _state = JSON.parse(JSON.stringify(state))
      console.log(_state);
      _state.testmockdata = payload.data.data
      return _state
    }
  },
  effects:{
    *setNameAsync({payload}, {put, call}){
      yield put({
        type: "setName",
        data: {
          name: "超人强"
        }
      })
    },
    *testCnode({payload}, {put, call}){
      console.log("testCnode_call")
      let rel = yield call(testCnode)
      rel = {
        data:{
          msg:"获取成功",
          data:[
            {
              name:"zgc",
              age:24,
              sex:"man"
            }
          ]
        }
      }
      if(rel.data){
        console.log(rel.data.data);
        rel.data.data=[
          {
            name:"zgc",
            age:24,
            sex:"man"
          }
        ]
        yield put({
          type:"setCnodeDataList",
          data:rel.data.data
        })
      }
    },
    *testMock({payload}, { put, call }){
      let rel = yield call(testMock)
      console.log('rel', rel);
      if(rel.data){
        console.log(rel.data.data);
        yield put({
          type:"setTestMockData",
          data:rel.data.data
        })
      }
    }
  },
  subscriptions:{
    haha({dispatch, history}){
      history.listen(({pathname})=>{
        if(pathname == '/user'){
          // console.log("哈哈");
          dispatch({
            type: "testSubscriptions"
          })
        }
      })
    }
  }
}
