import { Request, Response } from "express";
import Category from "../models/category.model";


class CategoryController {

  static async getCategories(req: Request, res: Response) {
    try {
      
      const categories = await Category.findAll({}) ?? [];

      return res.json({
        success: true,
        data: {
          categories
        }
      });

    } catch (error: any) {
      return res.json({
        success: false,
        msg: error.message
      });
    }
  }

}

export default CategoryController;