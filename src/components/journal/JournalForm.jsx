import React, { useState } from 'react';
import axios from 'axios'
import { Card } from '@chakra-ui/react'
import { createEntry } from '/src/actions/actionDispatch.js';
import { useDispatch } from 'react-redux'

const JournalForm = () => {
  const [entryData, setEntryData] = useState({
    date: '', moodScaler: '', iLearned: ''
  })
  const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
      e.preventDefault();
      dispatch(createEntry(entryData))
    }

    return (
        <Card padding = {3} spacing = {3}>
          <form onSubmit={handleFormSubmit}>    
              <div>
                  <label>Date:</label>
                  <input type='date' placeholder= 'Date' onChange = {(e) => setEntryData({...entryData, date: e.target.value})}/>
              </div>
              <div>
                  <label>Rating:</label>
                  <input type='text' placeholder= 'Rating' onChange={(e) => setEntryData({...entryData, moodScaler: e.target.value})}/>
              </div>
                <div>
                  <label>Entry:</label>
                  <textarea type='text' placeholder= 'Journal Entry' onChange={(e) => setEntryData({...entryData, iLearned: e.target.value})}/>
              </div>
              <input type = 'submit' value = 'Submit'/>
          </form>
        </Card>
    )
}






export default JournalForm;