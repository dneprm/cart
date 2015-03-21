var React = require('react');
var _ = require("underscore");
var ShopComponent = require('./shopComponent');
var CartComponent = require('./cartComponent');
var CartStore = require('../store/CartStore');


var AppComponent = React.createClass({
  getInitialState: function() {
    return { cart: [] };
  },
  updateState: function() {
    this.setState({cart: CartStore.getCartState()})
  },
  componentWillMount: function() {
    CartStore.addChangeListener(this.updateState);
  },
  componentWillUnmount: function() {
    CartStore.removeChangeListener(this.updateState);
  },

  render: function() {
    return (
      <div className="app">
        <ShopComponent products={this.props.products} />
        <CartComponent cart={this.state.cart} />
      </div>
    );
  }
})

/*function AppComponent(state) {
  var html = [
    '<div class="shop">',
      '<% print(ShopComponent(products)) %>',
    '</div>',

    '<div class="cart">',
      '<% print(CartComponent(cart)) %>',
    '</div>',
  ].join("\n");

  state.ShopComponent = ShopComponent;
  state.CartComponent = CartComponent;

  return _.template(html)(state);
}*/

module.exports = AppComponent;