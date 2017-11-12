import { NgModule } from '@angular/core';

import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import { ToasterConfigService } from './toaster-config.service';
import { ToasterFactoryService } from './toaster-factory.service';

@NgModule({
  imports: [
    ThemeModule,
    ToasterModule,
  ],
  declarations: [],
  providers: [
    ToasterConfigService,
    ToasterFactoryService,
  ],
})
export class ToasterAdditionsModule { }