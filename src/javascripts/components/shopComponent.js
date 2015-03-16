var React = require('react');
var _ = require("underscore");
var ProductComponent = require('./productComponent');

var ShopComponent = React.createClass({
  render: function() {
    //console.log(this.props.products);
    var productList = this.props.products.map(function(product, index){
       return (<ProductComponent product={product} key={index} addToCart= {this.props.addToCart} />)
    }.bind(this));
    return (
      <div className="shopWrapper">
        <h1>Shop</h1>
        <div className="row">
          {productList}
        </div>
      </div>
      )
  }
})

/*function ShopComponent(products) {
  var html = [
    '<h1>Shop</h1>',

    '<div class="row">',
      '<% products.forEach(function(product) {',
        'print(ProductComponent(product))',
      '}) %>',
    '</div>'
  ].join('\n');

  return _.template(html)({
    products: products,
    ProductComponent: ProductComponent
  });
}*/
module.exports = ShopComponent;