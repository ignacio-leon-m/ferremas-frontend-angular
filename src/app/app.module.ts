import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosModule } from './productos/productos.module';
import { TransbankModule } from './transbank/transbank.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductosModule,
    TransbankModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
