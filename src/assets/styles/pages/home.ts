import {Container as ContainerMui} from '@mui/material'
import { styled } from "@mui/material/styles";

export const Container = styled(ContainerMui)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 'unset!important',
  padding: '10px 0px!important'
})
