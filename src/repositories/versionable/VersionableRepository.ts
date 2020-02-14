import * as mongoose from 'mongoose';
import IRequest from './../../libs/routes/IRequest';

export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
  private modelTypes: M;

  constructor(modelType) {
    this.modelTypes = modelType;
  }

  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }

  public async count(): Promise<number> {
    return await this.modelTypes.countDocuments();
  }

  public async create(options, userID): Promise<D> {
    const id = VersionableRepository.generateObjectId();
    return await this.modelTypes.create({
      ...options,
      _id: id,
      originalid: id,
      createdBy: userID._id
    });
  }

  public async findOne(options): Promise<D> {
    return await this.modelTypes.findOne(options);
  }

  public async update(id, data, userID) {

    const user = await this.modelTypes.findById(id);
    console.log(typeof user);
    console.log(typeof data);
    Object.assign(user, data);
    // console.log("gffghfgfgg",user);
    const newObj = {
      ...user.toObject(),
      _id: id,
      createdBy: userID._id,
      updatedAt: new Date(),
      updatedBy: userID._id,
    };
    // console.log("newasdsadasda", newObj);
    this.create(newObj, userID);
    return await this.modelTypes.update(id, { deletedBy: userID._id, deletedAt: new Date() });
  }
  public async delete(id, userID) {
    return await this.modelTypes.update(id, { deletedBy: userID._id, deletedAt: new Date() });
  }

  public async list(data): Promise<any> {
    const deletedAt = {
      deletedAt: undefined
    };
    Object.assign(data , deletedAt);
    return this.modelTypes.find(data);
  }

}
