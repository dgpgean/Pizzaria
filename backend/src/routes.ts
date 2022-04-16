import { Router } from 'express';


import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController'

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';

import { CreateOrderController } from './controllers/order/CreateOrderController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { ListOrdersController } from './controllers/order/ListOrdersController';
import { FinishOrderController } from './controllers/order/FinishOrderController';

import {AddItemController} from './controllers/order/AddItemController';
import {DetailsOrderController} from './controllers/order/DetailsOrderController';
import {RemoveItemController} from './controllers/order/RemoveItemController';


//----- MIDDLEWARES------------------------
import {isAuthenticated} from './middlewares/isAuthenticated' // login usuário
import {upload_images} from './middlewares/imagesUpload'// upload de imagem



const router = Router();


//----- ROTAS USER ------------------------
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me',isAuthenticated, new DetailUserController().handle);

//----- ROTAS CATEGORY ------------------------
router.post('/category',isAuthenticated, new CreateCategoryController().handle);
router.get('/category',isAuthenticated, new ListCategoryController().handle);

//----- ROTAS PRODUCTS ------------------------
router.post('/product',isAuthenticated,upload_images.single('file'), new CreateProductController().handle);

router.get('/category/product',isAuthenticated, new ListByCategoryController().handle);

//----- ROTAS ORDER ------------------------
router.get('/order',isAuthenticated, new ListOrdersController().handle);
router.post('/order',isAuthenticated, new CreateOrderController().handle);
router.delete('/order',isAuthenticated, new RemoveOrderController().handle);
router.put('/order/send',isAuthenticated, new SendOrderController().handle);
router.put('/order/finish',isAuthenticated, new FinishOrderController().handle);

router.post('/order/item',isAuthenticated, new AddItemController().handle);
router.get('/order/item',isAuthenticated, new DetailsOrderController().handle);
router.delete('/order/item',isAuthenticated, new RemoveItemController().handle);

export { router }; 