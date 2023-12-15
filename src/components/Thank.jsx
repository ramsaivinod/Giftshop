import '../styles/thank.scss';
import { useSelector } from 'react-redux';
import React from 'react';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../assets/logo/jklogo.png';

export default function Thank() {
  const breakPoint = useMediaQuery('(max-width:1100px)');
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.price);

  const rows = cart.map((item) => {
    return createData(item.title, item.variants[0].price, item.count, totalPrice);
  });

  function createData(name, price, quantity, total) {
    return { name, price, quantity, total };
  }

  return (
    <>
      <div className="thankyou-page">
        <div className="_header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <h1>Thank You!</h1>
        </div>
        <div className="_body">
          <div className="_box">
            <h2>
              <strong> Your order has been received and is currently being processed</strong>.
            </h2>

            <Paper
              style={{
                marginTop: '120px',
                width: breakPoint ? '100%' : '60%',
                left: breakPoint ? '0em' : '17em',
                position: 'relative',
              }}>
              <Table className="table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong> Product </strong>
                    </TableCell>
                    <TableCell>
                      <strong>Price</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Quantity</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Total</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>${row.price}</TableCell>
                      <TableCell>{row.quantity}</TableCell>
                      <TableCell>${(row.price * row.quantity).toFixed(2)}</TableCell>
                    </TableRow>
                  ))}

                  <TableRow>
                    <TableCell colSpan={3}>Subtotal:</TableCell>
                    <TableCell>${totalPrice}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3}>Shipping:</TableCell>
                    <TableCell>
                      <strong> Free</strong>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3}>Total:</TableCell>
                    <TableCell>
                      <strong>${totalPrice}</strong>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>

            <Box marginTop={'5em'}>
              <strong>
                Thanks a bunch for filling that out. It means a lot to us, just like you do! We really appreciate you
                giving us a moment of your time today. Thanks for being you.
              </strong>
            </Box>
          </div>
        </div>
        <div className="_footer">
          <p>
            Having trouble?{' '}
            <a href="https://www.jkyog.org" target="_blank" rel="noreferrer">
              Contact us
            </a>{' '}
          </p>
          <a className="btn" href="https://www.jkyog.org/giftshop/">
            Go to homepage
          </a>
        </div>
      </div>
    </>
  );
}
