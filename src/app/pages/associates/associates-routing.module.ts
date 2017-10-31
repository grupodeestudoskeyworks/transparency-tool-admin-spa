import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssociatesComponent } from './associates.component';
import { AssociatesListingComponent } from './associates-listing/associates-listing.component';

const routes: Routes = [{
  path: '',
  component: AssociatesComponent,
  children: [{
    path: 'listing',
    component: AssociatesListingComponent
  }],
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
  AssociatesListingComponent
];