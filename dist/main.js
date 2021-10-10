"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const Employee_1 = require("./modules/Employee");
const middleware_1 = require("./middleware");
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use(body_parser_1.default.json());
const port = 5000;
app.get("/", middleware_1.getCeo, (req, res) => {
    res.send(req.body.ceo);
});
app.post("/move", middleware_1.getCeo, (req, res) => {
    let employeeOrg = new Employee_1.EmployeeOrgApp(req.body.ceo);
    let employeeID = req.body["employeeID"] || null;
    let supervisorID = req.body["supervisorID"] || null;
    if (employeeID && supervisorID) {
        let output = employeeOrg.move(req.body["employeeID"], req.body["supervisorID"]);
        res.send(output);
    }
    else {
        res.status(400).send("Values Missing");
    }
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=main.js.map