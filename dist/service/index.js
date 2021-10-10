"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonService = void 0;
const axios_1 = __importDefault(require("axios"));
class CommonService {
    constructor() { }
    async getCeo() {
        return new Promise((res, err) => {
            axios_1.default
                .get("http://localhost:3000/employees")
                .then((x) => {
                res(x.data);
            })
                .catch((e) => {
                err(e);
            });
        });
    }
    getEmployee(employeeID, list) {
        let employee = list.filter((x) => x.id === employeeID)[0];
        let value = {
            uniqueId: employee.id,
            name: employee.name,
            subordinates: employee.subordinatesId.map((x) => this.getEmployee(x, list)),
        };
        return value;
    }
}
exports.CommonService = CommonService;
//# sourceMappingURL=index.js.map