import express from "express";
import bodyParser  from "body-parser";
import employeesData from "./routes/employees.js";

const app = express();

app.use(bodyParser.json());
const PORT = 3001;
app.listen(PORT, ()=> {
  console.log(`App started on port ${PORT}`);
});

app.get("/", (req, resp) => {
  resp.status(200).json({
    data: {
      message: "Hello Employees App Users!"
    }
  })
  .end();
});

app.use(employeesData);