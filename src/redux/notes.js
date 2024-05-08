const initialState = JSON.parse(localStorage.getItem('myArray') || '[]');
const saveToLocalStorage = (state) => localStorage.setItem('myArray', JSON.stringify(state));

function notes(state = initialState, action) {
  if (action.type === 'addNote') {
    state = [...state, action.payload];
    saveToLocalStorage(state);
  } else if (action.type === 'delete') {
    state = state.filter(item => item.id !== action.payload);
    saveToLocalStorage(state);
  }else if (action.type == 'active'){
    state =  state.map(item => item?.id === action.payload ? {...item, textLine: !item?.textLine} : {...item})
    saveToLocalStorage(state);
  }
  return state;
}

export default notes;
