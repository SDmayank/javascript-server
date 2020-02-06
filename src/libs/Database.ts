import * as Mongoose from 'mongoose';
import { promises } from 'dns';

class Database {
    static open = (mongoUri: string) => {
        return new Promise((resolve, reject) => {
            Mongoose.connect(mongoUri, (err) => {
                if (err) {
                    console.log('error in mongoDB connection');
                    return reject(err);
                }
                return resolve('Connection Successfull');
            });
        });
    }
    static disconnect = (mongoUri: string) => {
        Mongoose.connection.close();
    }
}
export default Database;