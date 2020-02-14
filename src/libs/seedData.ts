import UserRepository from '../repositories/user/UserRepository';
import * as mongoose  from 'mongoose';
const userRepository = new UserRepository();
// function genertayeObjectId() {
//   return String (mongoose.Types.ObjectId());
// }

export default () => {
    const user = {
        name: 'vinay',
        address: 'noida',
        dob: new Date('12-12-2020'),
        email: 'vinay@chaudhary.com',
        mobileNumber: 9454737763,
        hobbies: ['touring'],
        role: 'head trainer'

    };
userRepository.count().then((count) => {
    console.log('count as user', count);
    if (!count) {
      const id = undefined;
      return userRepository.create(user, {_id: id})
    .then((res) => {
      console.log('user added successfully' , res);
    });
}
console.log('user already exist');

});
};
