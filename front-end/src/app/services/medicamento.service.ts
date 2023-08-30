import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environmet } from 'src/environments/environment';
import { Medicamento } from '../interfaces/medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  private myAppUrl: string;
  private myApiUrl: string;


  constructor(private http: HttpClient) {
    this.myAppUrl = environmet.endpoint;
    this.myApiUrl = 'api/medicamentos/'
  }

  getListMedicamentos(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
