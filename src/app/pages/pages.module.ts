import { NgModule } from '@angular/core';
import { NbMenuModule, NbAlertModule,NbSelectModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';



@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    ECommerceModule,
    MiscellaneousModule,
    NbAlertModule,
    NbSelectModule,


  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
