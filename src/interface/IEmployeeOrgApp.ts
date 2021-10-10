import { IEmployee } from "./IEmployee";

export interface IEmployeeOrgApp {
  ceo: IEmployee;
  list(): IEmployee;
  undo(): void;
  move(employeeID: number, supervisorID: number): void;
  redo(): void;
}
