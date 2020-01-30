import * as express from 'express';
import Iconfig from './config/Iconfig';
import * as bodyParser from 'body-parser';
import { errorHandler, notFoundRoute } from './libs/routes/index';
import  { Request } from 'express';
import { request } from 'http';

class Server {
    app: express.Application;
    constructor(private config: Iconfig) {
        this.app = express();
    }
    bootstrap() {
        console.log('Inside Bootstrap ');
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }
    initBodyParser() {
        const { app } = this;
        console.log('inside the init bodyparser');
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    }
    run(): Server {
        this.app.listen(this.config.port, (err: any): any => {
            if (err) {
                console.log(err);
                throw err;
            }
            console.log(`App is running on ${this.config.port} and ${this.config.env}`);
        });
        return this;
    }
    setupRoutes() {
        const { app } = this;
        this.app.get('/health-check', (req: express.Request, res: express.Response) => {
            console.log('inside health check');
            res.send('Now app is running on the server');
        });
        app.use('/body-parser', ( req: express.Request, res: express.Response) => {
            console.log(req.body);
            res.send('Your body parser is done');
        });
    app.use(notFoundRoute);
    app.use(errorHandler);
}
}
export default Server;