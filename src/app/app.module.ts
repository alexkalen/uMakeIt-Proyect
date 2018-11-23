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
import { OrdenComponent } from './orden/orden.component';
import { HistoriaComponent } from './historia/historia.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { ForgotComponent } from './forgot/forgot.component';
import { SushirollsComponent } from './sushirolls/sushirolls.component'
import { SushirollsService } from './sushirolls.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AdminFilterPipe } from './admin/admin-filter.pipe';
import { FormsModule } from '@angular/forms';
import { HomeFilterPipe } from './home/home-filter.pipe';
import { CartService } from './cart.service';
import { FooterComponent } from './footer/footer.component';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { Observable } from 'rxjs';
import { ItemComponent } from './item/item/item.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemService } from './item.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: SignInComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'orders', component: OrdenComponent },
  { path: 'history', component: HistoriaComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncabezadoComponent,
    SignInComponent,
    AdminComponent,
    OrdenComponent,
    HistoriaComponent,
    SignUpComponent,
    ForgotComponent,
    SushirollsComponent,
    AdminFilterPipe,
    HomeFilterPipe,
    FooterComponent,
    ItemComponent,
    ItemListComponent,
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AngularFontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule, 
    FormsModule


  ],
  providers: [
    SushirollsService, 
    CartService,
    ItemService
  ],
  bootstrap: [AppComponent],
  entryComponents: [HomeComponent],
  exports: [RouterModule,],

})
export class AppModule { }
