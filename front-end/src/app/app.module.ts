import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListMedicamentosComponent } from './components/list-medicamentos/list-medicamentos.component';
import { AddEditMedicamentoComponent } from './components/add-edit-medicamento/add-edit-medicamento.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListMedicamentosComponent,
    AddEditMedicamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
