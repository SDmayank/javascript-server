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

public count(): mongoose.Query<number> {
return this.modelTypes.countDocuments();
}

public create(options): Promise<D> {
const id = VersionableRepository.generateObjectId();
return this.modelTypes.create({
...options,
_id: id,
originalID: id,
createdBy: id
});
}

public findOne(options): mongoose.Query<D> {
return this.modelTypes.findOne(options);
}

public update(id, data) {
const version = this.findOne(id);
const options = version.merge(data);
this.create(options);
const update1 = {
updatedAt: new Date()
};
return this.modelTypes.update(id, options);
}
}
