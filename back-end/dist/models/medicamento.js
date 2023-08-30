"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Medicamento = connection_1.default.define('Medicamento', {
    nome_medicamento: {
        type: sequelize_1.DataTypes.STRING
    },
    descricao: {
        type: sequelize_1.DataTypes.STRING
    },
    quantidade: {
        type: sequelize_1.DataTypes.NUMBER
    },
    laboratorio: {
        type: sequelize_1.DataTypes.STRING
    },
    forma_farmaceutica: {
        type: sequelize_1.DataTypes.STRING
    },
    estoque: {
        type: sequelize_1.DataTypes.NUMBER
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Medicamento;
