// Import necessary modules and components
import { Box, IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import CancelIcon from '@mui/icons-material/Cancel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';

// Import Redux actions
import { setIsNavOpen, setValue } from '../state';

// Define the Sidebar component
const SideBar = () => {
  // Initialize necessary hooks and selectors
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const value = useSelector((state) => state.cart.value);
  const isNavOpen = useSelector((state) => state.cart.isNavOpen);

  // Handle tab change in the Sidebar
  const handleChange = (event, newValue) => {
    dispatch(setValue(newValue));
    window.scrollTo(0, 0);
  };

  // Handle navigation menu item click
  const handleNavMenuClick = (cat) => {
    navigate(`/category/${cat}`);
  };

  // Render the Sidebar component
  return (
    <Box display={isNavOpen ? 'block' : 'none'} className="sidebarmenu">
      <Box overflow="auto" height="100%" padding="20px">
        {/* Close button */}
        <IconButton
          onClick={() => dispatch(setIsNavOpen({}))}
          style={{ position: 'absolute', right: 0, color: '#fff' }}>
          <CancelIcon />
        </IconButton>
        {/* Sidebar tabs */}
        <Tabs
          textColor="primary"
          indicatorColor="green"
          value={value}
          orientation="vertical"
          onChange={handleChange}
          centered
          scrollButtons="auto"
          TabIndicatorProps={{
            sx: {
              display: 'none',
            },
          }}
          sx={{
            '& .MuiTabs-flexContainer': {
              flexWrap: 'wrap',
              '& .MuiTab-root.Mui-selected': {
                color: '#fff',
              },
            },
          }}>
          {/* Individual tabs */}
          <Tab
            label="ALL"
            value="All"
            style={{
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
            onClick={() => dispatch(setIsNavOpen({}))}
          />
          <Tab
            label="SWAMIJI KIRTANS"
            value="Swamiji Kirtans"
            style={{
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
            onClick={() => {
              handleNavMenuClick('Swamiji%20Kirtans');
            }}
          />
          <Tab
            label="ENGLISH BOOKS"
            value="English Books"
            style={{
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
            onClick={() => {
              handleNavMenuClick('English%20Books');
            }}
          />
          <Tab
            label="BAL MUKUND BOOKS"
            value="Bal Mukund Books"
            style={{
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
            onClick={() => {
              handleNavMenuClick('BalMukund%20Books');
            }}
          />
          <Tab
            label="ENGLISH LECTURES"
            value="English Lectures"
            style={{
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
            onClick={() => {
              handleNavMenuClick('English%20Lectures-Swamiji%20(Audio)');
            }}
          />
        </Tabs>
      </Box>
    </Box>
  );
};

// Export the Sidebar component
export default SideBar;
