require("../lib/Stuff.js");


var assign = require('object-assign');
var locCartStore = Stuff('shopping_cart');
var products = require('../products');



module.exports = {
  getAll() {
    var Actions = require('../actions/CartActions');

    var data = locCartStore.map(function(id) {
      var product = locCartStore.get(id);
      product.id = id;
      return product;
    });
    Actions.recieveCartData(data);
  },
  add(code) {
    var cartProduct;
    var product = products.filter(function(prod) {
      return prod.code===code;
    })[0];
    var cartProductId = locCartStore.find(function(id) {
      return locCartStore.get(id).code===code;
    });
    if(cartProductId) {
      cartProduct = locCartStore.get(cartProductId);
      cartProduct.quantity++;
      locCartStore.update(cartProductId, cartProduct);
    } else {
      locCartStore.add(assign({}, product, {quantity: 1}));
    } 
  },
  
  remove(code) {
    locCartStore.remove(locCartStore.find(function(id) {
      return locCartStore.get(id).code===code;
    }));
  },

  changeQuantity(code, quantity) {
    var productId = locCartStore.find(function(id) {
      return locCartStore.get(id).code === code;
    });

    var product = locCartStore.get(productId);

    product.quantity = quantity;
    locCartStore.update(productId, product);
  }
}

