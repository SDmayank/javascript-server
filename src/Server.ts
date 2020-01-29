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
       res.send( 'i am okk' );
    });
    }
    run(): Server {
        this.app.listen(this.config.port, ( err: any ): any => {
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