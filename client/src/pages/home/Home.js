import { Flex } from '@chakra-ui/react';
import React from 'react';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

const Home = () => {
  return (
    <>
      <Flex>
        <Feed />
        <Rightbar />
      </Flex>
    </>
  );
};

export default Home;
