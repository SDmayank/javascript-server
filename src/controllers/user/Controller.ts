import { Request, Response, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import SystemResponse from '../../libs/SystemResponse';
import IRequest from '../../libs/routes/IRequest';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import config from '../../config/configuration';

class UserController {
  static instance: UserController;
  static userRepository: UserRepository;
  userRepository = new UserRepository();
  static getInstance = () => {
    if (UserController.instance) {
      return UserController.instance;
    }
    UserController.instance = new UserController();
    return UserController.instance;
  }
  me = (req: IRequest, res: Response, next: NextFunction) => {
    res.send(req.user);
  }
  login = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const user = await this.userRepository.findone({ email, deletedAt: undefined });
      console.log('user', user);
      if (!user) {
        next({
          error: 'User Not Found',
          status: 404
        });
      }
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      console.log(isPasswordCorrect);
      if (!isPasswordCorrect) {
        return next({
          error: 'Password does not match',
          status: 422
        });
      }
      const token = jwt.sign({ email: user.email, originalid: user.originalid, role: user.role }, config.secretKey, {expiresIn: '15m'});
      console.log(token);
      res.status(200).send({ message: 'Login Successfully', data: token, status: 'success' });
    }
    catch (err) {
      next({
        error: 'Login Unsuccessfully',
        status: 422
      });
    }
  }
}
export default UserController.getInstance();
