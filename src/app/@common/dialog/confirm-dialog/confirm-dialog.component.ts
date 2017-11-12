import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmDialogOptions } from './confirm-dialog-options';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent {
  constructor(private activeModal: NgbActiveModal) {
  }

  options: ConfirmDialogOptions;

  get yesButtonLabel(): string { 
    return this.options.yesButtonLabel || 'Sim';
  }

  get noButtonLabel(): string { 
    return this.options.noButtonLabel || 'Não';
  }

  confirm(): void {
    this.options.onConfirm();
    this.activeModal.close();
  }

  cancel(): void {
    if (this.options.onCancel instanceof Function)
      this.options.onCancel();
    this.activeModal.close();
  }

  closeModal() {
    this.activeModal.close();
  }
}