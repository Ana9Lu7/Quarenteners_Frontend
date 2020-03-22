import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

 public cadastro = false;

  public formLogin: FormGroup = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl(''),
  });

  public formCadastro: FormGroup = new FormGroup({
    medico: new FormControl(''),
    crm: new FormControl(''),
    cpf: new FormControl(''),
    nome: new FormControl(''),
    uf: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl(''),
  });
  
  ngOnInit(): void {
    
  }

  public mudarParaCadastro()
  {
    this.cadastro = true;
  }

}
