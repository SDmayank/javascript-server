import { Request , Response , NextFunction} from 'express'
import * as jwt from 'jsonwebtoken';
import config from '../config/configuration';
import configuration from '../config/configuration';
import hasPermission from './hasPermission';
export default ( moduleName , permissionType) => ( req: Request , res: Response, next: NextFunction) =>
{
    try{
        console.log(':::::::::::AUTHMIDDLEWARE::::::::::::' , module , permissionType);
        const token = req.headers[ ' authorization ' ];
        const { secretKey } = configuration;
        const decodedUser = jwt.verify(token, secretKey);
        if ( !decodedUser )
        {
            return next (
                {
                    status: 403,
                    error: 'unauthorized Access',
                    message: 'unauthorized Access'
                }
            );
        }
        const role: string = decodedUser.role;
        if(!hasPermission(moduleName , role , permissionType)){
            return next(
                {
                    status: 403,
                    error: 'unauthorized Access',
                    message: 'unauthorized Access'
                });
        }
        next();

    }
    catch (error)
    {
        return next(
            {
                status:4003,
                error: 'unauthorized Access',
                message: 'unauthorized access'
            }
        );
    }
};