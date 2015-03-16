var React = require('react');
var _ = require("underscore");

var ProductComponent = React.createClass({
  addToCart: function(event) {
    event.preventDefault();
    this.props.addToCart(this.props.product.code);
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
/*function ProductComponent(product) {
  var html = [
    '<a href="#" class="col-md-4 add-to-cart" data-product="<%= code %>">',
      '<img src="<%= img %>" alt="<%= title %>">',
    '</a>'
  ].join("\n");

  return _.template(html)(product);
}*/
module.exports = ProductComponent;