

export const initialState = {
    checkList: false,

}


function check(state=initialState,action) {
    if (action.type == 'check') {

        return{
            ...state,
            checkList: !state.checkList
        }
    }
    if (action.type == 'delete') {
        let data = JSON.parse(localStorage.getItem('myArray'))
        console.log(data);
    }


      
      return state;
    }
    
export default  check