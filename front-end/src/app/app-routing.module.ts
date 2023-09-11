import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditMedicamentoComponent } from './components/add-edit-medicamento/add-edit-medicamento.component';
import { LoginAccessComponent } from './components/login/login-access/login-access.component';

const routes: Routes = [
  //{ path: '', component: ListMedicamentosComponent },
  { path: 'login', component: LoginAccessComponent },
  { path: 'add-medicamento', component: AddEditMedicamentoComponent },
  { path: 'editar-medicamento/:id', component: AddEditMedicamentoComponent },
  //  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
