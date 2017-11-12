import { DialogOptions } from "../dialog-options";

export class ConfirmDialogOptions extends DialogOptions {
  yesButtonLabel?: string;
  noButtonLabel?: string;

  onConfirm: VoidFunction;
  onCancel?: VoidFunction;
}