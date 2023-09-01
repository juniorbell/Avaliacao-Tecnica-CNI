import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import db from "../db/connection";
import routesMedicamento from '../routes/medicamento';


class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor da aplicação rodando na porta: ${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API trabalhando...'
            })
        })
        this.app.use('/api/medicamentos', routesMedicamento)
    }

    midlewares() {
        this.app.use(express.json())
        this.app.use(cors());

    }

    async dbConnect() {
        try {
            await db.authenticate();
            console.log('Base de dados conectada com sucesso.')
        } catch (error) {
            console.log('Erro ao se conectar com a base de dados hahaahahaha.')
        }
    }
}

export default Server;