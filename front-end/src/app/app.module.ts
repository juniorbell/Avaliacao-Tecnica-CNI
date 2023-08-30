import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Módulos da aplicação
import { ReactiveFormsModule } from '@angular/forms';
//Components da aplicação
import { AddEditMedicamentoComponent } from './components/add-edit-medicamento/add-edit-medicamento.component';
import { ListMedicamentosComponent } from './components/list-medicamentos/list-medicamentos.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListMedicamentosComponent,
    AddEditMedicamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
