const pool =require('../../db');
const queries = require('./queries');
const getdata = (req,res)=>{
    pool.query(queries.getdata,(error,results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};
const getDataById =(req,res)=>{
    const id=parseInt(req.params.id);
    pool.query(queries.getDataById,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};
const addData=(req,res)=>{
    const{id,name,sem}=req.body;
    // check if id exist
    pool.query(queries.checkIdExists,[id],(error,results)=>{
        if(results.rows.length){
            res.send("id already exist");
        }
    pool.query(queries.addData,[id,name,sem],(error,results)=>{
        if(error) throw error;
        res.status(201).send("student created successfully");
    }
    );
    });
};

const removeData = (req,res)=>{
    const id= parseInt(req.params.id);
    pool.query(queries.checkIdExists,[id],(error,results)=>{
        const noDataFound =!results.rows.length;
        if(noDataFound){
        res.send("student does not exist in the database");
        }
        
    pool.query(queries.removeData,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).send("student removed sucessfully");
    })
    });
};
const updateData = (req,res)=>{
    
        const{sem,name,id}=req.body;
    pool.query(queries.updateData,[sem,name,id],(error,results)=>{
        if(error) throw error;
        res.status(200).send("student updated sucessfully");
    })
    };


module.exports = {
    getdata,
    getDataById,
    addData,
    removeData,
    updateData,
};