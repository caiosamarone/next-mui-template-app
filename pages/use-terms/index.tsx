import { Box, Typography } from '@mui/material';
import type { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { Button } from '~/components';

interface UseTerms {
  terms: {
    text: string;
  };
}

const UseTerms: React.FC<UseTerms> = ({ terms }) => {
  const router = useRouter();
  return (
    <Box mt={4}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          minHeight: 'calc(100vh - 20rem)'
        }}
      >
        <Typography variant="h2"> Termos de Uso</Typography>
        <Typography variant="body1"> {terms?.text}</Typography>
        <img
          src="https://www.termsfeed.com/public/uploads/2022/05/sample-terms-of-use-template.jpg"
          alt="termos de uso"
          style={{ width: '100%', maxWidth: '450px' }}
        />
      </Box>
      <Button color="secondary" onClick={() => router.push('/')}>
        Voltar para home
      </Button>
    </Box>
  );
};
export const getServerSideProps = () => {
  // Fetch data from external API
  const terms = {
    text: 'Este Termo de Uso foi atualizado para um modelo mais recente, com a aplicação da Lei Geral de Proteção de Dados, assim como as recentes mudanças na legislação brasileira. Lembre-se que também é preciso uma Política de Privacidade atualizada com a LGPD.'
  };

  // Pass data to the page via props
  return {
    props: {
      terms
    }
  };
};

export default UseTerms;
