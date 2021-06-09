import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { ByCarrierComponent } from './by-carrier/by-carrier.component';
import { ByCodeComponent } from './by-code/by-code.component';
import { ByRouteComponent } from './by-route/by-route.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'add', component: AddComponent},
  {path: 'list', component: ListComponent},
  {path: 'search', component: SearchComponent},
  {path: 'edit', component: UpdateComponent},
  {path: 'search/by-carrier', component: ByCarrierComponent},
  {path: 'search/by-code', component: ByCodeComponent},
  {path: 'search/by-route', component: ByRouteComponent},
  {path: '**', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
