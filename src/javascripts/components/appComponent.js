var React = require('react');
var Reflux = require('reflux');
var ShopComponent = require('./shopComponent');
var CartComponent = require('./cartComponent');
var CartStore = require('../store/CartStore');


var AppComponent = React.createClass({
  mixins: [Reflux.listenTo(CartStore, "onUpdateState")],
  getInitialState: function() {
    return { cart: [] };
  },
  onUpdateState: function(cart) {
    this.setState({cart: cart});
        console.log(cart);

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

module.exports = AppComponent;