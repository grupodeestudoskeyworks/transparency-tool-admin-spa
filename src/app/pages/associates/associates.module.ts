import { NgModule } from '@angular/core';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { AssociatesRoutingModule, routedComponents } from './associates-routing.module';

@NgModule({
  imports: [
    Ng2SmartTableModule,
    ThemeModule,
    AssociatesRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class AssociatesModule { }
