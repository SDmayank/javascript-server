import { Router } from 'express';
import { default as UserController } from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import { validation } from './validation';
import authMiddleware from '../../libs/authMiddleware';

const userRouter = Router();
userRouter.route('/me')
  .get(authMiddleware('getUsers', 'read'), UserController.me);
userRouter.route('/login')
  .post(authMiddleware('getUsers', 'read'), UserController.login);
export default userRouter;
