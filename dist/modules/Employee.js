"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeOrgApp = void 0;
class EmployeeOrgApp {
    constructor(ceo) {
        this.ceo = ceo;
    }
    list() {
        return this.ceo;
    }
    move(employeeID, supervisorID) {
        let oldSupervisor;
        let newSupervisor;
        let employee;
    }
    undo() {
        throw new Error("Method not implemented.");
    }
    redo() {
        throw new Error("Method not implemented.");
    }
}
exports.EmployeeOrgApp = EmployeeOrgApp;
//# sourceMappingURL=Employee.js.map