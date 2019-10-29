import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {PageTitleService} from '../../core/page-title/page-title.service';

import {GridOptions} from 'ag-grid-community';
import 'ag-grid-community';
import {IdiomaPTBR} from '../../idioma-PTBR';
import {isNullOrUndefined} from 'util';
import {MatButton, MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';

import {filter} from 'rxjs/operators';
import Swal from 'sweetalert2';

import {HttpClient} from '@angular/common/http';
import {Config} from '../../app-config';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {SweepstakesServices} from '../sweepstakes/sweepstakes-shared/sweepstakes-services';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'ms-sweepstakes-report',
    templateUrl: './sweepstakes-report.html',
    providers: [SweepstakesServices]
})
// tslint:disable-next-line:component-class-suffix
export class SweepstakesReportComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    popUpNewUserResponse: any;
    popUpEditUserResponse: any;
    popUpDeleteUserResponse: any;
    userSweepstakesList: any [];
    public dados: any;

    // Entrada de dados do componente pai
    @Input() data: any;
    @Output() messageToEmit = new EventEmitter<string>();

    public displayedColumns: string [] = ['name', 'email', 'phone'];

    constructor(public _http: HttpClient,
                public api: SweepstakesServices,
                private translate: TranslateService,
                private pageTitleService: PageTitleService,
                private dialog: MatDialog,
                private snackBar: MatSnackBar,
                private route: ActivatedRoute,
                private router: Router) {

    }

    ngOnInit() {
        this.getInformationSweepstakes();
    }

    // Busca todas as informações de um sorteio realizado
    getInformationSweepstakes() {
        this.dados =  new MatTableDataSource<any>(this.data['winners']);
        // console.table(this.dados);
    }

    /**
     * Envia uma mensagem para o componente que o chamou
     * @param message Mensagem a ser enviado
     */
    sendMessageToParent(message: string) {
        this.messageToEmit.emit(message)
    }
}
