import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ConfirmDialogOptions } from './confirm-dialog/confirm-dialog-options';

@Injectable()
export class DialogService {
  constructor(private modalService: NgbModal) {

  }

  confirm(confirmDialogOptions: ConfirmDialogOptions) {
    const activeModal = this.modalService.open(ConfirmDialogComponent, {
      size: 'sm', container: 'nb-layout',
    });

    activeModal.componentInstance.options = confirmDialogOptions;
  }
}
