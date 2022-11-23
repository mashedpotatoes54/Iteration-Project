import React, { useEffect } from "react"
import axios from 'axios'
import { Card, CardHeader, CardBody, CardFooter, Button, Text} from '@chakra-ui/react'
import { format, compareAsc } from 'date-fns'

import { useDispatch } from 'react-redux'
import { deleteEntry } from '../../actions/actionDispatch'
const JournalEntry = (prop) => {
  // const date = format(new Date(prop.entry.date))
  // console.log(date);
  // have onclick function here
  // onclick will send delete request to server which will find one and delete this entry
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteEntry(prop.entry._id))
  }

  return (
    <div>
      {/* <h1> test </h1> */}
       <Card variant = 'elevated' size = 'sm' margin = {3} padding = {3} minWidth = '200px'>

        <CardBody>
          <Text>{prop.entry.moodScaler}</Text>
          <Text>{prop.entry.iLearned}</Text>
        </CardBody>
        <CardFooter>{prop.entry.date}</CardFooter>
        <Button onClick={handleClick}>delete entry</Button>
      </Card> 
    </div>
  )
}

export default JournalEntry;