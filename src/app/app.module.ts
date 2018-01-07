import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'app/header.component';
import { FooterComponent } from 'app/footer.component';
import { StructuralComponent } from 'app/components/structural.component';
import { PropertyEventsComponent } from 'app/components/propertyevents.component';
import { CustomMessageComponent } from 'app/components/custom-message.component';
import { ProductDetailsComponent } from 'app/components/product-details.component';
import { ProductsComponent } from 'app/products/products.component';
import { ToolBarComponent } from 'app/contents/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PropertyEventsComponent,
    StructuralComponent,
    CustomMessageComponent,
    ProductDetailsComponent,
    ProductsComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
