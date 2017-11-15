import { Component, OnInit } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'associate-wishlist',
  templateUrl: './associate-wishlist.component.html',
  styleUrls: [ './associate-wishlist.component.scss' ],
})
export class AssociateWishlistComponent implements OnInit {
  settings = {
    noDataMessage: 'Nenhuma dica de presente informada.',
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
      description: {
        title: 'Dica',
        type: 'text',
      },
      whereToFind: {
        title: 'Onde encontrar',
        type: 'text',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  ngOnInit() {
    this.source.load([]);
  }
}
