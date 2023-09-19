import React, { Fragment } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';

import { setIsFilterOpen } from '../state';
import { setSortOrder } from '../state';

import '../styles/style.css';

function CategoriesButton({ onChange, value }) {
  const dispatch = useDispatch();
  const sortOrder = useSelector((state) => state.cart.sortOrder);
  const breakPoint = useMediaQuery('(max-width:700px)');

  const itemsCategories = useSelector((state) => state.cart.itemsCategories);

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(setSortOrder(value));
    onChange(value);
  };

  const handleMobChange = (event) => {
    const value = event.target.value;
    dispatch(setSortOrder(value));
    dispatch(setIsFilterOpen({}));
    onChange(value);
  };

  return (
    <Fragment>
      <p className="priceheading mt-4">CATEGORY</p>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="sortOrder"
          name="sortOrder"
          value={sortOrder}
          onChange={breakPoint ? handleMobChange : handleChange}
          row>
          {itemsCategories?.map((item, index) => (
            <FormControlLabel
              key={index}
              value={item}
              control={
                <Radio
                  sx={{
                    color: 'black',
                    '&.Mui-checked': {
                      color: 'rgb(255, 109, 47)',
                    },
                  }}
                />
              }
              label={
                <Typography variant="h5" fontFamily={'QuickSand'} sx={{ marginRight: '36px', fontSize: '15px' }}>
                  {item}
                </Typography>
              }
              labelPlacement="end"
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Fragment>
  );
}

export default CategoriesButton;
