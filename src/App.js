// Importing CSS styles for the App component
import './App.css';

// Importing necessary components and libraries
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetails from './components/ItemDetails';
import CartMenu from './components/CartMenu';
import SideBar from './components/SideBar';
import Checkout from './checkout/Checkout';
import Confirmation from './checkout/Confirmation';
import Thank from './components/Thank';
import { SnackbarProvider } from 'notistack';
import Collections from './components/Collections';
import QuickView from './components/QuickView';
import Ticket from './components/Ticket';
import ProductCategory from './components/ProductCategory';

// The main App component
function App() {
  return (
    <div>
      <div className="App">
        {/* Setting up the router with a base URL */}
        <BrowserRouter basename="/giftshop">
          {/* Providing a notification system using SnackbarProvider */}
          <SnackbarProvider
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            variant={'success'}
            autoHideDuration={1000}
          />
          {/* Defining the application routes */}
          <Routes>
            <Route path="/" element={<Navbar />} /> {/* Home page */}
            <Route path="item/:itemId" element={<ItemDetails />} /> {/* Item details */}
            <Route path="category/:catName" element={<ProductCategory />} /> {/* Product categories */}
            <Route path="collection/:collectionId" element={<Collections />} /> {/* Collections */}
            <Route path="checkout" element={<Checkout />} /> {/* Checkout */}
            <Route path="thank" element={<Thank />} /> {/* Thank you page */}
            <Route path="checkout/success" element={<Confirmation />} /> {/* Checkout success */}
            <Route path="coupon" element={<Ticket />} /> {/* Coupon page */}
          </Routes>
          {/* Displaying common components */}
          <CartMenu /> {/* Shopping cart menu */}
          <QuickView /> {/* Quick view component */}
          <SideBar /> {/* Sidebar for navigation */}
        </BrowserRouter>
      </div>
      {/* Displaying the footer component */}
      <Footer />
    </div>
  );
}

export default App;
