

export const initialState = {
    inputValue: '',
    id: ""
}

export const data =  [{}]



function notes(state=initialState,action) {
    let date = new Date();
    let currentDate = date.toLocaleDateString();
    if (action.type === "SET_INPUT_VALUE") {
      console.log(state);
        return {
          ...state,
          inputValue: action.payload,
          id: currentDate
          
        };
        
      }
      return state;
    }
    
export default  notes