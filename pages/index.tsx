import type { NextPage } from 'next'
import Head from 'next/head'
import * as S from '../src/assets/styles/pages/home'
import {Typography, Box} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import Paper from '../src/components/Paper/Paper';


const Home: NextPage = () => {
  const theme = useTheme();
  return (
    <>
    <Head>
      <title>Boilerplate NextJs</title>
    </Head>
    <S.Container>
        <Typography variant='h3' sx={{color: theme.palette.text.primary, fontSize: '2.50rem'}}>Boilerplate NextJS + Material UI 5</Typography>
        <Box marginTop={12} display='flex' gap={8} flexWrap='wrap'>
             <Paper width={320} height={220} padding={'12px'}>
               <img src="https://veja.abril.com.br/wp-content/uploads/2017/03/brf-chapeco-20170317-0002.jpg" alt="BRF" />
             </Paper>
             <Box display='flex' flexDirection='column' gap={2}>
              <Paper width={220} height={'fit-content'} padding={'12px'}>
                <Typography variant='caption' sx={{color: theme.palette.text.primary}}>A BRF S.A. é uma das maiores companhias de alimentos do mundo, com mais de 30 marcas em seu portfólio</Typography>
              </Paper>
              <Paper width={220} height={'fit-content'}  padding={'12px'}>
                <Typography variant='caption' sx={{color: theme.palette.text.primary}}>A BRF é uma empresa transnacional brasileira do ramo alimentício, fruto da fusão entre Sadia e Perdigão, duas das principais empresas de alimentos do Brasil.</Typography>
              </Paper>
             </Box>
             <Paper width={120} height={220} padding={'12px'}>
               <Typography variant='caption' sx={{color: theme.palette.text.primary}}>MyPaper</Typography>
             </Paper>
        </Box>
    </S.Container>

    </>
  )
}

export default Home
