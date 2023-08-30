import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Medicamento } from 'src/app/interfaces/medicamento';

@Component({
  selector: 'app-add-edit-medicamento',
  templateUrl: './add-edit-medicamento.component.html',
  styleUrls: ['./add-edit-medicamento.component.css']
})
export class AddEditMedicamentoComponent implements OnInit {
  formMedicamento: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formMedicamento = this.fb.group({
      nome_medicamento: ['', Validators.required],
      descricao: ['', Validators.required],
      quantidade: ['', Validators.required],
      laboratorio: ['', Validators.required],
      forma_farmaceutica: ['', Validators.required],
      estoque: ['', Validators.required],

    })

  }

  ngOnInit(): void {

  };
  addMedicamento() {
    const medicamento: Medicamento = {
      nome_medicamento: this.formMedicamento.value.nome_medicamento,
      descricao: this.formMedicamento.value.descricao,
      quantidade: this.formMedicamento.value.quantidade,
      laboratorio: this.formMedicamento.value.laboratorio,
      forma_farmaceutica: this.formMedicamento.value.forma_farmaceutica,
      estoque: this.formMedicamento.value.estoque,
    }
    console.log(medicamento);
  };
}
