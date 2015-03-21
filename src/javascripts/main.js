require("!style!css!less!../stylesheets/main.less");

//var $ = require("jquery");
var React = require('react');

var AppComponent = require('./components/appComponent');
var PRODUCTS = require('./products');
var Backend = require('./utils/backend');
window.React = React;


React.render(<AppComponent products={PRODUCTS} />, document.getElementById('app'));


Backend.getAll();
