import { AccountCircleOutlined as UserIcon } from '@mui/icons-material';
import { Box } from '@mui/material';

import { brfIcon } from '~/assets/icons';

import * as S from './styled';

const Header = () => {
  return (
    <S.Header>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <S.BrfIcon src={brfIcon} alt="BRF Logo Icon" />
        <UserIcon />
      </Box>
    </S.Header>
  );
};

export default Header;
