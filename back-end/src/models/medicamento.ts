import { DataTypes, } from 'sequelize';
import db from '../db/connection';

const Medicamento = db.define('Medicamento', {
    nome_medicamento: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.STRING
    },
    quantidade: {
        type: DataTypes.NUMBER
    },
    laboratorio: {
        type: DataTypes.STRING
    },
    forma_farmaceutica: {
        type: DataTypes.STRING
    },
    estoque: {
        type: DataTypes.NUMBER
    },
}, {
    createdAt: false,
    updatedAt: false
});
export default Medicamento;