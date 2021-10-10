import { IEmployee } from "./../interface/IEmployee";
import express from "express";
import { CommonService } from "../service";

const cs = new CommonService();

export async function getCeo(
  request: express.Request,
  response: express.Response,
  next: any
) {
  let list: any[] = await cs.getCeo();

  let ceo: IEmployee = cs.getEmployee(1, list);
  request.body.ceo = ceo;
  next();
}
