import axios from 'axios'

// send get request to database 
// backend url = 

export const fetchEntries = () => axios.get('http://localhost:3000/entry/getEntries')


export const postEntries = (entry) => axios.post('http://localhost:3000/entry/createEntry', entry)

export const deleteEntry = (id) => axios.delete(`http://localhost:3000/entry/deleteEntry/${id}`)