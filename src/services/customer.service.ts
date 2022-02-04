import { Request, Response } from "express";
import Customer from "../models/customer.model";


export class CustomerService {
  

  static async create(req: Request, res: Response) {
    const customer = new Customer({ ...req.body });
    const result   = await customer.save();
    return result;
  }

  static async read(req: Request, res: Response) {
    const customers = await Customer.findAndCountAll({});
    return customers;
  }

  static async update(req: Request, res: Response) {
    const { customerId } = req.body;
    let customer = await Customer.findByPk(customerId);
    await customer?.update({
      
    });
  }


}