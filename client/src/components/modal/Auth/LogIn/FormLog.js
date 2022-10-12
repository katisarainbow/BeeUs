import React from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import InputPassword from '../Input';

const validationSchema = Yup.object({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const FormLog = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (formData) => {
      console.log(formData);
    },
    validationSchema: validationSchema,
  });
  return (
    <Flex align="center" justify="center">
      <form onSubmit={formik.handleSubmit}>
        <FormControl
          isInvalid={formik.errors.email && formik.touched.email}
          mb={2}
        >
          <Input
            type="text"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={formik.errors.password && formik.touched.password}
          mb={2}
        >
          <InputPassword
            name="password"
            placeholder="Password"
            handleChange={formik.handleChange}
            value={formik.values.password}
          />
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </FormControl>
        <Button type="submit" mb={4} mt={2} width="100%" height="36px">
          Log In
        </Button>
      </form>
    </Flex>
  );
};

export default FormLog;
