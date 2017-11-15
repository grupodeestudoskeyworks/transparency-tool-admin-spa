import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { ToasterService } from 'angular2-toaster';

import { ToasterConfigService } from '../../../@common/toaster-additions/toaster-config.service';
import { ToasterFactoryService } from '../../../@common/toaster-additions/toaster-factory.service';
import { AssociatesService } from '../associates.service';
import { Associate } from '../associate';
import { Gender } from '../../../@common/gender-selector/gender-enum';

@Component({
  selector: 'associates-detail',
  templateUrl: './associates-detail.component.html',
  styleUrls: [ './associates-detail.component.scss' ],
})
export class AssociatesDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private toasterService: ToasterService,
    private toasterConfigService: ToasterConfigService,
    private toasterFactoryService: ToasterFactoryService,
    private associatesService: AssociatesService,
  ) { }

  associate: Associate;

  ngOnInit() {
    this.getAssociate();
  }

  getAssociate() {
    const id = this.route.snapshot.paramMap.get('id');

    this.associatesService.getAssociate(id, error =>
      this.toasterService.popAsync(
        this.toasterFactoryService.error(error),
      ),
    )
      .subscribe(associate => this.associate = associate);
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.controls[field];
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  getControlValidationClasses(formControl: FormControl) {
    const controlIsValid = formControl.valid
      && (formControl.dirty || formControl.touched);

    const controlIsInvalid = formControl.invalid
      && (formControl.dirty || formControl.touched);

    return {
      'form-control-danger': controlIsInvalid,
      'form-control-success': controlIsValid,
    };
  }

  onSubmit(formGroup: FormGroup) {
    if (!formGroup.valid) {
      this.validateAllFormFields(formGroup);
      this.toasterService.popAsync(
        this.toasterFactoryService.error('Verifique os campos com erro antes de continuar.'),
      );

      return;
    }

    this.toasterService.popAsync(
      this.toasterFactoryService.success('Associado cadastrado com sucesso!'),
    );
  }
}
