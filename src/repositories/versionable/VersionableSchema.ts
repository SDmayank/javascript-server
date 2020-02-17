import * as mongoose from 'mongoose';

export default class VersionableSchema extends mongoose.Schema {
  constructor(schema, options) {
    const baseSchema = {
      createdAt: {
        type: Date,
        default: Date.now
      },
      deletedAt: Date,
      updatedAt: Date,
      deletedBy: String,
      createdBy: String,
      updatedBy: String,
      originalid: String,
    };
    super({ ...schema, ...baseSchema }, options);
  }
}
