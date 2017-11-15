import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssociatesComponent } from './associates.component';
import { AssociatesListingComponent } from './associates-listing/associates-listing.component';
import { AssociatesDetailComponent } from './associate-detail/associates-detail.component';

const routes: Routes = [{
  path: '',
  component: AssociatesComponent,
  children: [
    {
      path: 'listing',
      component: AssociatesListingComponent,
    },
    {
      path: 'detail/:id',
      component: AssociatesDetailComponent,
    },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AssociatesRoutingModule {

}

export const routedComponents = [
  AssociatesComponent,
  AssociatesListingComponent,
  AssociatesDetailComponent,
];
