import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { NgForm, FormGroup, FormControl, FormBuilder, Validator, Validators, FormArray, NgSelectOption } from '@angular/forms';

@Component({
    selector: 'ms-new-credit',
    templateUrl: './new-credit.component.html',
    styleUrls: ['./new-credit.component.scss']
})
export class NewCreditComponent implements OnInit {
    public frmNewCredit: FormGroup;

    public methodPayment = [
        {value: 'credit_card', viewValue: 'Cartão de crédito'},
        {value: 'bank_slip', viewValue: 'Boleto'}
    ]
    selectedPayment: any;

    constructor(
        private formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) private data,
        public dialogNewCredit: MatDialogRef<NewCreditComponent>
    ) {
    }

    ngOnInit() {
      // console.table(this.data);
      this.frmNewCredit = this.formBuilder.group({
        vlrNewCredit: [null, Validators.required],
        formOfPayment: [null, Validators.required],
      });
    }

    // Submit do formulário
    submit(form) {
        console.log(JSON.stringify(form.value));
    }
}
