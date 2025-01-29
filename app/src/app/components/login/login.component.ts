import { Router } from '@angular/router';
import { AutenticaoService } from './../../service/autenticacao.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario = { email: '', senha: ''};

  constructor(private autenticaoService: AutenticaoService, private router: Router) {}

  onSubmit(): void {
    if (this.autenticaoService.login(this.usuario)) {
      this.router.navigate(['/home']);
    } else {
      alert('Credenciais invalidas')
    }
  }
}
