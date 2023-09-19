import { Box, IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import CancelIcon from '@mui/icons-material/Cancel';

import { setIsNavOpen, setValue } from '../state';

const FilterBar = () => {
  const dispatch = useDispatch();
  const isNavOpen = useSelector((state) => state.cart.isNavOpen);

  return (
    <Box
      display={isNavOpen ? 'block' : 'none'}
      position="fixed"
      zIndex={10}
      width="30%"
      height="30%"
      left="0"
      top="0"
      overflow="auto">
      <Box position="fixed" left="0" bottom="0" width="max(400px, 30%)" height="100%" backgroundColor="white">
        <Box padding="30px" overflow="auto" height="100%">
          <IconButton onClick={() => dispatch(setIsNavOpen({}))}>
            <CancelIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterBar;
