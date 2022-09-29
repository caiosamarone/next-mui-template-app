import React from 'react'
import * as S from './styled'
import {ButtonProps} from '@mui/material'


export const Button: React.FC<ButtonProps> = ({children, ...props}) => {
  return (
    <S.Button {...props}>{children}</S.Button>
  )
}

