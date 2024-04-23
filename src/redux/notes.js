

export const initialState = {
    inputValue: '',
    id: ""
}


 export const data = []



function notes(state=initialState,action) {
    let date = new Date();
    let currentDate = date.toLocaleDateString();
    if (action.type === 'btn') {
      console.log(state);
      let arrayJSON = JSON.stringify(state);
      data.push(arrayJSON)
      localStorage.setItem('myArray', data);
      

      return{
        ...state,
        inputValue: '',
        id: ""
      }
    }

    if (action.type === "SET_INPUT_VALUE") {
     
        return {
          ...state,
          inputValue: action.payload,
          id: currentDate
          
        };
        
      }

      
      return state;
    }
    
export default  notes