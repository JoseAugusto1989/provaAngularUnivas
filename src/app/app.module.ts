import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListaConvidadosComponent } from './lista-convidados/lista-convidados.component';
import { ListaPipe } from './lista.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaConvidadosComponent,
    ListaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
