//var appDispatcher = require('../dispatcher/CartDispatcher');
//var constants = require('../constants/CartConstants');
var Reflux = require('reflux');
var Backend = require('../utils/backend');

var Actions = Reflux.createActions([
  "recieveCartData",
  "addToCart",
  "removeFromCart",
  "cartChangeQuantity"
]);

Actions.addToCart.preEmit = Backend.add;
Actions.removeFromCart.preEmit = Backend.remove;
Actions.cartChangeQuantity.preEmit = Backend.changeQuantity;


module.exports = Actions;