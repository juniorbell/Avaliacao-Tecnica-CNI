import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/interfaces/medicamento';
import { MedicamentoService } from 'src/app/services/medicamento.service';

@Component({
  selector: 'app-list-medicamentos',
  templateUrl: './list-medicamentos.component.html',
  styleUrls: ['./list-medicamentos.component.css']
})
export class ListMedicamentosComponent implements OnInit {
  listMedicamentos: Medicamento[] = []
  constructor(private _medicamentoService: MedicamentoService) {

  }
  ngOnInit(): void {
    this.getListMedicamentos();
  }

  getListMedicamentos() {
    this._medicamentoService.getListMedicamentos().subscribe((data) => {
      this.listMedicamentos = data;
    })
  }
}

