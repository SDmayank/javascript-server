import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import configuration from '../config/configuration';
import hasPermission from './haspermission';
import UserRepository from '../repositories/user/UserRepository';
import IRequest from './routes/IRequest';

export default (moduleName, permissionType) => (req: IRequest, res: Response, next: NextFunction) => {

  try {
    const Userrepository = new UserRepository();
    console.log(':::::::::::AUTHMIDDLEWARE::::::::::::');
    const { authorization: token } = req.headers;
    const { secretKey } = configuration;
    const decodedUser = jwt.verify(token, secretKey);
    console.log('decoder', decodedUser);
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
    const { originalid, email } = decodedUser;
    Userrepository.findone({ originalid, email , deletedAt: undefined })
      .then(user => {
        req.user = user;
     if (!user ) {
        return next({
          status: 404,
          error: 'invalid user',
          message: 'user not found',
        });
            }}).

      then(() => {
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
        status: 403,
        error: 'unauthorized Access',
        message: error.message
      }
    );
  }
};
