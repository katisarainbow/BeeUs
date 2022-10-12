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
import FormLog from './FormLog';

const LogIn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const name = 'Log In';
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
            <FormLog />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LogIn;
