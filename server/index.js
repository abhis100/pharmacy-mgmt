const express = require("express");
const app = express();
const pool = require("./db")

app.use(express.json())

//Routes
//select a particular record
app.get("/employee/:id",async(req,res)=>{
    const {id} = req.params;
    try{
        const record = await pool.query(
            "select * from employee where e_id = $1",[id]);
        res.json(record.rows[0]);
    }catch(err){
        console.log(err.message)
    }
})

//select all
app.get("/employee",async(req,res)=>{
    try{
        const all_records = await pool.query(
            "Select * from employee");
        res.json(all_records.rows);
    }catch(err){
        console.log(err.message);
    }
});

//insert
app.post("/employee",async(req,res)=>{
    try{
        const {e_id,fname,initials,lname,address,phone_no} = req.body
        const new_entry = await pool.query(
            "insert into employee (e_id,fname,initials,lname,address,phone_no) values ($1,$2,$3,$4,$5,$6) RETURNING *",
            [e_id,fname,initials,lname,address,phone_no]
        );
        res.json(new_entry.rows[0]);
    } catch(err){
      console.log(err.message)
    }
});

//update
app.put("/employee/:id",async(req,res)=>{
    try{
        const {id} = req.params
        const {e_id,fname,initials,lname,address,phone_no} = req.body
        const update_record = await pool.query(
            "update employee set initials = $1 where e_id = $2",[initials,id]);
            res.json("update successful");   
    }catch(err){ 
        console.log(err.message);
    }
})

//delete
app.delete("/employee/:id",async(req,res)=>{
    try{
        const {id} = req.params
        const deleteTodo = await pool.query(
            "delete from employee where e_id = $1",[id]);
        res.json("delete successful")
    }catch(err){
        console.log(err.message)
    }
})
app.listen(5003,()=>{
    console.log("server is listening on port 5003")
});
