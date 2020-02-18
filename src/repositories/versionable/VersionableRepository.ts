import * as mongoose from 'mongoose';

export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
  private modelTypes: M;

  constructor(modelType) {
    this.modelTypes = modelType;
  }

  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }

  public async count(): Promise<number> {
    return await this.modelTypes.find({ deletedAt: undefined }).count();
  }

  public async create(options, userID): Promise<D> {
    const id = VersionableRepository.generateObjectId();
    return await this.modelTypes.create({
      ...options,
      _id: id,
      originalid: id,
      createdBy: userID
    });
  }

  public async findOne(options): Promise<D> {
    return await this.modelTypes.findOne(options);
  }

  public async update(id, data, userID) {
    const user = await this.modelTypes.findOne(id);
    console.log(typeof user);
    console.log(typeof data);
    const newid = VersionableRepository.generateObjectId();
    Object.assign(user, data);
    const newObj = {
      ...user.toObject(),
      _id: newid,
      createdBy: userID,
      updatedAt: new Date(),
      updatedBy: userID
    };
    this.modelTypes.create(newObj);
    return await this.modelTypes.update(id, { deletedBy: userID, deletedAt: new Date() });
  }
  public async delete(id, userID) {
    return await this.modelTypes.update(id, { deletedBy: userID, deletedAt: new Date() });
  }

  public async list(data, limit, skip, sortData): Promise<any> {
    if (sortData)
      return this.modelTypes.find(data).limit(limit).skip(skip).sort(sortData);
    else
      return this.modelTypes.find(data).limit(limit).skip(skip).sort({ 'createdAt': 1 });
  }
}
