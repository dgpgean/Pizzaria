import { Request,Response } from "express";
import { CreateOrderService } from "../../services/orders/CreateOrderService";


class CreateOrderController{
  async handle(req:Request,res:Response){
    const {table,name} = req.body;
    const createOrderServide  = new CreateOrderService();
    const order = await createOrderServide.execute({name,table});


    return res.json(order);
  }
}


export{CreateOrderController};