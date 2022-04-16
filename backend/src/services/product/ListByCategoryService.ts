import prismaClient from "../../prisma"

interface ProductRequest{
  category_id:string;
}
class ListBycategoryService{
  async execute({category_id}:ProductRequest){

    const findByCAtegory = await prismaClient.product.findMany({
      where:{
        category_id
      }
    })

    return findByCAtegory;
  }
}

export{ListBycategoryService}