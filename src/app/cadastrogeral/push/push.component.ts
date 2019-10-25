import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {PushServices} from './push-shared/push.services';
import {StateServices} from '../cidades/cidades-shared/state.services';
import {CidadeServices} from '../cidades/cidades-shared/cidade.services';
import {Config} from '../../app-config';
import Swal from 'sweetalert2';

@Component({
    selector: 'ms-push',
    templateUrl: './push.component.html',
    styleUrls: ['./push.component.scss'],
    providers: [PushServices, StateServices, CidadeServices]
})
export class PushComponent implements OnInit {
    public formulario: FormGroup;
    public states: any;
    public citys: any;
    public selectedState: any;
    public citySelected: any;

    constructor(
        private _http: HttpClient,
        private formBuilder: FormBuilder,
        private pushService: PushServices,
        private stateService: StateServices,
        private cityService: CidadeServices
    ) {
    }

    ngOnInit() {
        // Definição do formulário
        this.formulario = this.formBuilder.group({
            id: [],
            state: [null, Validators.required],
            city: [],
            message: [],
        });

        // Busca todas os estados
        this.getAllstates();
    }

    /**
     * Limpa p form
     */
    public limpar() {
        this.formulario.reset();
    }

    /**
     * Busca todos os estados
     */
    private getAllstates() {
        this.stateService.getTodos()
            .subscribe(data => {
                if (data) {
                    this.states = data;
                }
            })
    }

    /**
     * Busca todas as cidades com base no estado
     * @param state_id Código do estado
     */
    public selectedStateLoadCitys(abreviation: string) {
        this.selectedState = abreviation;
        this.citys = this.getCitysOfState(abreviation);
        console.log(this.citys);
    }

    private getCitysOfState(abreviation: string): any {
        const endpoint = new Config().getEndpoint();
        return this._http.get(`${endpoint}state/state-cities/${abreviation}`)
            .subscribe(
                data => {
                    console.log(data['cities']);
                    this.citys = data['cities'];
                },
            );
    }

    /**-
     * Marca a cidade que foi selecionada
     * @param name Nome da cidade selecionada
     */
    public selectedCity(name: string) {
        this.citySelected = name;
    }

    /**
     * Persiste os dados no servidor do redis
     * @param form Formulário a ser submetido
     */
    public submit(form) {
        const endpoint = new Config().getEndpoint();
        const body = {
            abbreviation: this.selectedState,
            city: this.citySelected,
            message: form.value.message
        }
        this._http.put(`${endpoint}push`, JSON.stringify(body))
            .subscribe(data => {
                if (data['abbreviation'] != null) {
                    Swal.fire({
                        position: 'center',
                        type: 'success',
                        title: 'Push enviado com sucesso',
                        showConfirmButton: false,
                        animation: false,
                        timer: 1500
                    });
                } else {
                    Swal.fire({
                        position: 'center',
                        type: 'error',
                        title: 'Ops, algo deu errado',
                        showConfirmButton: false,
                        animation: false,
                        timer: 1500
                    });
                }
            })
    }
}
