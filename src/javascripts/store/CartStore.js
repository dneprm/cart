var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var AppDispatcher = require('../dispatcher/CartDispatcher');
var ActionTypes = require('../constants/CartConstants');
var Actions = require('../actions/CartActions');
var products = require('../products');


var CHANGE_EVENT = 'change';

var _cart = [];

function _recieveCartData(data) {
  _cart = data;
}

function _addToCart(code) {
  var cartProduct;
  var product = products.filter(function(product) {
    return product.code === code;
  })[0];

  if(CartStore.isInCart(product)) {
    cartProduct=CartStore.getProduct(code);
    cartProduct.quantity++;
  } else {
    cartProduct = assign({}, product, {quantity: 1});
    _cart.push(cartProduct);
  }

}
function _cartRemove(code) {
  var cartProduct = CartStore.getProduct(code);
  _cart.splice(_cart.indexOf(cartProduct), 1);
}
function _changeQuantity(code, quantity) {
  var cartProduct = CartStore.getProduct(code);
  cartProduct.quantity = quantity;
}

var CartStore = assign({}, EventEmitter.prototype, {
  isInCart: function(product) {
    return _cart.some(function(prod) {
      return prod.code===product.code;
    });
  },

  getCartState: function() {
    return _cart;
  },
  
  getProduct: function(code) {
    return _cart.filter(function(prod) {
      return prod.code===code;
    })[0];
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  //var action = payload.action;

  switch(action.actionType) {
    case ActionTypes.RECEIVE_CART_DATA:
      _recieveCartData(action.data);

      CartStore.emitChange();
      break;

    case ActionTypes.CART_ADD:
      _addToCart(action.code);

      CartStore.emitChange();
      break;
    
    case ActionTypes.CART_REMOVE:
      _cartRemove(action.code);
      
      CartStore.emitChange();
      break;
    
    case ActionTypes.CART_CHANGE_QUANTITY:
      _changeQuantity(action.code, action.quantity);
      
      CartStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = CartStore;