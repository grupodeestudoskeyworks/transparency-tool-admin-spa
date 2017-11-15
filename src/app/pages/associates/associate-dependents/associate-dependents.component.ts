import { Component, OnInit } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'associate-dependents',
  templateUrl: './associate-dependents.component.html',
  styleUrls: [ './associate-dependents.component.scss' ],
})
export class AssociateDependentsComponent implements OnInit {
  settings = {
    noDataMessage: 'Nenhum dependente informado.',
    actions: {
      columnTitle: 'Ações',
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
    },
    columns: {
      name: {
        title: 'Nome',
        type: 'text',
      },
      age: {
        title: 'Idade',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  ngOnInit() {
    this.source.load([]);
  }
}
