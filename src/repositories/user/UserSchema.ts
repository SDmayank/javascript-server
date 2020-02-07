
import * as mongoose from 'mongoose';

class UserSchema extends mongoose.Schema {
constructor( options) { 
const userSchema = {
id: String,
name: String,
address: String,
emails: String,
dob: Date,
mobileNumber: Number,
hobbies: [String]
};
super(userSchema, options );
}
}

export default UserSchema;