import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditMedicamentoComponent } from './components/add-edit-medicamento/add-edit-medicamento.component';
import { ListMedicamentosComponent } from './components/list-medicamentos/list-medicamentos.component';

const routes: Routes = [
  { path: '', component: ListMedicamentosComponent },
  { path: 'add-medicamento', component: AddEditMedicamentoComponent },
  { path: 'editar-medicamento/:id', component: AddEditMedicamentoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
