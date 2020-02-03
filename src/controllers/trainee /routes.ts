import { Router } from 'express';
import TraineeController from './Controller';

const traineeRouter: Router = Router();

traineeRouter.route('/trainee' )
.get( TraineeController.list )
.post( TraineeController.create )
.put(  TraineeController.update ),

traineeRouter.route('/trainee/:id' )
.delete( TraineeController.delete );

export default traineeRouter;