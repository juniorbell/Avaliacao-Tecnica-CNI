import { Component, OnInit } from '@angular/core';
import { ExportAsConfig, ExportAsService, SupportedExtensions, } from 'ngx-export-as';
import { ToastrService } from 'ngx-toastr';
import { Medicamento } from 'src/app/interfaces/medicamento';
import { MedicamentoService } from 'src/app/services/medicamento.service';





@Component({
  selector: 'app-list-medicamentos',
  templateUrl: './list-medicamentos.component.html',
  styleUrls: ['./list-medicamentos.component.css']
})
export class ListMedicamentosComponent implements OnInit {
  listMedicamentos!: Medicamento[];
  loading: boolean = false;
  showSplash = true;
  downloadAs: SupportedExtensions = 'pdf';
  exportAsConfig: ExportAsConfig = {
    type: 'pdf',
    elementIdOrContent: 'content',
    options: {
      pdfOptions: {
        orientation: 'portrait',
      },
    },
  };


  constructor(private _medicamentoService: MedicamentoService, private toastr: ToastrService, private exportAsService: ExportAsService) {

  }
  ngOnInit(): void {
    this.getListMedicamentos();
    setTimeout(() => {
      this.showSplash = false;
    }, 3000)
  }
  getListMedicamentos() {
    this.loading = true;
    setTimeout(() => {
      this._medicamentoService.getListMedicamentos().subscribe((data: Medicamento[]) => {
        this.listMedicamentos = data;
        this.loading = false;
      })
    }, 600);
  }

  deleteMedicamento(id: number) {
    this.loading = true;
    this._medicamentoService.deleteMedicamento(id).subscribe(() => {
      this.getListMedicamentos();
      this.toastr.warning('Medicamento excluido com sucesso!')
    })
  }

  export() {
    this.exportAsConfig.type = this.downloadAs;
    this.exportAsService
    this.exportAsConfig.options = {
      orientation: 'landscape',
    };
    this.exportAsService.save(this.exportAsConfig, 'Lista de Medicamentos')
      .subscribe(() => {
      });
    this.exportAsService.get(this.exportAsConfig);
  }
}




