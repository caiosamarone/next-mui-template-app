import {PaperProps as MuiPapperProps, Paper as PaperMui} from '@mui/material'

interface PaperProps extends MuiPapperProps {
  width?: number | string
  height?: number | string
  padding?: number | string
  children: React.ReactNode
}



const Paper: React.FC<PaperProps> = ({width = 80, height = 80, padding ='2px',children, ...props}) => {
  return (
    <PaperMui sx={{width, height, padding, ...props}}>
      {children}
    </PaperMui>
  )
}

export default Paper