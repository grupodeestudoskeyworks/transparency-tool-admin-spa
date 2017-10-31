import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';
import { DialogsService } from '../../../common/components/dialogs/dialogs.service';

@Component({
  selector: 'associates-listing',
  templateUrl: './associates-listing.component.html',
  styles: [ './associates-listing.component.scss' ],
})
export class AssociatesListingComponent {

  settings = {
    mode: 'external',
    actions: {
      columnTitle: 'Ações',
      add: false
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
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService, private dialogsService: DialogsService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  goToDetails(event): void {
    alert(`visualizando registro de id ${event.data.id}`);
  }

  deleteRecord(event): void {
    this.dialogsService.confirm({
      header: 'Confirmar exclusão',
      content: 'Deseja realmente excluir o associado?',
      onConfirm: () => {
        alert('confirmou')
      },
      onCancel: () => {
        alert('cancelou')
      }
    });
  }
}
