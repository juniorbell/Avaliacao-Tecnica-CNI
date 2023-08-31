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
  loading: boolean = false;
  constructor(private _medicamentoService: MedicamentoService) {

  }
  ngOnInit(): void {
    this.getListMedicamentos();
  }

  getListMedicamentos() {
    this.loading = true;
    setTimeout(() => {
      this._medicamentoService.getListMedicamentos().subscribe((data) => {
        this.listMedicamentos = data;
        this.loading = false;
      })
    }, 1500);
  }

  deleteMedicamento(id: number) {
    this.loading = true;
    this._medicamentoService.deleteMedicamento(id).subscribe(() => {
      this.getListMedicamentos();
    })
  }
}

