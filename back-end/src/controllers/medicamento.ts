import { Request, Response } from 'express';
import Medicamento from '../models/medicamento';


export const getMedicamentos = async (req: Request, res: Response) => {
    const listMedicamentos = await Medicamento.findAll()
    res.json(listMedicamentos)
};

export const getMedicamento = async (req: Request, res: Response) => {
    const { id } = req.params;
    const medicamento = await Medicamento.findByPk(id);

    if (medicamento) {
        res.json(medicamento)
    } else {
        res.status(404).json({
            msg: `Não existe medicamento com esse registro de id ${id}`
        });
    }
    res.json({
        msg: 'get Medicamento',
        id
    })
}

export const deleteMedicamento = async (req: Request, res: Response) => {
    const { id } = req.params;
    const medicamento = await Medicamento.findByPk(id);
    if (!medicamento) {
        res.status(404).json({
            msg: `Não existe medicamento com esse registro de id ${id}`
        })
    } else {
        await medicamento?.destroy();
        res.json({
            msg: `Medicamento excluido com sucesso!`
        })
    }

}

export const postMedicamento = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Medicamento.create(body);
        res.json({
            msg: `Medicamento adicionado com sucesso!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Erro ao cadastrar o medicamento, favor entra em contato com o suporte: (61) 0000-0000`
        })

    }


}

export const updateMedicamento = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const medicamento = await Medicamento.findByPk(id);
        if (medicamento) {
            await medicamento.update(body);
            res.json({
                msg: `Medicamento atualizado com sucesso!`,
            })
        } else {
            res.status(404).json({
                msg: `O medicamento com o id ${id} não foi encontrado.`
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Erro ao cadastrar o medicamento, favor entra em contato com o suporte: (61) 0000-0000`
        })

    }
}