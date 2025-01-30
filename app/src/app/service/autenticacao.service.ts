import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AutenticaoService {
  constructor() {}

  emailCadastrado(email: string): boolean {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    return usuarios.some((u: any) => u.email === email);
  }

  cadastro(usuario: { nome: string, email: string, senha: string}) : void {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }

  login(usuario: { email: string, senha: string}): boolean {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioCadastrado = usuarios.find((u: any) => usuario.email === usuario.email && u.senha === usuario.senha);
    if(usuarioCadastrado) {
      localStorage.setItem('usuarioLogado', JSON.stringify(usuarioCadastrado))
      return true;
    }
    return false;
  }

  estaLogado(): boolean {
    return !!localStorage.getItem('usuarioLogado');
  }

  logout(): void {
    localStorage.removeItem('usuarioLogado');
  }

  getLogado(): any {
    return JSON.parse(localStorage.getItem('usuarioLogado') || '{}');
  }

  excluirConta(): void {
    const usuarioLogado = this.getLogado();
    if (usuarioLogado.email) {
      let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
      usuarios = usuarios.filter((u: any) => u.email !== usuarioLogado.email);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      this.logout();
    }
  }
}
