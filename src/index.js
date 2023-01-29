import express from "express";
const app = express();
import cors from "cors";
import { connection } from "./Database.js";

//middleware
app.use(cors());
app.use(express.json()); //req.body


//create a todo

//get the details of the todo daily agenda from persons table
app.get("/agenda", (req, res) => {
  connection.query("SELECT * FROM persons", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.post('/details',(req,res)=>{
  const {id,description} = req.body;
  connection.query("INSERT INTO PERSONS (Id,description) VALUES (?,?)",[id,description],(err,result)=>{
    if (err) {
      console.log(err);
    } else {
      res.send("Successful");
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const {id} = req.params;
  connection.query("DELETE FROM persons WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(`Deleted the row with the id ${id}`);
    }
  });
});

app.put("/agenda/:id",(req,res)=>{
  const {id} = req.params;
  const {description} = req.body;
  connection.query(`update persons
  SET description = ? WHERE ID = ?;`,[description,id],(err,result)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send("Updated the description successfully");
    }
  })
})

app.listen(5000, () => {
  console.log("server has started on port 5000");
});