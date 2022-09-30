import { Box, Typography, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';

import { brfBlackLogo } from '~/assets/images';
import { Button } from '~/components';

const Footer: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <footer>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          padding: '10px',
          flexDirection: {
            xs: 'column',
            sm: 'row'
          },
          alignItems: {
            xs: 'revert'
          }
        }}
      >
        <img
          src={brfBlackLogo}
          alt="Black Logo"
          style={{
            maxWidth: '95px',
            maxHeight: '45px'
          }}
        />
        <Box
          display="flex"
          justifyContent="space-between"
          gap={2}
          sx={{
            mt: {
              xs: 2
            }
          }}
        >
          <Button onClick={() => router.push('/use-terms')}>
            Termos de Uso
          </Button>
          <Button>Manual de Privacidade</Button>
        </Box>
      </Box>
      <Divider />
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.text.disabled,
          mt: 2
        }}
      >
        BRF © 2022. Todos direitos reservados
      </Typography>
    </footer>
  );
};

export default Footer;
