import { Injectable } from '@angular/core';

import { Toast, BodyOutputType } from 'angular2-toaster';

@Injectable()
export class ToasterFactoryService {
  success(message: string): Toast {
    return {
      type: 'success',
      title: 'Sucesso',
      body: message,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
  }

  error(message: string): Toast {
    return {
      type: 'error',
      title: 'Erro',
      body: message,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
  }
}
