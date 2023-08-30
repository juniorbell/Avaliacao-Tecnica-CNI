import { Request, Response } from 'express';


export const getMedicamentos = (req: Request, res: Response) => {
    res.json({
        msg: 'get Medicamentos'
    })
};

export const getMedicamento = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg: 'get Medicamento',
        id
    })
}

export const deleteMedicamento = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg: 'Medicamento deletado',
        id
    })
}
export const postMedicamento = (req: Request, res: Response) => {
    const { body } = req;
    res.json({
        msg: 'Medicamento adicionado',
        body
    })
}

export const updateMedicamento = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: 'Medicamento atualizado',
        id,
        body
    })
}