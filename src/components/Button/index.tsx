import React from 'react';

import { ButtonProps } from '@mui/material';

import * as S from './styled';

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <S.Button {...props}>{children}</S.Button>;
};

export default Button;
