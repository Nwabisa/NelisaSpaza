module.exports = function (connection) {
    this.getCategory = function(Id, cb){
        connection.query('SELECT * FROM categories WHERE Id = ?', Id, function(err, categories){
            if (err) return cb(err, null);
            if (categories && categories.length > 0){
                return cb(null, categories[0]);
            }
            // to do: do we want to return null!
            cb(null, null);
        });   
    }

     this.addCategory = function(Id, cb){
        connection.query('insert into categories set ?', Id, function(err, categories){
            if (err) return cb(err, null);
            if (categories && categories.length > 0){
                return cb(null, categories[0]);
            }
            // to do: do we want to return null!
            cb(null, null);
        });   
    }


     this.updateCategory = function(Id, cb){
        connection.query('UPDATE categories SET ? WHERE Id = ?', Id, function(err, categories){
             if (err) return cb(err, null);
            if (categories && categories.length > 0){
                return cb(null, categories[0]);
            }
            // to do: do we want to return null!
            cb(null, null);
        });   
    }


     this.deleteCategory = function(Id, cb){
        connection.query('DELETE FROM categories WHERE id = ?', Id, function(err, categories){
            if (err) return cb(err, null);
            if (categories && categories.length > 0){
                return cb(null, categories[0]);
            }
            // to do: do we want to return null!
            cb(null, null);
        });   
    }
}