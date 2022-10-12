import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const PostModal = () => {
  return (
    <ModalContent>
      <ModalCloseButton />
      <ModalBody>
        <h1>hola</h1>
      </ModalBody>
    </ModalContent>
  );
};

export default PostModal;
