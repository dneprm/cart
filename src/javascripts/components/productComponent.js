var React = require('react');
var _ = require("underscore");
var CartActions = require('../actions/CartActions');

var ProductComponent = React.createClass({
  addToCart: function(event) {
    event.preventDefault();
    //this.props.addToCart(this.props.product.code);
    CartActions.addToCart(this.props.product.code);
  },
  render: function() {
    return (
      <div className="productWrapper">
        <a href="#" className="col-md-4 add-to-cart" onClick={this.addToCart}>
         <img src={this.props.product.img} alt={this.props.product.title} />
        </a>
      </div>
    );
  }
})

module.exports = ProductComponent;