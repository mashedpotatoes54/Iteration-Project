<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from 'react';
import JournalEntry from './JournalEntry.jsx';
import JournalForm from './JournalForm.jsx';
import axios from 'axios';
import { Stack, HStack, VStack, SimpleGrid } from '@chakra-ui/react';

const JournalEntryContainer = () => {
  // make get request to database for array of data
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/entry/getEntries').then((res) => setEntries(res.data));
  }, []);
>>>>>>> dev

  const myEntries = useSelector((state) => state.store.entries);
  // console.log('here are my entries', myEntries);
  // console.log(entries);
  // iterate through the array we get and render component for each iteration
  // pass down data from get request as prop to child component(<JournalEntry/>)
  return (
<<<<<<< HEAD
    <HStack spacing = '50px'>
      <SimpleGrid columns = {2} spacing = {3}>
        {
          myEntries.map((entry) => (
            // <h1>{entry.date}</h1>
            <JournalEntry key={entry._id} entry={entry}/>
          ))
        }
=======
    <HStack spacing='50px'>
      <SimpleGrid
        columns={2}
        spacing={3}
      >
        {entries.map((entry) => (
          // <h1>{entry.date}</h1>
          <JournalEntry
            key={entry._id}
            entry={entry}
          />
        ))}
>>>>>>> dev
      </SimpleGrid>
      <JournalForm />
    </HStack>
  );
};

export default JournalEntryContainer;
