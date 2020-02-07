import { Router } from 'express';
import { default as UserController } from './Controller';
import validationHandler  from '../../libs/routes/validationHandler';
import { validation } from './validation';
import authMiddleware from '../../libs/authMiddleware';
const userRouter = Router();

userRouter.route('/')
.get( validationHandler(validation.get), UserController.create)
//.post( authMiddleware('getUsers' , 'read'), validationHandler(validation.create), UserController.list)
.post( validationHandler(validation.create),UserController.create)
.delete( validationHandler(validation.delete), UserController.delete)
.put( validationHandler(validation.update), UserController.update);
userRouter.delete('/:id', validationHandler(validation.delete), UserController.delete);
export default userRouter;
