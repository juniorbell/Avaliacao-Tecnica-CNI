"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMedicamento = exports.postMedicamento = exports.deleteMedicamento = exports.getMedicamento = exports.getMedicamentos = void 0;
const medicamento_1 = __importDefault(require("../models/medicamento"));
const getMedicamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listMedicamentos = yield medicamento_1.default.findAll();
    res.json(listMedicamentos);
});
exports.getMedicamentos = getMedicamentos;
const getMedicamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const medicamento = yield medicamento_1.default.findByPk(id);
    if (medicamento) {
        res.json(medicamento);
    }
    else {
        res.status(404).json({
            msg: `Não existe medicamento com esse registro de id ${id}`
        });
    }
});
exports.getMedicamento = getMedicamento;
const deleteMedicamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const medicamento = yield medicamento_1.default.findByPk(id);
    if (!medicamento) {
        res.status(404).json({
            msg: `Não existe medicamento com esse registro de id ${id}`
        });
    }
    else {
        yield medicamento.destroy();
        res.json({
            msg: `Medicamento excluido com sucesso!`
        });
    }
});
exports.deleteMedicamento = deleteMedicamento;
const postMedicamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield medicamento_1.default.create(body);
        res.json({
            msg: `Medicamento adicionado com sucesso!`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Erro ao cadastrar o medicamento, favor entra em contato com o suporte: (61) 0000-0000`
        });
    }
});
exports.postMedicamento = postMedicamento;
const updateMedicamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const medicamento = yield medicamento_1.default.findByPk(id);
        if (medicamento) {
            yield medicamento.update(body);
            res.json({
                msg: `Medicamento atualizado com sucesso!`,
            });
        }
        else {
            res.status(404).json({
                msg: `Não exite medicamento com o ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Erro ao cadastrar o medicamento, favor entra em contato com o suporte: (61) 0000-0000`
        });
    }
});
exports.updateMedicamento = updateMedicamento;
