import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import FormSign from './FormSign';

const SignUp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const name = 'Sign Up';
  return (
    <>
      <Button
        height="40px"
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '60px', md: '100px' }}
        mr={2}
        onClick={onOpen}
      >
        {name}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormSign />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignUp;
