import prismaClient from "../../prisma";
interface OrderRequest{
  order_id:string;
}

class DetailsOrderService{
  async execute({order_id}:OrderRequest){
    const order = await prismaClient.item.findMany({
      where:{
        order_id
      },
      include:{
        product:true,
        order:true
      }
    })

    return order;
  }
}

export {DetailsOrderService}