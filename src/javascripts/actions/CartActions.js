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
/*var Actions = {
  recieveCartData: function(data) {
    appDispatcher.dispatch({
      actionType: constants.RECEIVE_CART_DATA,
      data: data
    })
    //Backend.getAll();
  },
  addToCart: function(code) {
    appDispatcher.dispatch({
      actionType: constants.CART_ADD,
      code: code
    });
   Backend.add(code);
  },
  removeFromCart: function(code) {
    appDispatcher.dispatch({
      actionType: constants.CART_REMOVE,
      code: code
    });
   Backend.remove(code);
  },
  cartChangeQuantity: function(code, quantity) {
    appDispatcher.dispatch({
      actionType: constants.CART_CHANGE_QUANTITY,
      code: code,
      quantity: quantity
    });
   Backend.changeQuantity(code, quantity);
  }
}*/
module.exports = Actions;