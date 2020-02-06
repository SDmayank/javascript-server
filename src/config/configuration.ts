import { config } from 'dotenv';
import Iconfig from './Iconfig';
config();
  const configuration: Iconfig = Object.freeze(
      {
          port: process.env.PORT,
          env: process.env.NODE_ENV,
          secretKey: process.env.secret_key,
          mongoUri: process.env.MONGO_URL
      });
      export default configuration;