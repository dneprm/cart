var React = require('react');
var ProductComponent = require('./productComponent');

var ShopComponent = React.createClass({
  render: function() {
    //console.log(this.props.products);
    var productList = this.props.products.map(function(product, index){
       return (<ProductComponent product={product} key={index} />)
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


module.exports = ShopComponent;