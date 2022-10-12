import {
  Grid,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const InputPassword = ({ name, handleChange, type, placeholder, value }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputGroup>
      <Input
        name={name}
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      <InputRightElement>
        <IconButton onClick={handleClick} size="sm">
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </IconButton>
      </InputRightElement>
    </InputGroup>
  );
};

export default InputPassword;
