import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { CompanyModule } from './modules/company/company.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }
