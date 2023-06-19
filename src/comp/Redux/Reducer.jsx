

const initstate={
    type:1,
    value:""
}
const reducer=(state=initstate,action)=>{

    if (action.type===1){
        return {
          ...state,
          type: 1,
        };
    }
    else if (action.type === 2) {
      return {
        ...state,
        type: 2,
      };
    }
    else if (action.type === 3) {
      return {
        ...state,
        type: 3,
      };
    } else if (action.type === 4) {
      return {
        ...state,
        value: action.value,
      };
    } else {
      return state;
    }
}


export default reducer;