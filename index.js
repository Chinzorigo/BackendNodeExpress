const sql = require('mssql')

const config = {
    database: 'reactproject20230205',
    server: 'localhost',
    port: 1433,
    password: 'Hello123$',
    user: 'sa',
    connectionTimeout: 5000,
    options: {
        encrypt: false,
    },
}
const pool = await sql.connect(config);
// database connection


 // get data
/* sql.connect(config).then(pool => {
    // Query
    return pool.request()
        .query('select * from users', function(err, recordset){ 
            if(err){
                console.log(err);
            }
            else{
                console.log(recordset) 
            }
        })
}); */


// insert data
sql.connect(config).then(pool => {
    // Query
    console.log("INSERT");
    return pool.request()
        .query("INSERT INTO users (Id, FirstName, Lastname, Age, Sex, Email, Phone, PhysicalAddress) VALUES (15, 'Chinzorig', 'Oasdfs', 30, 'M', 'chinzorig.o@gmail.com', 99112233, 'Khan-Uul district')", function(err, recordset){ 
            if(err){
                console.log(err);
            }
            else{
                console.log(recordset) 
            }
        })
});

// update data
/* sql.connect(config).then(pool => {
    // Query
    console.log("UPDATE");
    return pool.request()
        .query("UPDATE users SET Ner = 'Update' WHERE Code = 1", function(err, recordset){ 
            if(err){
                console.log(err);
            }
            else{
                console.log(recordset) 
            }
        })
}); */

// delete data
/* sql.connect(config).then(pool => {
    // Query
    console.log("DELETE");
    return pool.request()
        .query("DELETE FROM users WHERE Code = 1", function(err, recordset){ 
            if(err){
                console.log(err);
            }
            else{
                console.log(recordset) 
            }
        })
}); */