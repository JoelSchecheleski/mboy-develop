import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {NgForm, FormGroup, FormControl, FormBuilder, Validator, Validators, FormArray, NgSelectOption} from '@angular/forms';
import {isNullOrUndefined} from '@swimlane/ngx-datatable/release/utils';
import {CreditService} from '../../../../service/credits/creditService';

@Component({
    selector: 'ms-new-credit',
    templateUrl: './new-credit.component.html',
    styleUrls: ['./new-credit.component.scss'],
    providers: [CreditService]
})
export class NewCreditComponent implements OnInit {
    public frmNewCredit: FormGroup;

    public methodPayment = [
        {value: 'credit_card', viewValue: 'Cartão de crédito'},
        {value: 'bank_slip', viewValue: 'Boleto'}
    ]
    selectedPayment: any;

    constructor(
        private api: CreditService,
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
    submit(formulario) {
        if (!isNullOrUndefined(formulario.value.formOfPayment) || !isNullOrUndefined(formulario.value.vlrNewCredit)) {
            console.table(this.data);
            console.table(formulario.value);
        } else {
            console.log('Formulário inválido!');
        }
    }
}
