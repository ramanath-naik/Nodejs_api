// var sql = require('mssql');

// var config = {
//         server: "DESKTOP-4CSS7FV",// You can use 'localhost\\instance' to connect to named instance 
//         database: "Lnowledge_Management_System",
//         user: "sa",
//         password: "sa_123",
//         port: 1433
//     };

// function getdata() {
//     var conn = new sql.Connection(config);
//     var req = new sql.Request(conn);

//     conn.connect(function (err) {
//         If (err) {
//             console.log(err);
//             return;
//         }
    
//         req.query("select * From" ,function (err,recordset)  {
//         If (err) {
//             console.log(err);
//             return;
//         }
//         else {
//             console.log(recordset);
//         }
        
//         conn.close();


    
//         });

//     });

//     }

//     getdata();

var sql = require('mssql');

var config = {
    server: "DESKTOP-4CSS7FV", // You can use 'localhost\\instance' to connect to a named instance
    database: "Knowledge_Management_System",
    user: "sa",
    password: "sa_123",
    port: 1433,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

function getData() {
    var conn = new sql.ConnectionPool(config);
    var req = new sql.Request(conn);

    conn.connect(function (err) {
        if (err) {
            console.log(err);
            return;
        }

        req.query("SELECT * FROM Team_members", function (err, recordset) {
            if (err) {
                console.log(err);
                return;
            } 
            else {
                console.log(recordset);
            }

            conn.close();
        });
    });
}

getData();
