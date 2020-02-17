import * as mongoose from 'mongoose';
import  IVersionableDocument from '../versionable/IVersionableDocument';
export default interface IUserModel extends IVersionableDocument {
    _id: string;
    name: string;
    address: string;
    email: string;
    dob: Date;
    mobileNumber: string;
    hobbies: string;
    role: string;
    password: string;
}
