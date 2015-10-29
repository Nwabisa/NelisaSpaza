  module.exports = function(connection){
    this.getSales = function(Id, cb){
     connection.query('SELECT Id,sale_price, no_sold,product_Id  FROM sales WHERE Id = ?', Id, function(err, sales){
       if (err) return cb(err, null);
       if (sales && sales.length > 0){
         return cb(null, sales[0]);
       }
              //to do: do we want to return null!
              cb(null, null);
            });   
   }

   this.addSales = function(Id, cb){
     connection.query('insert into sales set product_Id=(select Id FROM products WHERE product_name=?), ?', Id, function(err, sales){
       if (err) return cb(err, null);
       if (sales && sales.length > 0){
         return cb(null, sales[0]);
       }
             // to do: do we want to return null!
             cb(null, null);
           });   
   }
   this.updateSales = function(Id, cb){
     connection.query('UPDATE sales SET ? WHERE Id = ?', Id, function(err, sales){
       if (err) return cb(err, null);
       if (sales && sales.length > 0){
         return cb(null, sales[0]);
       }
             // to do: do we want to return null!
             cb(null, null);
           });   
   }

   this.deleteSales = function(Id, cb){
     connection.query('DELETE FROM sales WHERE Id = ?', Id, function(err, sales){
       if (err) return cb(err, null);
       if (sales && sales.length > 0){
         return cb(null, sales[0]);
       }
             // to do: do we want to return null!
             cb(null, null);
           });   
   }
   this.searchSales = function(Id, cb){
     connection.query('SELECT sales.Id,products.product_name, date, sale_price, no_sold FROM sales, products WHERE product_name LIKE?', Id, function(err, sales){
       if (err) return cb(err, null);
       connection.query('SELECT product_name FROM products', Id, function(err, products){
         if (err) return cb(err, null);
         if (sales && sales.length > 0){
           return cb(null, sales[0]);
         }
             // to do: do we want to return null!
             cb(null, null);
           });   
     });
   };

};