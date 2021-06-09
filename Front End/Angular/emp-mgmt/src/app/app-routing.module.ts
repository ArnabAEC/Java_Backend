import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add', component: AddComponent},
  {path: 'list', component: ListComponent},
  {path: 'search', component: SearchComponent},
  {path: 'edit', component: EditComponent},
  {path: '**', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
