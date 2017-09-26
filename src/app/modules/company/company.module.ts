import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CompanyComponent } from './company.component';
import { CompanyRouter } from './company.routes';

// Views
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    CompanyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CompanyRouter
  ],
  providers: [],
  entryComponents: [CompanyComponent]
})
export class CompanyModule { }
