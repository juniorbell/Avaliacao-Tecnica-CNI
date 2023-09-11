import { Component } from '@angular/core';

@Component({
  selector: 'app-login-access',
  templateUrl: './login-access.component.html',
  styleUrls: ['./login-access.component.css']
})
export class LoginAccessComponent {

  username: string = ''
  password: string = ''


  login() {
    if (this.username === 'bellpharma' && this.password === '123') {
      console.log('login bem sucedido!');
    } else {
      console.log('Falha na autenticação')
    }
  }

}
