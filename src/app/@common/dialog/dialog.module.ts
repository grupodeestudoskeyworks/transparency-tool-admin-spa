import { NgModule } from '@angular/core';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { DialogService } from './dialog.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [
    Ng2SmartTableModule,
    ThemeModule,
  ],
  declarations: [
    ConfirmDialogComponent,
  ],
  providers: [
    DialogService,
  ],
  entryComponents: [
    ConfirmDialogComponent,
  ],
})
export class DialogModule { }
