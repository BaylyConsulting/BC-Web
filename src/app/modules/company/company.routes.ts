import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';

// Views
import {HomeComponent} from './views/home/home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'company', component: CompanyComponent,
        children: [
          {path: 'home', component: HomeComponent}
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class CompanyRouter { }
