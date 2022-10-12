import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import avatar1 from '../../assets/avatar1.jpg';
import { BsPencilSquare } from 'react-icons/bs';

const InformationCard = () => {
  return (
    <Flex
      mt="2rem"
      width="60%"
      height="300px"
      bg="white"
      borderRadius="20px"
      align="center"
      justify="center"
    >
      <Flex width="95%" h="80%">
        <Flex width="25%" align="center" justify="center">
          <Image
            src={avatar1}
            borderRadius="full"
            boxSize="200px"
            objectFit="cover"
          />
        </Flex>
        <Flex w="75%" direction="column" justify="center" padding="2rem 1rem">
          <Flex justify="space-between">
            <Heading>Username</Heading>
            <IconButton>
              <BsPencilSquare />
            </IconButton>
          </Flex>

          <Text color="gray.400">pronouns</Text>
          <Text>
            description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus sit amet tincidunt eros. Morbi eleifend tellus id neque
            egestas sollicitudin. Sed porta molestie ultrices. Pellentesque ut
            lectus nec turpis venenatis convallis at vel diam. Cras feugiat nisi
            nisl, sit amet viverra ex consectetur a. In feugiat eget eros eu
            fringilla. Integer rhoncus hendrerit mi ut lacinia. Nunc vehicula,
            sapien at.
          </Text>
          <Link color="blue.300">Links</Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InformationCard;
