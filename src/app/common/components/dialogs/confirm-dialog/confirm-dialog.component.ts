import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmDialogOptions } from './confirm-dialog-options';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent extends ConfirmDialogOptions {
  constructor(private activeModal: NgbActiveModal) {
    super();
  }

  confirm(): void {
    this.onConfirm();
    this.activeModal.close();
  }

  cancel(): void {
    if (this.onCancel instanceof Function)
      this.onCancel();
    this.activeModal.close();
  }

  closeModal() {
    this.activeModal.close();
  }
}