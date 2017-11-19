import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssociatesComponent } from './associates.component';
import { AssociatesListComponent } from './associates-listing/associates-list.component';
import { AssociatesDetailComponent } from './associate-detail/associates-detail.component';

const routes: Routes = [{
  path: '',
  component: AssociatesComponent,
  children: [
    {
      path: 'list',
      component: AssociatesListComponent,
    },
    {
      path: 'edit/:id',
      component: AssociatesDetailComponent,
    },
    {
      path: 'create',
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
  AssociatesListComponent,
  AssociatesDetailComponent,
];
