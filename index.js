const express = require('express');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const adminproductsRouter = require('./routes/admin/products');
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({
  keys: ['aklsjdi2213j1ns']
}));
app.use(authRouter);
app.use(productsRouter);
app.use(adminproductsRouter);
app.use(cartsRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening');
});