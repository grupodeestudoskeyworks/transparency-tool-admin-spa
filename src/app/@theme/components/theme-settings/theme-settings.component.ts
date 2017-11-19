import { Component, Input, OnInit } from '@angular/core';

import { NbThemeService } from '@nebular/theme';
import { NbJSThemeOptions } from '@nebular/theme/services/js-themes/theme.options';

import { StateService } from '../../../@core/data/state.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';

class AvailableTheme {
  name: string;
  selected: boolean;
}

@Component({
  selector: 'ngx-theme-settings',
  templateUrl: './theme-settings.component.html',
  styleUrls: [ './theme-settings.component.scss' ],
})
export class ThemeSettingsComponent {

  theme: NbJSThemeOptions;

  layouts = [];
  sidebars = [];

  availableThemes: AvailableTheme[] = [
    {
      name: 'default',
      selected: true,
    },
    {
      name: 'cosmic',
      selected: false,
    },
  ];

  constructor(
    protected stateService: StateService,
    protected themeService: NbThemeService,
    protected analyticsService: AnalyticsService,
  ) {
    this.stateService.getLayoutStates()
      .subscribe((layouts: any[]) => this.layouts = layouts);

    this.stateService.getSidebarStates()
      .subscribe((sidebars: any[]) => this.sidebars = sidebars);

    this.themeService.getJsTheme()
      .subscribe((theme: NbJSThemeOptions) => this.theme = theme);
  }

  layoutSelect(layout: any): boolean {
    this.layouts = this.layouts.map((l: any) => {
      l.selected = false;
      return l;
    });

    layout.selected = true;
    this.stateService.setLayoutState(layout);
    return false;
  }

  sidebarSelect(sidebars: any): boolean {
    this.sidebars = this.sidebars.map((s: any) => {
      s.selected = false;
      return s;
    });

    sidebars.selected = true;
    this.stateService.setSidebarState(sidebars);
    return false;
  }

  themeSelect(theme: AvailableTheme): boolean {
    theme.selected = true;

    this.availableThemes.filter(t => t !== theme)
      .forEach(t => t.selected = false);

    this.themeService.changeTheme(theme.name);
    this.analyticsService.trackEvent('switchTheme');
    return false;
  }
}
