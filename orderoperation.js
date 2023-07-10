var config = require('./orderconfig');
var sql = require('mssql');




async function getOrders() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from orderinfo");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getOrder(orderId) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.Int, orderId)
            .query("SELECT * from orderinfo where orderid = @input_parameter");
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}


async function addOrder(order) {

    try {
        let pool = await sql.connect(config);
        let insertProduct = await pool.request()
            .input('orderid', sql.Int, order.orderid)
            .input('ordername', sql.VarChar, order.ordername)
            .execute('InsertOrders');
            // .query("INSERT INTO orderinfo (orderid, ordername) VALUES (@orderid, @ordername)");
        return insertProduct.recordsets;
    }
    catch (err) {
        console.log(err);
    }

 }






module.exports = {
    getOrders: getOrders,
    getOrder : getOrder,
    addOrder : addOrder
}