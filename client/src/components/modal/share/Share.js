import React from 'react';
import { IoMdAddCircleOutline, IoMdAddCircle } from 'react-icons/io';
import {
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import FormShare from './FormShare';

import Test from './Test';

const Share = ({ icons }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <IconButton size="md" bg="transparent" onClick={onOpen}>
        {!icons ? (
          <IoMdAddCircleOutline size="1.5rem" />
        ) : (
          <IoMdAddCircle size="1.5rem" />
        )}
      </IconButton>
      <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
            <FormShare isOpen={isOpen} onClose={onClose}/>
    </Modal>
    </div>
  );
};

export default Share;
