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

this.searchProduct = function(Id, cb){
        connection.query('SELECT Id,product_name, category_name FROM (SELECT  products.Id,products.product_name, categories.category_name, products.Category_Id FROM products, categories  where products.Category_Id = categories.Id) AS prods_cats WHERE product_name LIKE ? OR category_name LIKE ?', Id, function(err, products){
           if (err) return cb(err, null);
           connection.query('SELECT Id, category_name FROM categories', Id, function(error, categories) {
                if (error) return next(error);
            if (products && products.length > 0){
                return cb(null, products[0]);
            }
            // to do: do we want to return null!
            cb(null, null);
        });   
    });
    };
}