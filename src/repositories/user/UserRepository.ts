import { userModel } from './UserModel';
import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import IUserCreate from './entities/IUserCreate';
import VersionableRepository from '../versionable/VersionableRepository';

export class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
  private usermodel: mongoose.Model<IUserModel>;
  constructor() {
    super(userModel);
    this.usermodel = userModel;
  }
  create = (data: any): Promise<IUserModel> => {
    return super.create(data);
  }
  count = () => {
    return super.count();
  }
  findone = (query: any) => {
    return super.findOne(query);
  }
  update = (id, data) => {
    return super.update(id, data);
  }
  list = (data: any) => {
    return super.list(data);
  }
  delete = (id) => {
    return super.delete(id);
  }

}
export default UserRepository;
