import { Component } from '@angular/core';
import { AutenticaoService } from '../../service/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  usuarioLogado: any;

  constructor(private autenticacaoService: AutenticaoService, private router: Router) {
    if (!this.autenticacaoService.estaLogado()) {
      this.router.navigate(['/login']);
    }
    this.usuarioLogado = this.autenticacaoService.getLogado();
  }

  logout(): void {
    this.autenticacaoService.logout();
    this.router.navigate(['/login']);
  }
}
