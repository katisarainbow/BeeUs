import {
  Box,
  Flex,
  Textarea,
  ModalBody,
  Input,
  ModalFooter,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Avatar,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { usePosts } from '../../../context/postContext';

const validationSchema = Yup.object({
  title: Yup.string('Enter a title').required('Title is required'),
});

const EndForm = ({ previewImageForm }) => {
  const { createPost } = usePosts();
  const [imageBase64, setImageBase64] = useState();

  useEffect(() => {
    if (previewImageForm) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result.toString());
      };
      reader.readAsDataURL(previewImageForm);
    } else {
      setImageBase64(null);
    }
  }, [previewImageForm]);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      image: imageBase64,
      tags: '',
    },
    onSubmit: (formData) => {
      console.log(formData);
      createPost(formData);
    },
    validationSchema: validationSchema,
  });

  return (
    <Flex>
      <form onSubmit={formik.handleSubmit}>
        <ModalBody>
          <Flex direction="row">
            <Box mt="6rem" mr="1.5rem">
              <img src={imageBase64} alt="preview" width="600em" />
              <Input
                style={{ display: 'none' }}
                type="text"
                value={formik.values.image}
              />
            </Box>
            <Flex direction="column">
              <Flex flexDirection="row" align="center">
                <Avatar size="sm" mr="1rem" />
                <Text>manolito1</Text>
              </Flex>
              <Input
                placeholder="Title"
                type="text"
                width="20rem"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                text-align="initial"
                resize="none"
                mt="1rem"
              />
              <Textarea
                type="text"
                placeholder="Description"
                height="10rem"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                resize="none"
                mt="1rem"
              />
              <Accordion allowToggle mt="1rem">
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Add Tags
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Input
                      type="text"
                      placeholder="Tags"
                      name="tags"
                      value={formik.values.tags}
                      onChange={formik.handleChange}
                      resize="none"
                    />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter mt="6rem">
          <Button type="button">Cancel</Button>
          <Button type="submit" width="200px">
            Next
          </Button>
        </ModalFooter>
      </form>
    </Flex>
  );
};

export default EndForm;
