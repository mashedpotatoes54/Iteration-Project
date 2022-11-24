import React, { useState } from 'react';

import { Line } from 'react-chartjs-2';

import { Chart as ChartJS } from 'chart.js/auto';
import { useSelector } from 'react-redux';

import { Center, Flex, Highlight, Heading, HStack, Image, Button, Card, CardHeader} from '@chakra-ui/react'
import image from '../../components/images/Moodswings-title-crop2.png'

const LineChart = () => {
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
  const myEntries = useSelector((state) => state.store.entries)
  const [entryData, setEntryData] = useState({
    labels: myEntries.map((data) => formatDate(data.date)),
    datasets: [{
      label: 'Mood Rating',
      data: myEntries.map((data) => data.moodScaler),
      backgroundColor: ['lightpink'],
      borderColor: '#232b2b',
      borderWidth: 2,
    }]
  })

  return (
    <>
      <Flex width = '100%' minHeight = '70px' bg = '#fffff2' position = 'absolute'>
          <HStack marginLeft = '30px'>
          <Heading lineHeight='tall' fontSize = '60px'>
            <Highlight
              color = '#232b2b'
              query='swings'
              styles={{ px: '5', py: '1', bg: 'lightpink', color: '#232b2b', rounded: 'full'}}
            >
              moodswings
            </Highlight>
          </Heading>
          <Image src = {image} boxSize = '60px' />
          </HStack>
        <Center>
          
        </Center>
      </Flex>
      <Center minHeight = '100vh' bg = '#fffff2'> 
        <Card width = '65%' padding = {6}>
          <CardHeader> 
            <Heading> Mood Levels Over Time </Heading>
          </CardHeader>
          <Line data = {entryData} />
        </Card>
      </Center>
    </>
  )

}

export default LineChart;