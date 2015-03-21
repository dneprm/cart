var React = require('react');
var _ = require("underscore");
var CartActions = require('../actions/CartActions');


var CartProductComponent = React.createClass({
  removeFromCart: function(event) {
    event.preventDefault();
    //this.props.removeFromCart(this.props.product.id)
    CartActions.removeFromCart(this.props.product.code);
  },
  changeQuantity: function(event) {
    var value = parseInt(event.target.value);
    //this.props.changeQuantity(this.props.product.id, value)
    CartActions.cartChangeQuantity(this.props.product.code, value);

  },
  render: function() {
    return (
      <div className="cartProductWrapper">
        <div className="row product">
          <img className="col-md-3" src={this.props.product.img} alt={this.props.product.title} />
           <div className="col-md-5">
            <h3>{this.props.product.title}</h3>
            <p>{this.props.product.description}</p>
           </div>
           <div className="price col-md-2">$ {this.props.product.price}</div>
           <div className="col-md-1">
             <input type="number" min="1" className="form-control" value={this.props.product.quantity} onChange={this.changeQuantity}/>
           </div>
           <a onClick={this.removeFromCart} href="#" className="delete fui-cross"></a>
        </div>
      </div>
    )
  }
})


module.exports = CartProductComponent;