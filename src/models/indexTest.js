export default {
  namespace: 'indexTest',
  state: {
    name: 'msea'
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
    }
  }
}
