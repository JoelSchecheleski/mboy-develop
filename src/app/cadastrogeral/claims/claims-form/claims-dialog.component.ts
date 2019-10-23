import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {isNullOrUndefined} from '@swimlane/ngx-datatable/release/utils';

import Swal from 'sweetalert2'
import {MatOptionSelectionChange} from '@angular/material/core';
import {ClaimsServices} from '../claims-shared/claims.services';

@Component({
    templateUrl: './claims-form.html',
    providers: [ClaimsServices]
})
export class ClaimsDialogComponent implements OnInit {
    public formulario: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<ClaimsDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data,
    ) {

    }

    ngOnInit() {

    }

    submit(form) {

    }
}
