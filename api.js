// var DB = require('./dboperations');
var Team_members = require('./Team_members');

var demo = require('./demo');//for demo table

var dboperations = require('./dboperations');


var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use('/api',router);

router.use((request,response,next)=>{
    console.log("middleware");
    next();
})



//for demo table
router.route('/demo').get((request,response)=>{
    dboperations.getdemo().then(result =>{
        // console.log(result);
        response.json(result[0]);
    })

})

//for demo table
router.route('/demo').post((request,response)=>{
    
   
        let dem = {...request.body}
        // response.send(request.body)
    
        dboperations.adddemo(dem).then(result =>{
            response.status(201).json(result);
        })
    })





router.route('/Team_members').get((request,response)=>{
    dboperations.getTeam_members().then(result =>{
        // console.log(result);
        response.json(result[0]);
    })    
})

//return particular id from form the table
router.route('/Team_members/:id').get((request,response)=>{
    dboperations.getTeam_member(request.params.id).then(result =>{
        response.json(result[0]);
    })

})

router.route('/Team_members').post((request,response)=>{
    let member = {...request.body}

    dboperations.addTeam_member(member).then(result =>{
        response.status(201).json(result);
    })
})


var port = process.env.PORT || 8090;
app.listen(port);
console.log("Team_members API running at "+port);


