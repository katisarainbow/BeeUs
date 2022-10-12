import React, { useState, useRef, useEffect } from 'react';
import {
  Button,
  Flex,
  Heading,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
} from '@chakra-ui/react';

import StepCrop from '../../crop/StepCrop';
import icon from '../../../assets/icon.png';

const FormShare = () => {
  const [imageToCrop, setImageToCrop] = useState(null);
  const [image, setImage] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageToCrop(reader.result.toString());
      };
      reader.readAsDataURL(image);
    } else {
      setImageToCrop(null);
    }
  }, [image]);

  return (
    <ModalContent align="center">
      <ModalHeader>Create a post</ModalHeader>
      <ModalCloseButton />
      <Flex height="700px" flexDirection="column" align="center">
        {!imageToCrop ? (
          <ModalBody alignItems="center" mt="4rem">
            <img src={icon} alt="iconShare" />
            <Heading as="h1">Share your art with the Bees</Heading>
            <Input
              type="file"
              style={{ display: 'none' }}
              ref={inputRef}
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files[0];
                if (file && file.type.substr(0, 5) === 'image') {
                  setImage(file);
                  console.log(file);
                } else {
                  setImage(null);
                }
              }}
            />
            <Button
              type="button"
              width="20rem"
              align="center"
              mt="2rem"
              onClick={() => inputRef.current.click()}
            >
              Select file
            </Button>
          </ModalBody>
        ) : (
          <StepCrop {...{ imageToCrop, setImageToCrop }} />
        )}
      </Flex>
    </ModalContent>
  );
};

export default FormShare;
