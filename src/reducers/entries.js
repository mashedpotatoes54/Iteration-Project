
const initialState = {
  entries: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_ENTRIES':
      let myState = {
        entries: action.payload
      }
      console.log(myState.entries);
      return myState;
    case 'CREATE_TASK':
      return [...entries, action.payload];
    default:
      return state;
  }
}