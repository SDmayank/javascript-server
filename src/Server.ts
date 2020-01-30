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
    setupRoutes(): void {
     this.app.get('/`health-check', ( req: express.Request, res: express.Response) => {
       res.send( 'Now app is running on the server' );
    });
    }
    run(): Server {
        this.app.listen(this.config.port, ( err: any ): any => {
            if ( err ) {
                console.log(err);
                throw err;
            }
            console.log(`App is running on ${this.config.port} and ${this.config.env}`);
        });
        return this;
    }
}
export default Server;