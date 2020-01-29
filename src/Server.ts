import * as express from 'express';
import Iconfig from './config/Iconfig';
class Server {
    app: express.Application;
     constructor (private config: Iconfig) {
        this.app = express();
    }
    bootstrap() {
        this.setupRoutes();
        return this;
    }
    setupRoutes() {
     this.app.get('/`health-check', ( req: express.Request, res: express.Response) => {
       res.send( 'i am okk' );
    });
    }
    run() {
        this.app.listen(this.config.port, ( err ) => {
            if ( err ) {
                console.log(err);
                throw err;
            }
            console.log(`server is running on ${this.config.port}`);
        });
        return this;
    }
}
export default Server;