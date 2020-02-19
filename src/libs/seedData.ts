import UserRepository from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import config from '../config/configuration';

const userRepository = new UserRepository();
export default () => {
  const user = {
    name: 'vinay',
    address: 'noida',
    dob: new Date('12-12-2020'),
    email: 'vinay@successive.tech',
    mobileNumber: 9454737763,
    hobbies: ['touring'],
    role: 'head-trainer'

  };
  userRepository.count().then((count) => {
    console.log('count as user', count);
    if (!count) {

      bcrypt.hash(config.password, 10, (err, hash) => {
        Object.assign(user, { password: hash });
        return userRepository.create(user)
          .then((res) => {
            console.log('user added successfully', res);
          });
      });
    }
    console.log('user already exist');

  });
};
