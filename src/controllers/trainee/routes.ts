import { Router } from 'express';
import { default as TraineeController } from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import { validation } from './validation';
import authMiddleware from '../../libs/authMiddleware';
const traineeRouter = Router();

traineeRouter.route('/')
  .get(authMiddleware('getUsers', 'write'),validationHandler(validation.get), TraineeController.list)
  .post(authMiddleware('getUsers', 'read'), validationHandler(validation.create), TraineeController.create)
  .delete(authMiddleware('getUsers', 'delete'), validationHandler(validation.delete), TraineeController.delete)
  .put(authMiddleware('getUsers', 'read'), validationHandler(validation.update), TraineeController.update);
traineeRouter.delete('/:id', authMiddleware('getUsers', 'read'), validationHandler(validation.delete), TraineeController.delete);
export default traineeRouter;
