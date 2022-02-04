import { Request, Response } from "express";
import { Op } from "sequelize";
import Category from "../models/category.model";
import Product from "../models/product.model";


export default class ProductController {

  static async createProduct(req: Request, res: Response) {
    try {
      
      const { name, description, price, cover } = req.body;

      const slug: string = name.toString().toLowerCase().replace(/\s+/, '-');
      const product = new Product({ ...req.body });
      product.slug  = slug;
      await product.save();

      return res.json({
        success: true,
        data: {
          product
        }
      });

    } catch (error: any) {
      return res.json({
        success: false,
        msg: error.message
      });
    }
  }

  static async updateProduct(req: Request, res: Response) {
    try {
      
      const { id } = req.params;
      const { name, description, price, cover, categoryId } = req.body;

      console.log(req.body);

      let productId: number = 0;

      if (id !== undefined && id !== null) {
        productId = parseInt(id.toString());
      }

      const product = await Product.findByPk(productId);

      if (product === null || product === undefined) {
        return res.json({
          success: false,
          data: {
            product: null
          }
        });
      }

      product.name        = name.toString();
      product.description = description.toString();
      product.price       = parseFloat(price);
      product.cover       = cover;
      product.categoryId  = categoryId;

      await product.save();

      return res.json({
        success: true,
        data: {
          product
        }
      });

    } catch (error: any) {
      return res.json({
        success: false,
        msg: error.message
      });
    }
  }

  static async getByFilter(req: Request, res: Response) {
    try {

      const { name, description, pricemin, pricemax, categories, offset, limit, hasStock } = req.query;

      const filter: any = {};

      if (name !== undefined) {
        filter.name = {
          [ Op.like ]: `%${ name }%`
        };
      }

      if (description !== undefined) {
        filter.description = {
          [ Op.like ]: `%${ description }%`
        };
      }
      
      if (pricemin !== undefined && pricemax !== undefined) {
        const priceMin: string = pricemin?.toString() ?? '0';
        const priceMax: string = pricemin?.toString() ?? '0';

        filter.price = {
          [ Op.gte ]: parseFloat(priceMin),
          [ Op.lte ]: parseFloat(priceMax)
        };
      }

      if (categories !== undefined) {

        let catregorySlugs: string[] = JSON.parse(categories.toString()) || [];
        let _categories = await Category.findAll({
          where: {
            slug: {
              [ Op.in ]: catregorySlugs
            }
          }
        });

        const categoriesId: number[] = _categories.map(cat => cat.id);

        filter.categoryId = {
          [ Op.in ]: categoriesId
        };
      }

      let _offset: number = 0;
      let _limit: number  = 20;

      if (offset !== undefined && limit !== undefined) {
        _offset = parseFloat(offset.toString());
        _limit  = parseFloat(limit.toString());
      }

      const data = await Product.findAndCountAll({
        where: { ...filter },
        offset: _offset,
        limit: _limit
      });

      return res.json({
        success: true,
        data: {
          totalCount: data.count,
          count: data.rows.length,
          products: data.rows
        }
      });
      
    } catch (error: any) {
      return res.json({
        success: false,
        msg: error.message
      });
    }
  }

  static async getById(req: Request, res: Response) {
    try {

      const { id } = req.params;

      const productId = id ?? 0;
      const product = await Product.findByPk(productId);

      return res.json({
        success: true,
        data: {
          product
        }
      });
      
    } catch (error: any) {
      return res.json({
        success: false,
        msg: error.message
      });
    }
  }

  static async getBySlug(req: Request, res: Response) {
    try {

      const { slug } = req.params;

      const product = await Product.findOne({
        where: {
          slug: slug
        }
      });

      return res.json({
        success: true,
        data: {
          product
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