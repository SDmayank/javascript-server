import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../config/configuration';
import configuration from '../config/configuration';
import hasPermission from './haspermission';
import UserRepository from '../repositories/user/UserRepository';
import IRequest from './routes/IRequest';

export default (moduleName, permissionType) => (req: IRequest, res: Response, next: NextFunction) => {

  try {
    const Userrepository = new UserRepository();
    console.log(':::::::::::AUTHMIDDLEWARE::::::::::::', module, permissionType);
    console.log('-------headers-----', req.headers);
    const { authorization: token } = req.headers;
    const { secretKey } = configuration;
    console.log('-------secretKey-----', secretKey, configuration);
    const decodedUser = jwt.verify(token, secretKey);
    if (!decodedUser) {
      return next(
        {
          status: 403,
          error: 'unauthorized Access',
          message: 'unauthorized Access'
        }
      );
    }
    const role: string = decodedUser.role;
    console.log('role', role);
    const { id, email } = decodedUser;
    console.log('decoded user', id, email);
    Userrepository.findone({ _id: id, email })
      .then(user => {
        console.log('user details', user);
        if (!user) {
          return next({
            status: 404,
            error: 'invalid user',
            message: 'user not found',
          });
        }
        req.user = user;
        console.log('req user', req.user);
      }).then(() => {
        if (!hasPermission(moduleName, role, permissionType)) {
          return next(
            {
              status: 403,
              error: 'unauthorized Access',
              message: 'unauthorized Access'
            });
        }
        next();
      });
  }
  catch (error) {
    return next(
      {
        status: 4003,
        error: 'unauthorized Access',
        message: error.message
      }
    );
  }
};
