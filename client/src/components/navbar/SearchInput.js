import React from 'react';

import { Flex, InputGroup, Input, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchInput = () => {
  return (
    <Flex flexGrow={1} mr={2} align="center">
      <InputGroup className="navbarInput">
        <Input
          size="lg"
          placeholder="Search"
          fontSize="12pt"
          _placeholder={{ color: 'gray.500' }}
          _hover={{ bg: 'white', border: '1px solid', borderColor: 'blue.500' }}
          _focus={{
            outline: 'none',
            border: '1px solid',
            borderColor: 'blue.500',
          }}
          bg="gray.50"
        />
        <InputRightElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" mb={1} mt={3} />}
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchInput;
