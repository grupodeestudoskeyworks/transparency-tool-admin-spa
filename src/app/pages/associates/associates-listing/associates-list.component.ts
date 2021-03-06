import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LocalDataSource } from 'ng2-smart-table';

import { DialogService } from '../../../@common/dialog/dialog.service';
import { ToasterConfigService } from '../../../@common/toaster-additions/toaster-config.service';
import { ToasterFactoryService } from '../../../@common/toaster-additions/toaster-factory.service';
import { EmailLinkViewCellComponent } from '../../../@common/ng2-smart-table-additions/email-link-view-cell.component';
import { ToasterService } from 'angular2-toaster';
import { AssociatesService } from '../associates.service';

import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'associates-list',
  templateUrl: './associates-list.component.html',
  styles: [ './associates-list.component.scss' ],
})
export class AssociatesListComponent implements OnInit {

  settings = {
    mode: 'external',
    noDataMessage: 'Nenhum associado para exibir aqui.',
    actions: {
      columnTitle: 'Ações',
      add: false,
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Associado',
        type: 'text',
      },
      birthday: {
        title: 'Data de nascimento',
        type: 'text',
        filter: false,
        valuePrepareFunction: (cell: Date, row) =>
          cell.toLocaleDateString(),
      },
      phone: {
        title: 'Telefone',
        type: 'text',
      },
      email: {
        title: 'E-mail',
        type: 'custom',
        renderComponent: EmailLinkViewCellComponent,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService,
    private toasterService: ToasterService,
    private toasterConfigService: ToasterConfigService,
    private toasterFactoryService: ToasterFactoryService,
    private associatesService: AssociatesService,
  ) { }

  ngOnInit() {
    this.getAssociates();
  }

  getAssociates() {
    this.associatesService.getAssociates(error =>
      this.toasterService.popAsync(
        this.toasterFactoryService.error(error),
      ),
    )
      .subscribe(data => this.source.load(data));
  }

  goToDetails(event): void {
    this.router.navigate(
      ['../detail', event.data.id ],
      { relativeTo: this.route },
    );
  }

  deleteRecord(event): void {
    this.dialogService.confirm({
      header: 'Confirmar exclusão',
      content: 'Deseja realmente excluir o associado?',
      onConfirm: () =>
        this.toasterService.popAsync(
          this.toasterFactoryService.success('Associado excluído com sucesso.'),
        ),
      onCancel: () => {
        alert('cancelou');
      },
    });
  }
}
