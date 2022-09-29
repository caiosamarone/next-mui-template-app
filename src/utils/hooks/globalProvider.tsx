import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../assets/styles/theme';
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from '../../utils/config/createEmotionCache';
import GlobalStyles from '@mui/material/GlobalStyles';
import Layout from '../../modules/Layout';

interface GlobalProviderProps {
  children?: React.ReactNode;
  emotionCache?: EmotionCache;
}
const clientSideEmotionCache = createEmotionCache();

export const GlobalProvider: React.FC<GlobalProviderProps> = props => {
  const { children, emotionCache = clientSideEmotionCache } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>{children}</Layout>
      </ThemeProvider>
    </CacheProvider>
  );
};
