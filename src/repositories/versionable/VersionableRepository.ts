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

  public async create(options): Promise<D> {
    const id = VersionableRepository.generateObjectId();
    return await this.modelTypes.create({
      ...options,
      _id: id,
      originalID: id,
      createdBy: id
    });
  }

  public async findOne(options): Promise<D> {
    return await this.modelTypes.findOne(options);
  }

  public async update(id, data) {

    await this.modelTypes.findById(id).then(user => {
      console.log(typeof user);
      console.log(typeof data);
      const updateData = Object.assign(user, data);
      // console.log(merged);
      // console.log(updateData);
      this.updateAndCreate(user);
    }).catch(error => {
      throw error;
    });
    return await this.modelTypes.update(id, { deletedBy: id, deletedAt: new Date() });
  }

  public async updateAndCreate(options) {
    console.log(options);
    const id = VersionableRepository.generateObjectId();
    const newObj = {
      ...options.toObject(),
      _id: id,
      createdBy: id,
      updatedAt: new Date(),
      updatedBy: id,
    };
    console.log(newObj);
    return await this.modelTypes.create(newObj);
  }

  public async delete(id) {
    return await this.modelTypes.update(id, { deletedBy: id, deletedAt: new Date() });
  }

  public async list(data): Promise<any> {
    return this.modelTypes.find(data);
  }

}
