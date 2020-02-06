import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../config/configuration';
import configuration from '../config/configuration';
import hasPermission from './haspermission';
export default (moduleName, permissionType) => (req: Request, res: Response, next: NextFunction) => {

    try {

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
        if (!hasPermission(moduleName, role, permissionType)) {
            return next(
                {
                    status: 403,
                    error: 'unauthorized Access',
                    message: 'unauthorized Access'
                });
        }
        next();

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