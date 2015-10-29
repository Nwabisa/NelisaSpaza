var mysql = require('mysql');
var assert = require('assert');
var ProductsDataService = require('../routes/getCategories');

describe('test the CategoriesDataService', function(){
    // Uncomment the line below and create a connection to your mysql database
    var connection = mysql.createConnection({
    	host: 'localhost',
    	user: 'root',
    	password: 'coder123',
    	port: 3306,
    	database: 'SpazaApp'
    });
it('testing GET for categories', function(done){
      var productsDataService = new ProductsDataService(connection);
      productsDataService.getCategory(1,function(err, categories) {
        assert.equal('Dairy Products', categories.category_name);
        done();
    });
  });

  it('testing ADD for categories', function(done){
      var productsDataService = new ProductsDataService(connection);
      productsDataService.addCategory('chips', function(err, status) {

        productsDataService.getCategory(status.insertId, function(err, categories) {       
         // console.log("la " + categories);
        assert.equal('chips', categories.category_name);
        done();
    });
  });
 }) 

  it('testing EDIT for categories', function(done){
      var productsDataService = new ProductsDataService(connection);
      productsDataService.updateCategory(function(err, categories) {
        assert.equal(categories);
        done();
    });
  }) 

  
  it('testing DELETE for categories', function(done){
      var productsDataService = new ProductsDataService(connection);
      productsDataService.deleteCategory(function(err, categories) {
        assert.equal(categories);
        done();
    });
  });

  it('testing SEARCH for categories', function(done){
      var productsDataService = new ProductsDataService(connection);
      productsDataService.searchCategory(function(err, categories) {
        assert.equal(categories);
        done();
    });
  });

 });