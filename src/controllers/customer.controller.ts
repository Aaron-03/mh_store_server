import { Request, Response } from "express";
import Customer from "../models/customer.model";
import { CustomerService } from "../services/customer.service";



export default class CustomerController {

  static async createUser(req: Request, res: Response) {
    try {
      
      const result = await CustomerService.create(req, res);

      if (!result) {
        return res.json({
          success: false,
          data: null
        });
      }

      res.json({
        success: true,
        data: {
          customer: result
        }
      });

    } catch (error) {
      console.log(error);
    }
  }

}