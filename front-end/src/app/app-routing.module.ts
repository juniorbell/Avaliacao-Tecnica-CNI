import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditMedicamentoComponent } from './components/add-edit-medicamento/add-edit-medicamento.component';
import { ListMedicamentosComponent } from './components/list-medicamentos/list-medicamentos.component';
import { LoginAccessComponent } from './components/login/login-access/login-access.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'medicamentos', component: ListMedicamentosComponent },
  { path: 'login', component: LoginAccessComponent },
  { path: 'add-medicamento', component: AddEditMedicamentoComponent },
  { path: 'editar-medicamento/:id', component: AddEditMedicamentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
