import React, { useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react';
import { format, compareAsc, formatDistance } from 'date-fns';

const JournalEntry = (prop) => {
  const formatDate = (dateStr) => {
    if (dateStr) {
      const date = dateStr;
      const year = date.slice(0, 4);
      const month = date.slice(5, 7);
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
  // console.log(Date.parse(date));

  // console.log(prop);
  // have onclick function here
  // onclick will send delete request to server which will find one and delete this entry
  const handleClick = () => {
    axios.delete(`http://localhost:3000/entry/deleteEntry/${prop.entry._id}`).then((res) => console.log('we deleted', res.data));
  };

  return (
    <div>
      {/* <h1> test </h1> */}
      <Card
        variant='elevated'
        size='sm'
        margin={3}
        padding={3}
      >
        <CardHeader>{formatDate(prop.entry.date)}</CardHeader>
        <CardBody>mood: {prop.entry.moodScaler}</CardBody>
        <CardFooter>{prop.entry.iLearned}</CardFooter>
        <Button onClick={handleClick}>delete entry</Button>
      </Card>
    </div>
  );
};

export default JournalEntry;
