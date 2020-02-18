import { Request, Response, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import SystemResponse from '../../libs/SystemResponse';
import IRequest from '../../libs/routes/IRequest';
import * as bcrypt from 'bcrypt';

class TraineeController {
  static instance: TraineeController;
  static userRepository: UserRepository;
  userRepository = new UserRepository();
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
      const { limit, skip, sortData } = req.query;
      console.log('limit and skip', limit, skip);
      const user = await this.userRepository.list({ deletedAt: undefined }, limit, skip, sortData);
      console.log('user', user);
      const count = await this.userRepository.count();
      return SystemResponse.success(res, { totalCount: count, ...user }, 'Users List');
    }
    catch (err) {
      return next({ error: err, message: err });
    }
  }
  update = async (req: IRequest, res: Response, next: NextFunction) => {
    try {
      console.log(' :::::::::: Inside Update Trainee :::::::: ');
      const { id, dataToUpdate } = req.body;
      // console.log('req body' , req.body);
      const user = await this.userRepository.update({ originalid: id, deletedAt: undefined }, dataToUpdate, req.user._id);
      // console.log('user',user);
      return SystemResponse.success(res, user, 'Updated user');
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
      return SystemResponse.success(res, user, 'deleted successfully');
    }
    catch (err) {
      return next({ error: err, message: err });
    }
  };
}
export default TraineeController.getInstance();
