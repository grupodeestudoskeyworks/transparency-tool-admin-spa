import { DialogOptions } from "../dialog-options";

export class ConfirmDialogOptions extends DialogOptions {
  yesButtonLabel?: string = 'Sim';
  noButtonLabel?: string = 'Não';

  onConfirm: VoidFunction;
  onCancel?: VoidFunction;
}