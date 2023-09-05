import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule} from "@angular/forms"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { NaviComponent } from './components/navi/navi.component';
import { CategoryComponent } from './components/category/category.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './filter-pipe.pipe';


import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NaviComponent,
    CategoryComponent,
    VatAddedPipe,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right",
     
    })
  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
