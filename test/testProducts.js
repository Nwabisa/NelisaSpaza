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

    it('getProduct should return a specific product', function(done){
     var productsDataService = new ProductsDataService(connection);
     productsDataService.getProduct(2, function(err, products) {
        //console.log("me " + products);
        assert.equal('Imasi', products.product_name);
        done();
    });
 });

    it('addProduct should return a specific product', function(done){
      var productsDataService = new ProductsDataService(connection);
      productsDataService.addProduct(function(err, products) {
        assert.equal(products);
        done();
    });
  });

     it('updateProduct', function(done){
      var productsDataService = new ProductsDataService(connection);
      productsDataService.updateProduct(function(err, products) {
        assert.equal(products);
        done();
    });
  });

   it('deleteProduct', function(done){
      var productsDataService = new ProductsDataService(connection);
      productsDataService.deleteProduct(function(err, products) {
        assert.equal(products);
        done();
    });
  }); 

  // it('getCategory-should return categories', function(done){
  //     var productsDataService = new ProductsDataService(connection);
  //     productsDataService.getCategory(1,function(err, categories) {
  //       assert.equal('Dairy Products', categories.category_name);
  //       done();
  //   });
  // });

  // it('addCategory', function(done){
  //     var productsDataService = new ProductsDataService(connection);
  //     productsDataService.getCategory(function(err, categories) {
  //       assert.equal(categories);
  //       done();
  //   });
  // }) 

  // it('updateCategory', function(done){
  //     var productsDataService = new ProductsDataService(connection);
  //     productsDataService.updateCategory(function(err, categories) {
  //       assert.equal(categories);
  //       done();
  //   });
  // }) 

  
  // it('deleteCategory', function(done){
  //     var productsDataService = new ProductsDataService(connection);
  //     productsDataService.deleteCategory(function(err, categories) {
  //       assert.equal(categories);
  //       done();
  //   });
  // }) 

  //  it('getSales', function(done){
  //     var productsDataService = new ProductsDataService(connection);
  //     productsDataService.getSales(1,function(err, sales) {
  //       assert.equal(1, sales.product_Id);
  //       done();
  //   });
  // })
   
  //   it('updateSales', function(done){
  //     var productsDataService = new ProductsDataService(connection);
  //     productsDataService.updateSales(function(err, sales) {
  //       assert.equal(sales);
  //       done();
  //   });
  // })

});