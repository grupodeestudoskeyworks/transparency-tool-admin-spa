import { Injectable } from '@angular/core';

import { ToasterConfig } from 'angular2-toaster';

@Injectable()
export class ToasterConfigService {
  private readonly _defaultConfig = new ToasterConfig({
    positionClass: 'toast-top-right',
    timeout: 5000,
    newestOnTop: true,
    tapToDismiss: true,
    preventDuplicates: false,
    animation: 'flyRight',
    limit: 5,
  });

  getDefaultConfig(): ToasterConfig {
    return this._defaultConfig;
  }
}
