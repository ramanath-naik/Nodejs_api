var Order= require('./orderclass');
var orderoperation = require('./orderoperation');
var sql = require('mssql');
var config = require('./orderconfig');

var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/orderapi', router);
app.use(express.json());


router.use((request,response,next)=>{
   console.log('middleware');
   next();
})

router.route('/Order').get((request,response)=>{

    orderoperation.getOrders().then(result => {
       response.json(result[0]);
    })

})

router.route('/Order/:id').get((request,response)=>{

    orderoperation.getOrder(request.params.id).then(result => {
       response.json(result[0]);
    })

})

app.post('/orderapi/Order',(req,res)=>{
    const data = req.body;

    sql.connect(config).then(pool=>{
        const request = pool.request();
        // Set up the SQL statement to insert data into the table
        const query = `INSERT INTO orderinfo (orderid, ordername) VALUES (@orderid, @ordername)`;
        
        request.input('orderid', sql.Int, data.orderid);
        request.input('ordername', sql.NVarChar, data.ordername);
        return request.query(query);
    })
    .then(() => {
        res.status(201).json({ message: 'Data added successfully' });
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An error occurred' });
    });
});

// router.route('/Order').post((request,response)=>{

//     let order1 = {...request.body}
//     response.send(...request.body)


//     orderoperation.addOrder(order1).then(result => {
//        response.status(201).json(result[0]);
//     })

// })

// app.post('/orderapi/Order', async (req, res) => {
//     try {
//       const { orderid, ordername } = req.body;
  
//       await sql.connect(config);
  
//       const query = "INSERT INTO orderinfo (orderid, ordername) VALUES (@orderid, @ordername)";
//       const result = await sql.query(query, {
//         orderid,
//         ordername,
//       });
  
//       res.status(201).json({ message: 'Order inserted successfully!' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Error occurred while processing the request.' });
//     } finally {
//       sql.close();
//     }
//   });

// app.post('/post',(req,res)=>{
//     const orderid= req.body.id;
//     const ordername=req.body.name;
  
//     config.query('insert into orderinfo values(?,?)',[orderid,ordername],(err,result)=>{
//         config.connect((err)=>{
//             if(err)
//             {
//                 console.log(err)
//             }else{
//                 res.send("posted")
//             }
//         })
//     })
// })




var port = process.env.PORT || 3000;
app.listen(port);
console.log('Order API is runnning at ' + port);