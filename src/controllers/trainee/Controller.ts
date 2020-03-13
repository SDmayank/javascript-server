import { Request, Response, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import SystemResponse from '../../libs/SystemResponse';
import IRequest from '../../libs/routes/IRequest';
import * as bcrypt from 'bcrypt';
import IUserCreate from '../../../src/repositories/user/entities/IUserCreate';

class TraineeController {
  static instance: TraineeController;
  userRepository: UserRepository = new UserRepository();
  static getInstance = () => {
    if (TraineeController.instance) {
      return TraineeController.instance;
    }
    TraineeController.instance = new TraineeController();
    return TraineeController.instance;
  }
  create = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
      console.log('::::::::Create Trainee USER:::::::::::::::');
      const users: IUserCreate = req.body;
      console.log('USERS', users);
      const { email, name } = req.body;
      const emailCovert = email.toLowerCase();
      const emailChecker = await this.userRepository.findOne({ email: emailCovert });
      console.log('email', emailChecker);
      if (emailChecker) {
        return next({
          error: 'email already exist',
          status: 400
        });
      }
      bcrypt.hash(users.password, 10, (err, hash) => {
        users.password = hash;
        this.userRepository.create(users, req.user._id)
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
      const { limit, skip, sortData, search } = req.query;
      console.log('search', search);
      const count = await this.userRepository.count();
      console.log('limit and skip', limit, skip, sortData);
      if (search) {
        // const searching = search.split(':');
        // console.log(searching);
        const user = await this.userRepository.list(limit, skip, sortData, { name: { $regex: search, $options: 'i' }, deletedAt: undefined });
        const list = await this.userRepository.list(limit, skip, sortData, { email: { $regex: search, $options: 'i' }, deletedAt: undefined });
        const users = { ...user, ...list };
        return SystemResponse.success(res, { ...users }, count, 'Users List');
      }
      else {
        const user = await this.userRepository.list(limit, skip, sortData, search);
        return SystemResponse.success(res, { ...user }, count, 'Users List');
      }

    }
    catch (err) {
      return next({ error: err, message: err });
    }
  }

  update = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
      console.log(' :::::::::: Inside Update Trainee :::::::: ');
      const { id, dataToUpdate } = req.body;
      console.log("id,dataupdate", id, dataToUpdate);
      if (!dataToUpdate.email) {
        const user = await this.userRepository.update({ originalid: id, deletedAt: undefined }, dataToUpdate, req.user._id);
        console.log("userf", user);
        return SystemResponse.success(res, user, 'Updated user');
      } else {
        return next({
          error: 'error',
          message: 'error'
        });
      }
    }
    catch (err) {
      return next({ error: err, message: err });
    }
  }
  delete = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
      console.log(' :::::::::: Inside Delete Trainee :::::::: ');
      const { id } = req.params;
      const user = await this.userRepository.delete({ originalid: id, deletedAt: undefined }, req.user._id);
      console.log('userer', user);
      return SystemResponse.success(res, user, 'deleted successfully');
    }
    catch (err) {
      return next({ error: err, message: err });
    }
  };
}
export default TraineeController.getInstance();
