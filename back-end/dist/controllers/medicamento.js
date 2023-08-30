"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMedicamento = exports.postMedicamento = exports.deleteMedicamento = exports.getMedicamento = exports.getMedicamentos = void 0;
const getMedicamentos = (req, res) => {
    res.json({
        msg: 'get Medicamentos'
    });
};
exports.getMedicamentos = getMedicamentos;
const getMedicamento = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'get Medicamento',
        id
    });
};
exports.getMedicamento = getMedicamento;
const deleteMedicamento = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'Medicamento deletado',
        id
    });
};
exports.deleteMedicamento = deleteMedicamento;
const postMedicamento = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'Medicamento adicionado',
        body
    });
};
exports.postMedicamento = postMedicamento;
const updateMedicamento = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: 'Medicamento atualizado',
        id,
        body
    });
};
exports.updateMedicamento = updateMedicamento;
