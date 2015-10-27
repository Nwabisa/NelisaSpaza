module.exports = function(connection){
    this.getProduct = function(Id, cb){
        connection.query('SELECT product_name FROM products WHERE Id=?', Id, function(err, products){
            if (err) return cb(err, null);
            if (products && products.length > 0){
                return cb(null, products[0]);
            }
            // to do: do we want to return null!
            cb(null, null);
        });
    }
    this.addProduct = function(Id, cb){
        connection.query('insert into products set ?', Id, function(err, products){
            if (err) return cb(err, null);
            if (products && products.length > 0){
                return cb(null, products[0]);
            }
            // to do: do we want to return null!
            cb(null, null);
        });
    }
    this.updateProduct = function(Id, cb){
        connection.query('UPDATE products SET ? WHERE Id = ?', Id, function(err, products){
            if (err) return cb(err, null);
            if (products && products.length > 0){
                return cb(null, products[0]);
            }
            // to do: do we want to return null!
            cb(null, null);
        });   
    }

    this.deleteProduct = function(Id, cb){
        connection.query('DELETE FROM products WHERE Id = ?', Id, function(err, products){
           if (err) return cb(err, null);
            if (products && products.length > 0){
                return cb(null, products[0]);
            }
            // to do: do we want to return null!
            cb(null, null);
        });   
    }


  //  this.getSales = function(Id, cb, err){
  //       if (err) return cb(err, null);
  //       connection.query('SELECT Id,sale_price, no_sold,product_Id  FROM sales WHERE Id = ?', Id, function(err, categories){
  //           if (categories && categories.length > 0){
  //               return cb(null, categories[0]);
  //           }
  //           // to do: do we want to return null!
  //           cb(null, null);
  //       });   
  //   }
 
  // this.updateSales = function(Id, cb, err){
  //       if (err) return cb(err, null);
  //       connection.query('UPDATE sales SET ? WHERE Id = ?', Id, function(err, categories){
  //           if (categories && categories.length > 0){
  //               return cb(null, categories[0]);
  //           }
  //           // to do: do we want to return null!
  //           cb(null, null);
  //       });   
  //   }

}