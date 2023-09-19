import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Box, Container, Grid, IconButton } from '@mui/material';
import { ShoppingCart, LocalShipping, Payment } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  iconButton: {
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.secondary.main,
    },
  },
}));

const RectangleBanner = () => {
  const classes = useStyles();

  return (
    <Box className={classes.banner}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center">
              <IconButton className={classes.iconButton}>
                <ShoppingCart />
              </IconButton>
              <Box marginLeft={1}>Free Shipping on Orders over $50</Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center">
              <IconButton className={classes.iconButton}>
                <LocalShipping />
              </IconButton>
              <Box marginLeft={1}>Fast Shipping Worldwide</Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center">
              <IconButton className={classes.iconButton}>
                <Payment />
              </IconButton>
              <Box marginLeft={1}>Secure Payments</Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RectangleBanner;
