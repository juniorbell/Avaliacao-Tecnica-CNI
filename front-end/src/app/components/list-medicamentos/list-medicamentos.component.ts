import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/interfaces/medicamento';

@Component({
  selector: 'app-list-medicamentos',
  templateUrl: './list-medicamentos.component.html',
  styleUrls: ['./list-medicamentos.component.css']
})
export class ListMedicamentosComponent implements OnInit {
  listMedicamentos: Medicamento[] = [
    { id: 1, nome_medicamento: 'Dipirona', descricao: 'Uso oral', quantidade: 1500, laboratorio: 'BellPharma', forma_farmaceutica: 'Líquida', estoque: 0 },
    { id: 2, nome_medicamento: 'Dorflex', descricao: 'Uso oral', quantidade: 580, laboratorio: 'BellPharma', forma_farmaceutica: 'Comprimido', estoque: 3 },
    { id: 3, nome_medicamento: 'Halobex', descricao: 'Passar na ferida', quantidade: 250, laboratorio: 'BellPharma', forma_farmaceutica: 'pasta', estoque: 0 },

  ]
  constructor() {

  }
  ngOnInit(): void {

  }
}

