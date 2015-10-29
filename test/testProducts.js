var mysql = require('mysql');
var assert = require('assert');
var ProductsDataService = require('../routes/getProduct');

describe('test the ProductsDataService', function(){
    // Uncomment the line below and create a connection to your mysql database
    var connection = mysql.createConnection({
    	host: 'localhost',
    	user: 'root',
    	password: 'coder123',
    	port: 3306,
    	database: 'SpazaApp'
    });

    it('testing GET for products', function(done){
     var productsDataService = new ProductsDataService(connection);
     productsDataService.getProduct(2, function(err, products) {
      console.log(products)
        assert.equal('Imasi', products.product_name);
        done();
    });
 });

    it('testing ADD for products', function(done){
      var productsDataService = new ProductsDataService(connection);
      productsDataService.addProduct(function(err, products) {
        assert.equal(products);
        done();
    });
  });

     it('testing UPDATE for products', function(done){
      var productsDataService = new ProductsDataService(connection);
      productsDataService.updateProduct(function(err, products) {
        assert.equal(products);
        done();
    });
  });

   it('testing DELETE for products', function(done){
      var productsDataService = new ProductsDataService(connection);
      productsDataService.deleteProduct(function(err, products) {
        assert.equal(products);
        done();
    });
  }); 

  
    it('testing SEARCH for products', function(done){
      var productsDataService = new ProductsDataService(connection);
      productsDataService.searchProduct(function(err, products) {
        assert.equal(products);
        done();
    });
  });
});