import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ConfirmDialogOptions } from './confirm-dialog/confirm-dialog-options';

@Injectable()
export class DialogsService {
  constructor(private modalService: NgbModal) {
    
  }

  confirm(confirmDialogOptions: ConfirmDialogOptions) {
    const activeModal = this.modalService.open(ConfirmDialogComponent, { 
      size: 'sm', container: 'nb-layout' 
    });

    for (const option in confirmDialogOptions) {
      activeModal.componentInstance[option] = confirmDialogOptions[option];
    }
  }
}