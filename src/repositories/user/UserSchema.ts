import VersionableSchema from '../versionable/VersionableSchema';
import * as mongoose from 'mongoose';
import { stringify } from 'querystring';

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
      role: String
    };
    super(userSchema, options);
  }
}

export default UserSchema;
