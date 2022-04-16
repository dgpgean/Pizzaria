import { Response,Request } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService"; '../../services/category/ListCategoryService'

class ListCategoryController{
  async handle(req:Request,res:Response){
    const listCategoryServices = new ListCategoryService();
    const categories = await listCategoryServices.execute();

    return res.json(categories);
  }
}


export{ListCategoryController}