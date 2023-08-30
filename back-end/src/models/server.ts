import express, { Request, Response } from 'express';
import routesMedicamento from '../routes/medicamento';

class Server {
    private app: express.Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
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

    }
}

export default Server;