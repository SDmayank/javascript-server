import { Router } from 'express';
import { traineeRouter } from './controllers/trainee ';

const router: Router = Router();
router.use ('/', traineeRouter);

export default router;