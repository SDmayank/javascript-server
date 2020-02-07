import * as Mongoose from 'mongoose';
import seedData from './seedData'
class Database {
    static open = (mongoUri: string) => {
        return new Promise((resolve, reject) => {
            Mongoose.connect(mongoUri, { useNewUrlParser: true , useUnifiedTopology: true } , ( err) => {
                if (err) {
                    console.log('error in mongoDB connection');
                    return reject(err);
                }
                console.log(mongoUri);
                seedData();
                return resolve('Connection Successfull');
            });
        });
    }
    static disconnect = (mongoUri: string) => {
        Mongoose.connection.close();
    }
}
export default Database;