import React, { useRef } from 'react';
import { Paper, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
const styles = {
  container: {
    display: 'flex',
    scrollBehavior: 'smooth',
    scrollSnapType: 'x mandatory',
    backgroundColor: '#4d4d4d',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  paper: {
    backgroundColor: '#4d4d4d',
    padding: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '20px',
    borderRadius: '0px',
    scrollSnapAlign: 'center',
  },
  arrowButton: {
    color: 'white',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  leftArrowButton: {
    left: 0,
  },
  rightArrowButton: {
    right: 0,
  },
};

import { PAPERS } from '../utils/constants';

const Papers = () => {
  const breakPoint = useMediaQuery('(min-width:1000px)');
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <div style={styles.container} ref={containerRef}>
      <Paper
        onClick={() => {
          navigate('/coupon');
          window.scrollTo(0, 0);
        }}
        sx={{
          backgroundColor: '#374450',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '25px',
          borderRadius: '0px',
          scrollSnapAlign: 'center',
        }}
        elevation={3}
        className="nav-offer">
        <marquee>
          <Typography className="slide-offer">
            <span>{PAPERS.TITLE}</span>
            <span>{PAPERS.DESC}</span>
          </Typography>
        </marquee>
      </Paper>
    </div>
  );
};

export default Papers;
