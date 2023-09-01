import { Injectable } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Injectable({
    providedIn: 'root'
})
export class PdfService {

    constructor() {
        (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
    }

    generetePdf(data: any) {
        const documentDefinition = {
            content: [
                { text: 'BellPharma - Cuidando da saúde, transformando vidas.  ', style: 'header' },
                {
                    ul: [
                        `Nome do Medicamento: ${data.nome_medicamento}`,
                        `Descrção: ${data.descricao}`,
                        `Quantidade: ${data.quantidade}`,
                        `Laboratório: ${data.laboratorio}`,
                        `Forma Farmaceutica: ${data.forma_farmaceutica}`,
                        `Estoque: ${data.estoque}`,

                    ]
                }
            ],

        };

        pdfMake.createPdf(documentDefinition).download('informacoes_medicamento.pdf');
    }
}