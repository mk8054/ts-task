import bodyParser from "body-parser";
import express from "express";
import { EmployeeOrgApp } from "./modules/Employee";
import { getCeo } from "./middleware";

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

const port = 5000;

app.get("/", getCeo, (req: express.Request, res: express.Response) => {
  res.send(req.body.ceo);
});
app.post("/move", getCeo, (req: express.Request, res: express.Response) => {
  let employeeOrg = new EmployeeOrgApp(req.body.ceo);
  let employeeID = req.body["employeeID"] || null;
  let supervisorID = req.body["supervisorID"] || null;
  if (employeeID && supervisorID) {
    let output = employeeOrg.move(
      req.body["employeeID"],
      req.body["supervisorID"]
    );
    res.send(output);
  } else {
    res.status(400).send("Values Missing");
  }
});
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
