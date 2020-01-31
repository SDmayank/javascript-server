import { Router } from 'express';
import TraineeController from './Controller';

const traineeRouter = Router();

traineeRouter.route('/trainee' )
.get( TraineeController.list )
.post( TraineeController.create )
.put(  TraineeController.update )
.delete( TraineeController.delete );

export default traineeRouter;