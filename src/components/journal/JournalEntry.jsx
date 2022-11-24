import React, { useEffect } from "react"
import axios from 'axios'
import { Card, CardHeader, CardBody, CardFooter, Button, Text, useToast} from '@chakra-ui/react'
import { format, compareAsc } from 'date-fns'

import { useDispatch } from 'react-redux'
import { deleteEntry } from '../../actions/actionDispatch'
const JournalEntry = (prop) => {
  const toast = useToast();
  const formatDate = (dateStr) => {
    if (dateStr) {
      const date = dateStr;
      const year = date.slice(0, 4);
      const month = date.slice(5, 7);
      console.log('month', month)
      const day = date.slice(8, 10);
      const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      // console.log(month, day, year);
      const formattedDate = new Date(year, month, day).toLocaleString(undefined, options);
      // console.log(formattedDate);
      return formattedDate;
    }
  };
  // const date = format(new Date(prop.entry.date))
  // console.log(date);
  // have onclick function here
  // onclick will send delete request to server which will find one and delete this entry
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteEntry(prop.entry._id));
    toast({
      title: 'Deleted',
      position: 'top',
      description: 'Mood has been deleted!',
      status: 'error',
      duration: 5000,
      isClosable:true,
    })
  }

  return (
    <div>
      {/* <h1> test </h1> */}
       <Card variant = 'elevated' size = 'sm' margin = {3} padding = {3} maxWidth = '300px' maxHeight = '300px'>

        <CardBody>
          <Text>{prop.entry.moodScaler}</Text>
          <Text>{prop.entry.iLearned}</Text>
        </CardBody>
        <CardFooter>{formatDate(prop.entry.date)}</CardFooter>
        <Button onClick={handleClick}>delete entry</Button>
      </Card> 
    </div>
  )
}

export default JournalEntry;