import  prismaClient  from "../../prisma";

interface ProductRerquest{
  name:string;
  price:string;
  description:string;
  banner:string;
  category_id:string;
}

class CreateProductService{
  async execute({name,price,description,banner,category_id}:ProductRerquest){
    
    const product = await prismaClient.product.create({
      data:{
        name,
        price,
        description,
        banner,
        category_id
      }
    })
    return product;
  }
}

export{CreateProductService};