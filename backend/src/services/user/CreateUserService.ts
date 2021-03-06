import prismaClient from '../../prisma'
import {hash} from 'bcryptjs'

interface UserRequest{
  name: string;
  email: string;
  password: string;
}

// Criar usuario
class CreateUserService{
  async execute({ name, email, password }: UserRequest){

    // verificar se ele enviou um email
    if(!email){
      throw new Error("Email incorrect")
    }

    // verificar se ele enviou um email
    if(!name){
      throw new Error("Name incorrect")
    }

    //Verificar se esse email já está cadastrado na plataforma
    const userAlreadyExists = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })
    // se existe lança um erro
    if(userAlreadyExists){
      throw new Error("User already exists")
    }

    // hash da senha
    const passworddHash = await hash(password,8)

    const user = await prismaClient.user.create({
      data:{
        name: name,
        email: email,
        password: passworddHash,
      },
      select:{
        id: true,
        name: true,       
        email: true,
      }
    })


    return user;
  }
}

export { CreateUserService }