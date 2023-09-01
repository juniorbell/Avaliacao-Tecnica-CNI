import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//Módulos da aplicação
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { ToastrModule } from 'ngx-toastr';











//Components da aplicação
import { AddEditMedicamentoComponent } from './components/add-edit-medicamento/add-edit-medicamento.component';
import { ListMedicamentosComponent } from './components/list-medicamentos/list-medicamentos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { SplashScreenComponent } from './shared/splash-screen/splash-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListMedicamentosComponent,
    AddEditMedicamentoComponent,
    ProgressBarComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 2800,
      positionClass: 'toast-bottom-left'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
