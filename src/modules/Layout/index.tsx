import {Container,Box} from '@mui/material'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout:React.FC<LayoutProps> = ({children}) => {
  return (
    <Container maxWidth="xl" sx={{display: 'flex', flexDirection: 'column'}}>
      <Header />
      <Box id='body' component='div' sx={{ width: '100%', minHeight: 'calc(100vh - 10rem)'}}>
       {children}
      </Box>
      <Footer />
    </Container>
  )
}

export default Layout