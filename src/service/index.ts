import { IEmployee } from "./../interface/IEmployee";
import axios from "axios";
export class CommonService {
  constructor() {}
  async getCeo(): Promise<any> {
    return new Promise((res, err) => {
      axios
        .get("http://localhost:3000/employees")
        .then((x) => {
          res(x.data);
        })
        .catch((e) => {
          err(e);
        });
    });
  }

  getEmployee(employeeID: number, list: any[]): IEmployee {
    let employee = list.filter((x) => x.id === employeeID)[0];
    let value: IEmployee = {
      uniqueId: employee.id,
      name: employee.name,
      subordinates: employee.subordinatesId.map((x: any) =>
        this.getEmployee(x, list)
      ),
    };
    return value;
  }
}
