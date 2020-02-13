import * as mongoose from 'mongoose';

interface IVersionableDocument extends mongoose.Document {
createdAt: Date;
createdBy: string;
deletedAt: Date;
deletedBy: string;
updatedAt: Date;
updatedBy: string;
originalID: string;
}

export default IVersionableDocument;
