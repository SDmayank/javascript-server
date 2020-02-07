import { Request, Response, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import SystemResponse from '../../libs/SystemResponse';

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
    create = (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('::::::::Create Trainee USER:::::::::::::::');

            const { email, name, address, hobbies, dob, mobileNumber } = req.body;

            this.userRepository.create({
                email, name, address, dob, mobileNumber, hobbies
            })
                .then(user => {
                    return SystemResponse.success(res, user, 'trainee added sucessfully');
                }).catch(error => {
                    throw error;
                });
        } catch (err) { }
    }
    // const Traineedata = {
    //     status: 'Done',
    //     message: 'Trainee Created Successfuly',
    //     data: {
    //         id: 1673,
    //         name: 'mayank garg',
    //         address: 'Faridabad',

    //     }
    //     // };
    //     res.send(Traineedata);
    // }
    list = (req: Request, res: Response) => {
        try {
            console.log(' :::::::::: Inside List Trainee :::::::: ');
            this.userRepository.list().then(user => {
                console.log(user);
                return SystemResponse.success(res, user, 'Users List');
            }).catch(error => {
                throw error
            })
        }
        catch (err) {
        }
    }
    update = (req: Request, res: Response) => {
        try {
            console.log(' :::::::::: Inside Update Trainee :::::::: ');
            const { id, dataToUpdate } = req.body;
            this.userRepository.update({ _id: id }, dataToUpdate).then(User => {
                this.userRepository.findOne({ _id: id }).then(User => {
                    console.log('---user--', User);
                    return SystemResponse.success(res, User, 'Updated user');
                }).catch(error => {
                    throw error
                })
                //return SystemResponse.success(res, user, 'trainee updated successfully');
            }).catch(error => {
                throw error
            })
        }
        catch (err) {

        }
    }
    delete = (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(' :::::::::: Inside Delete Trainee :::::::: ');
            const { id } = req.params;
            // if (!id) {
            //     // return next({ error: 'error occured', message: `${key}` + 'is invalid' });
            //     throw new Error('INVALID ID')
            // }
            this.userRepository.delete({ _id: id }).then(user => {
                console.log(user);
                return SystemResponse.success(res, user, 'Users List');
            }).catch(error => {
                throw error;
            })
        }
        catch (err) {
            return next({ error: err, message: err });

        }
    };
}

export default UserController.getInstance();
