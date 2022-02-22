const knex = require("../config/db");


getAllData = (req, res) =>{
    knex.select("*").from("crud_knex")
    .then((data)=>{
        if (data == 0){
            res.send({"status":"database or tables empty..."})
        }
        else{
        res.send({'data':data, 'status': 'success', 'count': data.length})
        }
    })  
    .catch((err)=>{
        res.send({'status': 'error', 'message': err})
    })
}
getById = (req,res) => {
    knex
    .select("*")
    .from("crud_knex")
    .where({id:req.params.id})
    .then((data)=>{
        // const token = genratetoken()
        res.send({ "status":data})
    })
    .catch((err)=>{
        res.send(err)
    })


}

insertData = (req,res) => {
    knex("crud_knex")
    .insert(req.body)
    .then((data)=>{
        res.send({"status" : "success","data":req.body})
    })
    .catch((err)=>{
        res.send({"statu":err})
    })
}

updateDataById = (req,res) => {
    knex("crud_knex")
    .where("id",req.params.id)
    .update(req.body)
    .then((data)=>{
        if (data == 0){
            res.send({"status":`id ${res.params.id} not found`})
        }else{
        res.send({"status":"updated successfully"})
        }
    })
    .catch((err)=>{
        res.send({"status":"id not found"})
    })
}

deleteById = (req,res) => {
    knex("crud_knex")
    .where("id",req.params.id)
    .del()
    .then((data)=>{      
        if (data==0){
        res.send({"status":"id not found"})
        }
        else{
            res.send({"status":`id ${req.params.id} deleted successfully`})
        }
    })
    .catch((err)=>{
        res.send({"status":`id  ${req.params.id} not found  `})
    })
}

module.exports = {getAllData,insertData,updateDataById,deleteById,getById}
