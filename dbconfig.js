// const config = {
//     user : "sa",
//     password : "sa_123",
//     server: "DESKTOP-4CSS7FV",
//     database:"Knowledge_Management_System"
//     ,
//     options:{
//         trustedConnection: true,
//         enableArithPort : true,
//         instancename : "DESKTOP-4CSS7FV"
//     }
// //     // port:1433
//     user: 'sa',
//     password: 'sa_123',
//     server: 'DESKTOP-4CSS7FV',
//     driver: 'tedious',
//     database: 'Knowledge_Management_System',
 
//     options: {
//         instanceName: 'sql'
//     }
// }

// var config = {
//     userName : "sa",
//     password : "sa_123",
//     port: 1433,
//     server: "DESKTOP-4CSS7FV",
//     // driver: 'tedious',
//     database: "Knowledge_Management_System",
//     options: {
        
//         encrypt: false,
//         trustServerCertificate: true
        
//     }
// };
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

module.exports = config;