import React, { useEffect, useState } from 'react'
import JournalEntry from './JournalEntry.jsx'
import JournalForm from './JournalForm.jsx'
import axios from 'axios'
import { Stack, HStack, VStack , SimpleGrid} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'

import { getEntries } from '/src/actions/actionDispatch.js'

const JournalEntryContainer = () => {
  // make get request to database for array of data
  const [entries, setEntries] = useState([])
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEntries());
  }, [])

  const myEntries = useSelector((state) => state.store.entries);
  // console.log('here are my entries', myEntries);
  // console.log(entries);
  // iterate through the array we get and render component for each iteration
  // pass down data from get request as prop to child component(<JournalEntry/>)
  return (
    <HStack spacing = '50px' bg = '#fffff2'>
      <SimpleGrid columns = {3} spacing = {3}>
        {
          myEntries.map((entry) => (
            // <h1>{entry.date}</h1>
            <JournalEntry key={entry._id} entry={entry}/>
          ))
        }
      </SimpleGrid>
      <JournalForm />
    </HStack>
  );
};

export default JournalEntryContainer;
