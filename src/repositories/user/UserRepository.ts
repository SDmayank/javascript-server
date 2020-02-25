import { userModel } from './UserModel';
import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';

export class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
  private usermodel: mongoose.Model<IUserModel>;
  constructor() {
    super(userModel);
    this.usermodel = userModel;
  }
  create = (data: any, userID = undefined): Promise<IUserModel> => {
    return super.create(data, userID);
  }
  count = () => {
    return super.count();
  }
  findone = (query: any) => {
    return super.findOne(query);
  }
  update = (condition, data, userID) => {
    return super.update(condition, data, userID);
  }
  list = (data: any, limit, skip, sortData) => {
    console.log(data);
    return super.list(limit, skip, sortData, data);
  }
  delete = (id, userID) => {
    return super.delete(id, userID);
  }

}
export default UserRepository;
