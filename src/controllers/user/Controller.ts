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
  create = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
      console.log('::::::::Create Trainee USER:::::::::::::::');
      const { email, name, address, hobbies, dob, mobileNumber, role, password } = req.body;
      bcrypt.hash(password, 10, (err, hash) => {
        this.userRepository.create({
          email, name, address, dob, mobileNumber, hobbies, role, password: hash
        }, req.user._id)
          .then(user => {
            return SystemResponse.success(res, user, 'trainee added sucessfully');
          }).catch(error => {
            throw error;
          });
      });
    } catch (err) {
      return next({ error: err, message: err });
    }
  }
  list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(' :::::::::: Inside List Trainee :::::::: ');
      const user = await this.userRepository.list({ deletedAt: undefined });
      console.log(user);
      return SystemResponse.success(res, user, 'Users List');
    }
    catch (err) {
      return next({ error: err, message: err });
    }
  }
  update = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
      console.log(' :::::::::: Inside Update Trainee :::::::: ');
      const { id, dataToUpdate } = req.body;
      const user = await this.userRepository.update({ _id: id }, dataToUpdate, req.user._id);
      return SystemResponse.success(res, user, 'Updated user');
    }
    catch (err) {
      return next({ error: err, message: err });
    }
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
      const token = jwt.sign({ email: user.email, _id: user.originalid, role: user.role }, config.secretKey);
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
  delete = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
      console.log(' :::::::::: Inside Delete Trainee :::::::: ');
      const { id } = req.params;
      const user = this.userRepository.delete({ _id: id }, req.user._id);
      return SystemResponse.success(res, user, 'Users List');
    }
    catch (err) {
      return next({ error: err, message: err });
    }
  };
}
export default UserController.getInstance();
