import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Módulos da aplicação
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { ExportAsModule } from 'ngx-export-as';
import { ToastrModule } from 'ngx-toastr';



//Components da aplicação
import { AddEditMedicamentoComponent } from './components/add-edit-medicamento/add-edit-medicamento.component';
import { ListMedicamentosComponent } from './components/list-medicamentos/list-medicamentos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { SplashScreenComponent } from './shared/splash-screen/splash-screen.component';
import { LoginAccessComponent } from './components/login/login-access/login-access.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListMedicamentosComponent,
    AddEditMedicamentoComponent,
    ProgressBarComponent,
    SplashScreenComponent,
    LoginAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatSelectModule,
    ExportAsModule,
    ToastrModule.forRoot({
      timeOut: 2800,
      positionClass: 'toast-bottom-left'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
