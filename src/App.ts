import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import LivroRouter from './routes/LivroRouter';
import IndexRouter from './routes/index';
import DbConnection from './config/DbConnection';


class App {
    public app: express.Application;

    constructor(){
        this.app = express();
        this.middlewares();
        this.connectDb();
        this.routes();
    }

    middlewares(){
        this.app.use(morgan("dev"))
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
    }

    connectDb(){
        DbConnection.createConnection();
    }

    stopConnection(message,callback){
        DbConnection.closeConnection(message,callback);
    }

    routes(){
        this.app.use("/",IndexRouter);
        this.app.use('/livros',LivroRouter);
    }
}

export default new App();