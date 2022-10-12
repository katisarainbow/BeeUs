import React from 'react';
import { useFormik } from 'formik';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react';
import * as yup from 'yup';

import InputPassword from '../Input';

const validationSchema = yup.object({
  username: yup.string('Enter an username').required('Username is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required')
    .oneOf([yup.ref('confirmPassword')], 'Passwords dont match'),
  confirmPassword: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Confirm Password is required')
    .oneOf([yup.ref('password')], 'Passwords dont match'),
});

const FormSign = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
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
          isInvalid={formik.errors.username && formik.touched.username}
          mb={2}
        >
          <Input
            type="text"
            name="username"
            placeholder="Username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
        </FormControl>
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
        <FormControl
          isInvalid={
            formik.errors.confirmPassword && formik.touched.confirmPassword
          }
          mb={2}
        >
          <InputPassword
            name="confirmPassword"
            placeholder="Confirm Password"
            handleChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          <FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage>
        </FormControl>
        <Button type="submit" mb={4} mt={2} width="100%" height="36px">
          Sing Up
        </Button>
      </form>
    </Flex>
  );
};

export default FormSign;
