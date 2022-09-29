import { Button } from '@/components/index';
import { Box, Typography, Divider } from '@mui/material';
import Image from 'next/image';
import { brfBlackLogo } from '@/assets/images';
import { useTheme } from '@mui/material/styles';

const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <footer>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ padding: '10px' }}
      >
        <Image src={brfBlackLogo} alt="Black Logo" width={80} height={38} />
        <Box>
          <Button>Termos de Uso</Button>
          <Button>Manual de Privacidade</Button>
        </Box>
      </Box>
      <Divider />
      <Typography
        variant="body2"
        sx={{ color: theme.palette.text.disabled, mt: 2 }}
      >
        {' '}
        BRF © 2022. Todos direitos reservados
      </Typography>
    </footer>
  );
};

export default Footer;
