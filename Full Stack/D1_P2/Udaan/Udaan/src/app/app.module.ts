import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{  FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { ByCodeComponent } from './by-code/by-code.component';
import { ByCarrierComponent } from './by-carrier/by-carrier.component';
import { ByRouteComponent } from './by-route/by-route.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    SearchComponent,
    ByCodeComponent,
    ByCarrierComponent,
    ByRouteComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
