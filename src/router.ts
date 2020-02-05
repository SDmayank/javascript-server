import { Router } from 'express';
import traineeRouter  from './controllers/trainee /routes';

const router: Router = Router();
router.use ('/trainee', traineeRouter);

export default router;