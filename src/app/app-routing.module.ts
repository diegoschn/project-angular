import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
    path: '', //se for caminho vazio.. ex: localhost:4200
    redirectTo: 'listarPensamento', //redireciona para
    pathMatch: 'full'//ele pega a url completa
  },
  {
    path: 'criarPensamento', //ex: localhost:4200/criarPensamento
    component: CriarPensamentoComponent //renderizar componente 
  },
  {
    path: 'listarPensamento', //ex: localhost:4200/listarPensamento
    component: ListarPensamentoComponent //renderizar componente 
  },
  {
    path: 'pensamentos/excluirPensamento/:id', //ex: localhost:4200/excluirPensamento/1
    component: ExcluirPensamentoComponent //renderizar componente 
  },
  {
    path: 'pensamentos/editarPensamento/:id', //ex: localhost:4200/editarPensamento/1
    component: EditarPensamentoComponent //renderizar componente 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
