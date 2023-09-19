import './App.css';
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

function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter basename="/giftshop">
          <SnackbarProvider
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            variant={'success'}
            autoHideDuration={1000}
          />

          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="item/:itemId" element={<ItemDetails />} />
            <Route path="category/:catName" element={<ProductCategory />} />
            <Route path="collection/:collectionId" element={<Collections />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="thank" element={<Thank />} />
            <Route path="checkout/success" element={<Confirmation />} />
            <Route path="coupon" element={<Ticket />} />
          </Routes>
          <CartMenu />
          <QuickView />
          <SideBar />
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
