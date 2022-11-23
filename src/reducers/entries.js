
const initialState = {
  entries: []
}

export default (state = initialState, action) => {
  let myState;
  switch(action.type) {
    case 'DELETE_ENTRY':
      
      myState = {
        entries: state.entries.filter((entry) => entry._id !== action.payload)  
      }
      return myState;
    case 'GET_ENTRIES':
      myState = {
        entries: action.payload
      }
      return myState;
    case 'CREATE_ENTRY':
      myState = {
        entries: [...state.entries, action.payload],
      }
      return myState;
    default:
      return state;
  }
} 