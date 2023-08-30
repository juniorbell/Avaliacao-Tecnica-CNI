"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const medicamento_1 = __importDefault(require("../routes/medicamento"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor da aplicação rodando na porta: ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'API trabalhando...'
            });
        });
        this.app.use('/api/medicamentos', medicamento_1.default);
    }
    midlewares() {
        this.app.use(express_1.default.json());
    }
}
exports.default = Server;
