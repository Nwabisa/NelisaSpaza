var mysql = require('mysql');
var assert = require('assert');
var ProductsDataService = require('../routes/getCategories');

describe('test the ProductsDataService', function(){
    // Uncomment the line below and create a connection to your mysql database
    var connection = mysql.createConnection({
    	host: 'localhost',
    	user: 'root',
    	password: 'coder123',
    	port: 3306,
    	database: 'SpazaApp'
    });
it('getCategory-should return categories', function(done){
      var productsDataService = new ProductsDataService(connection);
      productsDataService.getCategory(1,function(err, categories) {
        assert.equal('Dairy Products', categories.category_name);
        done();
    });
  });

  it('addCategory', function(done){
      var productsDataService = new ProductsDataService(connection);
      productsDataService.getCategory(function(err, categories) {
        assert.equal(categories);
        done();
    });
  }) 

  it('updateCategory', function(done){
      var productsDataService = new ProductsDataService(connection);
      productsDataService.updateCategory(function(err, categories) {
        assert.equal(categories);
        done();
    });
  }) 

  
  it('deleteCategory', function(done){
      var productsDataService = new ProductsDataService(connection);
      productsDataService.deleteCategory(function(err, categories) {
        assert.equal(categories);
        done();
    });
  });
  });