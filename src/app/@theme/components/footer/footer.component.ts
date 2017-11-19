import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Criado com <i class="fa fa-heart"></i> pelo <b><a href="https://github.com/grupodeestudoskeyworks"
      target="_blank">Grupo de Estudos Keyworks</a></b> &copy; 2017</span>
    <div class="socials">
      <a href="https://github.com/grupodeestudoskeyworks/transparency-tool-admin-spa" target="_blank" class="ion ion-social-github"></a>
    </div>
  `,
})
export class FooterComponent {
}
