import { Router } from 'express';
import { default as UserController } from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import { validation } from './validation';
import authMiddleware from '../../libs/authMiddleware';
const userRouter = Router();

userRouter.route('/')
    .get(authMiddleware('getUsers', 'read'), validationHandler(validation.get), UserController.create)
    .post(authMiddleware('getUsers', 'read'), validationHandler(validation.create), UserController.list)
    .put(validationHandler(validation.update), UserController.update);
userRouter.delete('/:id', authMiddleware('getUsers', 'read'), validationHandler(validation.delete), UserController.delete);
export default userRouter;