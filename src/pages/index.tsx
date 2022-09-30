import { Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import type { NextPage } from 'next';
import Head from 'next/head';

import * as S from '~/assets/styles/pages/home';
import { Paper } from '~/components';

const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Boilerplate NextJs</title>
        <meta
          name="description"
          content="Boilerplate feito com Next JS, Typrescript, Material UI5"
        />
        <meta name="keywords" content="TS, Next, Mui" />
        <meta name="author" content="Caio Mendes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <S.Container>
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.text.primary,
            fontSize: '2.50rem'
          }}
        >
          Boilerplate NextJS + Material UI 5
        </Typography>
        <Box marginTop={12} display="flex" gap={8} flexWrap="wrap">
          <Paper width={320} height={220} padding="12px">
            <img
              src="https://veja.abril.com.br/wp-content/uploads/2017/03/brf-chapeco-20170317-0002.jpg"
              alt="BRF"
              style={{
                height: '100%'
              }}
            />
          </Paper>
        </Box>
      </S.Container>
    </>
  );
};

export default Home;
