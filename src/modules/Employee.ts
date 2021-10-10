import { IEmployee } from "../interface/IEmployee";
import { IEmployeeOrgApp } from "../interface/IEmployeeOrgApp";

export class EmployeeOrgApp implements IEmployeeOrgApp {
  ceo: IEmployee;
  constructor(ceo: IEmployee) {
    this.ceo = ceo;
  }

  list(): IEmployee {
    return this.ceo;
  }

  move(employeeID: number, supervisorID: number): void {
    let oldSupervisor:IEmployee;
    let newSupervisor:IEmployee;
    let employee:IEmployee;
  }

  undo(): void {
    throw new Error("Method not implemented.");
  }

  redo(): void {
    throw new Error("Method not implemented.");
  }
}
