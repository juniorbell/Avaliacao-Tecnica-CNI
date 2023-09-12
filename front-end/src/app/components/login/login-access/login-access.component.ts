import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-access',
  templateUrl: './login-access.component.html',
  styleUrls: ['./login-access.component.css']
})
export class LoginAccessComponent {

  username: string = ''
  password: string = ''

  constructor(private router: Router, private toastr: ToastrService,) { }



  login() {
    if (this.username === 'bellpharma' && this.password === '123') {
      this.router.navigate(['/medicamentos'])
      this.toastr.success('Seja bem vindo!')
    } else {
      this.toastr.warning('Usuario não reconhecido')
    }
  }

}
