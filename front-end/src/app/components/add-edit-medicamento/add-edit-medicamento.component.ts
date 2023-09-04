import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Medicamento } from 'src/app/interfaces/medicamento';
import { MedicamentoService } from 'src/app/services/medicamento.service';



@Component({
  selector: 'app-add-edit-medicamento',
  templateUrl: './add-edit-medicamento.component.html',
  styleUrls: ['./add-edit-medicamento.component.css']
})
export class AddEditMedicamentoComponent implements OnInit {
  formMedicamento: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Cadastrar novo';


  constructor(private fb: FormBuilder, private _medicamentoService: MedicamentoService, private router: Router, private toastr: ToastrService, private aRouter: ActivatedRoute,) {

    this.formMedicamento = this.fb.group({
      nome_medicamento: ['', Validators.required],
      descricao: ['', Validators.required],
      quantidade: ['', Validators.required],
      laboratorio: ['', Validators.required],
      forma_farmaceutica: ['', Validators.required],
      estoque: ['', Validators.required],

    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operacion = 'Editar ';
      this.getMedicamento(this.id);
    }
  };

  getMedicamento(id: number) {
    this.loading = true;
    this._medicamentoService.getMedicamento(id).subscribe((data: Medicamento) => {
      this.loading = false;
      this.formMedicamento.setValue({
        nome_medicamento: data.nome_medicamento,
        descricao: data.descricao,
        quantidade: data.quantidade,
        laboratorio: data.laboratorio,
        forma_farmaceutica: data.forma_farmaceutica,
        estoque: data.estoque
      })
    })
  }


  addMedicamento() {
    const medicamento: Medicamento = {
      nome_medicamento: this.formMedicamento.value.nome_medicamento,
      descricao: this.formMedicamento.value.descricao,
      quantidade: this.formMedicamento.value.quantidade,
      laboratorio: this.formMedicamento.value.laboratorio,
      forma_farmaceutica: this.formMedicamento.value.forma_farmaceutica,
      estoque: this.formMedicamento.value.estoque,
    }
    this.loading = true;
    if (this.id !== 0) {
      medicamento.id = this.id;
      this._medicamentoService.updateMedicamento(this.id, medicamento).subscribe(() => {
        this.toastr.info(`Medicamento ${medicamento.nome_medicamento} atualizado com sucesso!`, 'Produto atualizado.')
        this.loading = false;
        this.router.navigate(['/']);
      })

    } else {
      this._medicamentoService.saveMedicamento(medicamento).subscribe(() => {
        this.toastr.success(`O medicamento ${medicamento.nome_medicamento} foi adicionado com sucesso!`);
        this.loading = false;
        this.router.navigate(['/']);
      })
    }


  }


}




