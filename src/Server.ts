import * as express from 'express';
import Iconfig from './config/Iconfig';
import * as bodyParser from 'body-parser';
import { errorHandler } from './libs/routes';
import { notFoundRoute } from './libs/routes';
import { Request } from 'express';
import { request } from 'http';
import router from './router';
import Database from './libs/Database';
import configuration from './config/configuration';
import * as swaggerJsDoc from 'swagger-jsdoc';
import * as swaggerUI from 'swagger-ui-express';

const { mongoUri } = configuration;
class Server {
    app: express.Application;
    constructor(private config: Iconfig) {
        this.app = express();
    }
    bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }
    initBodyParser(): void {
        const { app } = this;
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    }
    run(): Server {
        Database.open(mongoUri)
            .then((msg) => {
                console.log(msg);
                this.app.listen(this.config.port, (err: any): any => {
                    if (err) {
                        console.log(err);
                        throw err;
                    }
                    console.log(`App is running on ${this.config.port} and ${this.config.env}`);
                });
            }).catch((err) => {
                console.log(err);
            });
        return this;
    }
    setupRoutes() {
        const { app } = this;
        app.use('/swagger', swaggerUI.serve, swaggerUI.setup(this.initSwagger()));
        this.app.get('/health-check', (req: express.Request, res: express.Response) => {
            res.send('Now app is running on the server');
        });
        app.use('/body-parser', (req: express.Request, res: express.Response) => {
            console.log(req.body);
            res.send('Your body parser is done');
        });
        app.use('/api' , router);
        app.use(notFoundRoute);
        app.use(errorHandler);
    }

    public initSwagger = () => {
      const options = {
      definition: {
      info: {
      title: 'Javascript-Server API',
      version: '1.0.0',
      },
      securityDefinitions: {
      Bearer: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'headers'
      }
      },
      basePath: '/api',
      },
      swagger: '2.0',
      apis: ['./dist/controllers/**/routes.js'],
      };
      const swaggerSpec = swaggerJsDoc(options);
      return swaggerSpec;
      }

}
export default Server;
