const sql = require('mssql');

async function main() {
    try {
        // Configure the SQL Server connection
        const config = {
            user: 'ds',
            password: '<password>',
            server: '<server>',
            database: '<database>'
        };

        // Establish a connection to the database
        const pool = await sql.connect(config);

        console.log('Connected to the database.');

    } catch (err) {
        console.error(err);
    } finally {
        // Close the database connection
        sql.close();
    }
}

main();