import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: '#e76f51',
  secondary: '#f4a261',
  highlight: '#e9c46a',
  warning: '#ffb703',
  danger: '#e63946',
};

const styles = {
  global: () => ({
    body: {
      bg: 'gray.200',
    },
  }),
};

const Button = {
  baseStyle: {
    borderRadius: '60px',
    color: 'brand.100',
    border: 'none',
  },
};

export const theme = extendTheme({ colors, styles, components: { Button } });
