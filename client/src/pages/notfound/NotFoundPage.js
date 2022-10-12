import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import notFound from '../../assets/notfound.jpg';

const NotFoundPage = () => {
  return (
    <Flex align="center" justify="center" bg="white" mt="2rem" padding="2rem">
      <Flex>
        <Image src={notFound} w="75%" />
      </Flex>
      <Flex w="100%" direction="column" align="end">
        <Heading>The page you are looking for has not been found</Heading>
        <Link mt="1rem">Go back to Home</Link>
      </Flex>
    </Flex>
  );
};

export default NotFoundPage;
