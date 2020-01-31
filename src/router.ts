import { Router } from 'express';
import { traineeRouter } from './controllers/trainee ';

const mainRouter = Router();
mainRouter.use ('/', traineeRouter);

export default mainRouter;