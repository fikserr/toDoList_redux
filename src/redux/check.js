

export const initialState = {
    checkList: false,

}


function check(state=initialState,action) {
    if (action.type == 'check') {
        console.log(state.check);
        return{
            ...state,
            check: !state.check
        }
    }

      
      return state;
    }
    
export default  check