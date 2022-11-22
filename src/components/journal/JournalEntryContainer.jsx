import React, { useEffect, useState } from 'react'
import JournalEntry from './JournalEntry.jsx'
import JournalForm from './JournalForm.jsx'
import axios from 'axios'
import { Stack, HStack, VStack , SimpleGrid} from '@chakra-ui/react'

const JournalEntryContainer = () => {
  // make get request to database for array of data
  const [entries, setEntries] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/entry/getEntries') 
      .then((res) => setEntries(res.data))
  }, [])

  console.log(entries);
  // iterate through the array we get and render component for each iteration
  // pass down data from get request as prop to child component(<JournalEntry/>)
  return (
    <HStack spacing = '50px'>
      <SimpleGrid columns = {2} spacing = {3}>
        {
          entries.map((entry) => (
            // <h1>{entry.date}</h1>
            <JournalEntry key={entry._id} entry={entry}/>
          ))
        }
      </SimpleGrid>
      <JournalForm />

    </HStack>
  )
}

export default JournalEntryContainer