import { NgModule } from '@angular/core';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import { ToasterAdditionsModule } from '../../@common/toaster-additions/toaster-additions.module';
import { Ng2SmartTableAdditionsModule } from '../../@common/ng2-smart-table-additions/ng2-smart-table-additions.module';

import { AssociatesRoutingModule, routedComponents } from './associates-routing.module';
import { AssociatesService } from './associates.service';
import { AssociateDependentsComponent } from './associate-dependents/associate-dependents.component';
import { AssociateWishlistComponent } from './associate-wishlist/associate-wishlist.component';

import { SwitcherComponent } from '../../@common/switcher/switcher.component';
import { GenderSelectorComponent } from '../../@common/gender-selector/gender-selector.component';

@NgModule({
  imports: [
    Ng2SmartTableModule,
    ToasterModule,
    ThemeModule,
    ToasterAdditionsModule,
    Ng2SmartTableAdditionsModule,
    AssociatesRoutingModule,
  ],
  declarations: [
    ...routedComponents,
    AssociateDependentsComponent,
    AssociateWishlistComponent,
    SwitcherComponent,
    GenderSelectorComponent,
  ],
  providers: [
    AssociatesService,
  ],
})
export class AssociatesModule { }
