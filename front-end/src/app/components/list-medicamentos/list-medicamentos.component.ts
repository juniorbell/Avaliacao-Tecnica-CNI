import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import { ToastrService } from 'ngx-toastr';
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
  showSplash = true;

  constructor(private _medicamentoService: MedicamentoService, private toastr: ToastrService, private elementRef: ElementRef) {

  }
  searchMedicamento(event: any) {
    const filtro = event.target.value.toLowerCase();

  }

  ngOnInit(): void {
    this.getListMedicamentos();
    setTimeout(() => {
      this.showSplash = false;
    }, 3000)
  }

  @HostListener('window:load', ['$event'])
  onWindowLoad(event: Event) {
    // Quando a página termina de carregar completamente, ocultar a splash screen
    this.loading = false;
  }


  getListMedicamentos() {
    this.loading = true;
    setTimeout(() => {
      this._medicamentoService.getListMedicamentos().subscribe((data) => {
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

  generatePDF() {
    const doc = new jsPDF();
    const content = this.elementRef.nativeElement;
    const specialElementHandlers = {
      '#editor': function () {
        return true;
      },
    };
    doc.output("dataurlnewwindow");
  }

}



