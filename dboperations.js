var config = require('./dbconfig');
const sql = require('mssql');


async function getTeam_members(){
    try{
        let pool = await sql.connect(config);
        let members = await pool.request().query("SELECT * from Team_members");
        return members.recordsets;
    }
    catch (error){
        console.log(error);
    }
}

//for demo table
async function getdemo(){
    try{
        let pool = await sql.connect(config);
        let demodata = await pool.request().query("SELECT * from demo");
        return demodata.recordsets;
    }
    catch (error){
        console.log(error);
    }
}

//for demo table
async function adddemo(demo) {
        try {
            console.log(demo)
            let pool = await sql.connect(config);
            let insertProduct = await pool.request()
                .input("@demoid", sql.Int, demo.id)
                .input("@demoname", sql.NVarChar, demo.Name)
                // .query("INSERT INTO YourTableName (demoid, demoname) VALUES (@demoid, @demoname)");
                .execute("exec Insertdemos");
    
            return insertProduct.recordset;
        }
        catch (err) {
            console.log(err);
        }
}







async function getTeam_member(member_id) {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input("input_parameter", sql.Int, member_id)
            .query("SELECT * FROM Team_members WHERE member_id = @input_parameter");
        return result.recordset;
    } catch (error) {
        console.log(error);
    }
}


async function addTeam_member(member) {
    try {
        let pool = await sql.connect(config);
        let insertProduct = await pool.request()
            .input("member_id", sql.Int, member.id)
            .input("member_name", sql.VarChar, member.name)
            .input("member_dob", sql.Date, member.dob)
            .input("member_city", sql.VarChar, member.city)
            .execute("InsertTeam_members");

        return insertProduct.recordset;
    } catch (err) {
        console.log(err);
    }
}



module.exports = {
    getTeam_members : getTeam_members,
    getTeam_member : getTeam_member,
    adddemo : adddemo,
    getdemo : getdemo,
    addTeam_member : addTeam_member
}