import express from "express";
import mysql from 'mysql';

const PER_PAGE = 100;
const router = express.Router();
const connection = mysql.createConnection({
  database: "employees",
  user: "root",
  host: "localhost",
  password: "",
  pool: 15
});

connection.connect((err) => {
  if(err){
    console.log(`Error in connecting to Database: ${err.stack}`)
  }else{
    console.log("DB Connected Successfully!");
  }
});

router.get("/employees", (req, resp) => {
  let perPage = req.query.perPage || PER_PAGE;
  console.log(perPage)

  let page = req.query.page;
  if(page == null || page == undefined){
    page = 1;
  }
  let offset = (parseInt(page)-1) * parseInt(perPage);

  connection.query(`select * from employees limit ${perPage} OFFSET ${offset}`, function(error, result, fields){
    if(error){
      resp.status(500).json({error: error.stack});
    }else if(result.length == 0){
      resp.status(404).json({error: "Employee Details Not Found!"});
    }else{
      resp.status(200).json({
        data: {
          employees: result,
          currentPage: page
        }
      }).end();
    }
  })
});

router.post("/employees", (req, resp) =>{
  let params = req.body;
  connection.query(`insert into employees (first_name, last_name, gender, hire_date, birth_date) values('${params.first_name}', '${params.last_name}', '${params.gender}', '${params.hire_date}', '${params.birth_date}')`, (error, result, fields) => {
    if(error){
      resp.status(500).json({error: error.stack});
    }else{
      resp.status(201).json({
        data: {
          employee: {emp_no: result.insertId, ...params}
        }
      }).end()
    }
  });
});

router.get("/employees/:emp_no", (req, resp) =>{
  let params = req.params;
  connection.query(`select * from employees where emp_no = ${params.emp_no} limit 1`, (error, result, fields) => {
    if(error){
      resp.status(500).json({error: error.stack});
    }else if(result.length == 0){
      resp.status(404).json({error: "Employee Details Not Found!"});
    }else{
      resp.status(200).json({
        data: {
          employee: result[0]
        }
      }).end()
    }
  });
});

router.put("/employees/:emp_no", (req, resp) =>{
  let params = req.body;
  connection.query(`update employees SET first_name = '${params.first_name}', last_name = '${params.last_name}', gender = '${params.gender}', hire_date = '${params.hire_date}', birth_date = '${params.birth_date}' where emp_no = ${req.params.emp_no}`, (error, result, fields) => {
    if(error){
      resp.status(500).json({error: error.stack});
    }else{
      resp.status(200).json({
        data: {
          employee: {emp_no: req.params.emp_no, ...params}
        }
      }).end()
    }
  });
});

router.delete("/employees/:emp_no", (req, resp) =>{
  let params = req.params;
  connection.query(`delete from employees where emp_no = ${params.emp_no}`, (error, result, fields) => {
    if(error){
      resp.status(500).json({error: error.stack});
    }else{
      resp.status(200).json({
        data: {
          message: "Employee Deleted Successfully!"
        }
      }).end()
    }
  });
})
export default router;