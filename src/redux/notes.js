

export const initialState = {
    inputValue: '',
    id: ""
}


  const data = []






function notes(state=initialState,action) {

    if (action.type === 'btn') {

      data.push(state)
      let arrayJSON = JSON.stringify(data);
      localStorage.setItem('myArray', arrayJSON);
      

      return{
        ...state,
        inputValue: '',
        id: ""
      }
    }

    if (action.type === "SET_INPUT_VALUE") {
      let date = new Date();
      let hours = date.getHours(); // Soat
      let minutes = date.getMinutes(); // Daqiqa
      let second = date.getSeconds(); // Daqiqa
      let currentDate = hours + minutes + second
        return {
          ...state,
          inputValue: action.payload,
          id: currentDate
          
        };
        
      }

      
      return state;
    }
    
export default  notes