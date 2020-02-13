import { userModel } from './UserModel';
import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import IUserCreate from './entities/IUserCreate';
import VersionableRepository from '../versionable/VersionableRepository';

export class UserRepository extends VersionableRepository <IUserModel,mongoose.Model<IUserModel>>{
  private usermodel : mongoose.Model<IUserModel>;
  constructor() {
   super (userModel)
   this.usermodel = userModel;
  }
  create = (data: any): Promise<IUserModel> => {
    return super.create(data);
  }
  count = (): mongoose.Query<number> => {
    return super.count();
  }
  findone = (query:any): mongoose.Query<IUserModel>=> {
    return super.findOne(query);
  }
  update = (id, data) => {
    return this.usermodel.updateOne(id, data);
  }
  list = () => {
    return this.usermodel.find();
  }
  delete = (id) => {
    return this.usermodel.findByIdAndDelete(id);
  }

}
export default UserRepository;
