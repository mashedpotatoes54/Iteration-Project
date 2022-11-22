import axios from 'axios'

// send get request to database 
// backend url = 
const getUrl = '/api/entry/getEntries'
export const fetchEntries = () => axios.get(getUrl)

const postUrl = '/api/entry/createEntry'
export const postEntries = (entry) => axios.post(postUrl, entry)