import UserRepository from '../repositories/user/UserRepository';
const userRepository = new UserRepository();

export default () => {
    const user = {
        name: 'head trainer',
        address: 'noida',
       dob: new Date('12-12-2020'),
        email: 'vinay@chaudhary.com',
        mobileNumber: 9454737763,
        hobbies: ['']

    };
userRepository.count().then((count) => {
    console.log('count as user', count);
    if (!count) {
return userRepository.create(user)
    .then((res) => {
      console.log('user added successfully' , res);
    });
}
console.log('user already exist');

});
};
