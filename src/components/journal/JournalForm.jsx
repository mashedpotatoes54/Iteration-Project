import React, { useState } from 'react';
import axios from 'axios'
import { Card, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Button, Textarea, VStack, Text} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { createEntry } from '/src/actions/actionDispatch.js';
import { useDispatch } from 'react-redux'

const JournalForm = () => {
  const [entryData, setEntryData] = useState({
    date: '', moodScaler: '', iLearned: '',
  })
  const dispatch = useDispatch();
  const toast = useToast();
    const handleFormSubmit = (e) => {
      e.preventDefault();
      dispatch(createEntry(entryData))
      toast({
        title: 'Sent!',
        position: 'top',
        description: 'Mood has been sent!',
        status: 'success',
        duration: 5000,
        isClosable:true,
      })
      const date = document.getElementById('date');
      date.value = '';
      const moodScaler = document.getElementById('moodScaler');
      moodScaler.value = '';
      const iLearned = document.getElementById('iLearned');
      iLearned.value = '';
    }

    return (
        <Card minWidth = '500px' minH = '300px' padding = {5}>
          <form onSubmit={handleFormSubmit}>
            <FormControl>
                <VStack spacing = {3}>
                      <FormLabel>
                        <Text fontWeight = 'bold'>Date</Text>
                      </FormLabel>

                        <Input id = 'date' type='date' placeholder='Date' onChange={(e) => setEntryData({...entryData, date: e.target.value})}/>

                      <FormLabel>
                        <Text fontWeight ='bold'>How was your day out of 10?</Text>
                      </FormLabel>
                      {/* <Slider aria-label='slider-ex-1' defaultValue={3} onChange={(e) => setEntryData({...entryData, moodScaler: e.target.value})}>
                        <SliderTrack>
                          <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                      </Slider> */}
                      {/* placeholder= 'Rating' onChange={(e) => setEntryData({...entryData, moodScaler: e.target.value}) */}
                      <Input id = 'moodScaler' placeholder = '0' variant = 'filled' onChange = {(e) => setEntryData({...entryData, moodScaler: e.target.value})}/>

                      <FormLabel>
                        <Text fontWeight = 'bold'>Talk About Your Day</Text>
                      </FormLabel>

                      <Textarea id = 'iLearned' placeholder= 'write out your thoughts...' onChange={(e) => setEntryData({...entryData, iLearned: e.target.value})}/>

                  <Button type = 'submit' bg = 'lightpink'>send mood</Button>
                </VStack>
            </FormControl>
          </form>
        </Card>
    )
}






export default JournalForm;