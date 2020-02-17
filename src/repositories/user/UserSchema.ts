import VersionableSchema from '../versionable/VersionableSchema';

class UserSchema extends VersionableSchema {
  constructor(options) {

    const userSchema = {

      _id: String,
      name: String,
      address: String,
      email: String,
      dob: Date,
      mobileNumber: Number,
      hobbies: [String],
      role: String,
      password: String
    };
    super(userSchema, options);
  }
}

export default UserSchema;
