import { Component } from '@angular/core';
import { AutenticaoService } from '../../service/autenticacao.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  novoCadastro = { nome: '', email: '', senha: ''};

  constructor( private autenticacaoService: AutenticaoService, private router: Router) {}

  onSubmit(): void {
    if (this.autenticacaoService.emailCadastrado(this.novoCadastro.email)) {
      alert('Este email já está cadastrado.');
    } else {
      this.autenticacaoService.cadastro(this.novoCadastro);
      alert('Cadastro realizado com sucesso!');
      this.router.navigate(['/login']);
    }
  }
}
