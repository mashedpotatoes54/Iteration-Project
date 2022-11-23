import * as api from './fetch'


export const getEntries = () => async(dispatch) => {
  try{
    
    const {data} = await api.fetchEntries();
    console.log(data);
    dispatch({type: 'GET_ENTRIES', payload: data})
  } catch(error) {
    console.log({error: error.message})
  }
}

export const createEntry = (entry) => async(dispatch) => {
  try{
    const { data } = await api.postEntries(entry);

    dispatch({type: 'CREATE_ENTRY', payload: data})
  } catch (error) {
    console.log({error: error.message})
  }
}