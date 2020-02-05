import { Router } from 'express';
import { default as TraineeController }from './Controller';
import validationHandler  from '../../libs/routes/validationHandler';
import { validation } from './validation';
import authMiddleware from '../../libs/authMiddleware';
const traineeRouter = Router();

traineeRouter.route('/')
.get(validationHandler(validation.get), TraineeController.create)
.post( validationHandler(validation.create), TraineeController.list)
.delete(validationHandler(validation.delete),TraineeController.delete)
.put(validationHandler(validation.update), TraineeController.update);
traineeRouter.delete('/:id', validationHandler(validation.delete), TraineeController.delete);
export default traineeRouter;
