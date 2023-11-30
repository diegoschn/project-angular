import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {


  //FormGroup: classe responsável pela construção de forms reativos
  formulario!: FormGroup

  constructor(private service: PensamentoService,
               private router: Router,
               //também uma das classes responsáveis pela construção de forms reativos
               private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //iniciando objeto que será linkado ao template
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulário reativo'],
      autoria: ['Angular'],
      modelo: ['modelo1']
    })
  }

  criarPensamento(){
    this.service.criar(this.formulario.value).subscribe(()=>{
      this.router.navigate(['/listarPensamento'])
    })
  }

  excluirPensamento(){
    this.router.navigate(['/listarPensamento'])
  }

}
