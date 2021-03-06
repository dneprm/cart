var React = require('react');
var _ = require("underscore");
var CartProductComponent = require('./cartProductComponent');

var CartComponent = React.createClass({
  render: function() {
    console.log(this.props.cart);
    var cartList = this.props.cart.map(function(product, index){
       return (<CartProductComponent product={product} key={index} removeFromCart={this.props.removeFromCart} changeQuantity={this.props.changeQuantity} />)
    }.bind(this));
      var total = this.props.cart.reduce(function(total, prod){
        return total += prod.price*prod.quantity;
      }, 0)
    return (
      <div className="cartWrapper">
        <h1>Your order</h1>
         {cartList}
        <div className="row">
          <div className="total col-md-3">
            Total: <span className="total-amount"> $ {total}</span>
          </div>
        </div>
      </div>
    );
  }
})

/*function CartComponent(cart) {
  var html = [
    '<h1>Your order</h1>',

    '<% cart.forEach(function(product) {',
      'print(CartProductComponent(product))',
    '}) %>',

    '<div class="row">',
      '<div class="total col-md-3">',
        'Total: <span class="total-amount">$<%= total %></span>',
      '</div>',
    '</div>'
  ].join("\n");

  var total = cart.reduce(function(s, product) {
    return s += product.price * product.quantity;
  }, 0);

  return _.template(html)({
    cart: cart,
    total: total,
    CartProductComponent: CartProductComponent
  });
}*/
module.exports = CartComponent;