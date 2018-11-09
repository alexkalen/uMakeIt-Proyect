import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminComponent } from './admin/admin.component';
import { ModalhomeComponent } from './modalhome/modalhome.component';
import { OrdenComponent } from './orden/orden.component';
import { HistoriaComponent } from './historia/historia.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: SignInComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'orders', component: OrdenComponent },
  { path: 'history', component: HistoriaComponent },
  { path: 'sign-up', component: SignUpComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncabezadoComponent,
    SignInComponent,
    AdminComponent,
    ModalhomeComponent,
    OrdenComponent,
    HistoriaComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AngularFontAwesomeModule,
    RouterModule.forRoot(
      appRoutes, 
      { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalhomeComponent],
  exports: [RouterModule],
  
})
export class AppModule { }
