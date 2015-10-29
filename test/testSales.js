var mysql = require('mysql');
var assert = require('assert');
var ProductsDataService = require('../routes/getSales');

describe('test the SalesDataService', function(){
    // Uncomment the line below and create a connection to your mysql database
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'coder123',
      port: 3306,
      database: 'SpazaApp'
    });
    it('testing GET for sales', function(done){
       var productsDataService = new ProductsDataService(connection);
       productsDataService.getSales(1,function(err, sales) {
         assert.equal(1, sales.product_Id);
         done();
     });
   })
     it('testing ADD for sales', function(done){
       var productsDataService = new ProductsDataService(connection);
       productsDataService.addSales(function(err, sales) {
         assert.equal(sales);
         done();
     });
   })

     it('testing EDIT for sales', function(done){
       var productsDataService = new ProductsDataService(connection);
       productsDataService.updateSales(function(err, sales) {
         assert.equal(sales);
         done();
     });
   })
       it('testing DELETE for sales', function(done){
       var productsDataService = new ProductsDataService(connection);
       productsDataService.deleteSales(function(err, sales) {
         assert.equal(sales);
         done();
     });
   })
        it('testing SEARCH for sales', function(done){
       var productsDataService = new ProductsDataService(connection);
       productsDataService.searchSales(function(err, sales) {
         assert.equal(sales);
         done();
     });
   })
});