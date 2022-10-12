import React from 'react';
import { Flex } from '@chakra-ui/react';
import AuthButtons from './AuthButtons';

const RightContent = () => {
  return (
    <>
      <Flex justify="center" align="center">
        <AuthButtons />
      </Flex>
    </>
  );
};

export default RightContent;
