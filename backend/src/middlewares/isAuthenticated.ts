import { Request, Response, NextFunction } from "express";
import {verify} from 'jsonwebtoken'

interface Payload{
  sub:string
}
export function isAuthenticated(req:Request, res:Response, next:NextFunction){
  //receber o token
  const authToken = req.headers.authorization;
  
  if(!authToken){
    return res.status(401).end()
  }

  //tirando a palavra "Bearer" do token
  const [,token] = authToken.split(" ")

  try {
    //validar token
    const {sub} = verify(token, process.env.JWT_SECRET) as Payload
    // recuperar id do usuario dentro do token e colocar em req.user_id
    req.user_id = sub;
    return next();
  } catch (error) {
    res.status(401).end()
  }
}