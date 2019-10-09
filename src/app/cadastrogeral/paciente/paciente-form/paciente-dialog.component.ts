import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormGroup, FormBuilder} from '@angular/forms';
import {isNullOrUndefined} from '@swimlane/ngx-datatable/release/utils';

import Swal from 'sweetalert2'
import {PacienteServices} from '../paciente-shared/paciente.services';
import {ReligiaoServices} from '../../../modules/servicos/religiao.services';
import {CorServices} from '../../../modules/servicos/cor.services';
import {NacionalServices} from '../../../modules/servicos/nacional.services';
import {EstadocivilServices} from '../../../modules/servicos/estadocivil.services';

@Component({
    templateUrl: './paciente-form.html',
    providers: [PacienteServices,
                ReligiaoServices,
                CorServices,
                NacionalServices,
                EstadocivilServices]
})
export class PacienteDialogComponent implements OnInit {
    private status: any;

    public today = new Date();
    public anos;
    public nomePac;
    public sex = [{id: 1, descricao: 'Masculino'}, {id: 2, descricao: 'Feminino'}];
    public selectedSexo: any;
    public selectedReligiao: any;
    public selectedCor: any;
    public selectedNacional: any;
    public selectedEstCivil: any;

    public marital: any;
    public nationality: any;
    public religion: any;
    public color: any;
    public formulario: FormGroup;

    constructor(
        public estcivilservice: EstadocivilServices,
        public nacionalservice: NacionalServices,
        public religiao: ReligiaoServices,
        public corservice: CorServices,
        public api: PacienteServices,
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<PacienteDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data,
    ) {
        if (!isNullOrUndefined(data.descricao) && data.descricao !== '') {
            this.status = 'Editando';
        } else {
            this.status = 'Novo';
        }
    }

    ngOnInit() {
        // Busca todos os tipos de estado civil cadastrado
        this.estcivilservice.GET().subscribe(data => {
            this.marital = data;
            console.log(this.marital);
        });

        // Busca todas as religiões dacadastradas no sistema
        this.religiao.GET().subscribe(data => {
            this.religion = data;
            console.table(this.religion);
        });

        // Busca todas as cores de pele
        this.corservice.GET().subscribe(data => {
            this.color = data;
            console.table(this.color);
        });

        // Busca todas as nacionalidades
        this.nacionalservice.GET().subscribe(data => {
            this.nationality = data;
            console.table(this.nationality);
        });

        // Formulário de cadastro de pacientes
        this.formulario = this.formBuilder.group({
            id: this.data.id ? this.data.id : '',
            nome: this.data.nome ? this.data.nome : '',
            endereco: this.data.endereco ? this.data.endereco : '',
            complemento: this.data.complemento ? this.data.complemento : '',
            bairro: this.data.bairro ? this.data.bairro : '',
            cep: this.data.cep ? this.data.cep : '',
            nascimento: this.data.id ? this.data.nascimento : '',
            sexo: this.data.sexo ? this.data.sexo : '',
            estcivil: this.data.estcivil ? this.data.estcivil : '',
            nacional: this.data.nacional ? this.data.nacional : '',
            cor: this.data.cor ? this.data.cor : '',
            cpf: this.data.cpf ? this.data.cpf : '',
            identidade: this.data.identidade ? this.data.identidade : '',
            pispasep: this.data.pispasep ? this.data.pispasep : '',
            certidao: this.data.certidao ? this.data.certidao : '',
            profispaci: this.data.profispaci ? this.data.profispaci : '',
            responsavel: this.data.responsavel ? this.data.responsavel : '',
            cpf_Responsavel: this.data.cpf_Responsavel ? this.data.cpf_Responsavel : '',
            empresa: this.data.empresa ? this.data.empresa : '',
            profissao: this.data.profissao ? this.data.profissao : '',
            ddd: this.data.ddd ? this.data.ddd : '',
            fone1: this.data.fone1 ? this.data.fone1 : '',
            fone2: this.data.fone2 ? this.data.fone2 : '',
            dddemp: this.data.dddemp ? this.data.dddemp : '',
            foneemp1: this.data.foneemp1 ? this.data.foneemp1 : '',
            ramal: this.data.ramal ? this.data.ramal : '',
            segurado: this.data.segurado ? this.data.segurado : '',
            cpf_Segurado: this.data.cpf_Segurado ? this.data.cpf_Segurado : '',
            irg_Segurado: this.data.irg_Segurado ? this.data.irg_Segurado : '',
            nascimento_Segurado: this.data.nascimento_Segurado ? this.data.nascimento_Segurado : '',
            sexo_Segurado: this.data.sexo_Segurado ? this.data.sexo_Segurado : '',
            estcivil_Segurado: this.data.estcivil_Segurado ? this.data.estcivil_Segurado : '',
            convenio: this.data.convenio ? this.data.convenio : '',
            matricula: this.data.matricula ? this.data.matricula : '',
            plano: this.data.plano ? this.data.plano : '',
            dtvalcart: this.data.dtvalcart ? this.data.dtvalcart : '',
            empseguro: this.data.empseguro ? this.data.empseguro : '',
            datcad: this.data.datcad ? this.data.datcad : '',
            nomemae: this.data.nomemae ? this.data.nomemae : '',
            nomepai: this.data.nomepai ? this.data.nomepai : '',
            religiao: this.data.religiao ? this.data.religiao : '',
            ctrabalho: this.data.ctrabalho ? this.data.ctrabalho : '',
            serie: this.data.serie ? this.data.serie : '',
            dataobito: this.data.dataobito ? this.data.dataobito : '',
            codusuario: this.data.codusuario ? this.data.codusuario : '',
            dataatual: this.data.dataatual ? this.data.dataatual : '',
            necropsia: this.data.necropsia ? this.data.necropsia : '',
            carteirinha: this.data.carteirinha ? this.data.carteirinha : '',
            observacao: this.data.observacao ? this.data.observacao : '',
            naturalcid: this.data.naturalcid ? this.data.naturalcid : '',
            naturaluf: this.data.naturaluf ? this.data.naturaluf : '',
            tiposang: this.data.tiposang ? this.data.tiposang : '',
            fatorrh: this.data.fatorrh ? this.data.fatorrh : '',
            nacional_R: this.data.nacional_R ? this.data.nacional_R : '',
            estcivil_R: this.data.estcivil_R ? this.data.estcivil_R : '',
            profissao_R: this.data.profissao_R ? this.data.profissao_R : '',
            irg_R: this.data.irg_R ? this.data.irg_R : '',
            endereco_R: this.data.endereco_R ? this.data.endereco_R : '',
            ddd_R: this.data.ddd_R ? this.data.ddd_R : '',
            fone_R: this.data.fone_R ? this.data.fone_R : '',
            cep_R: this.data.cep_R ? this.data.cep_R : '',
            cartaosus: this.data.cartaosus ? this.data.cartaosus : '',
            grauinst: this.data.grauinst ? this.data.grauinst : '',
            docobito: this.data.docobito ? this.data.docobito : '',
            cdusucad: this.data.cdusucad ? this.data.cdusucad : '',
            logradourotipo: this.data.logradourotipo ? this.data.logradourotipo : '',
            numero: this.data.numero ? this.data.numero : '',
            etnia: this.data.etnia ? this.data.etnia : '',
            estadocivilModel: this.data.estadocivilModel ? this.data.estadocivilModel : '',
            nacionalModel: this.data.nacionalModel ? this.data.nacionalModel : '',
            corModel: this.data.corModel ? this.data.corModel : '',
            religiaoModel: this.data.religiaoModel ? this.data.religiaoModel : '',
            convenioModel: this.data.convenioModel ? this.data.convenioModel : ''
        });
        this.nomePac = this.data.nome;
        this.anos = this.idade(this.data.nascimento);
        this.selectedSexo = this.data.sexo;
        this.selectedReligiao = this.data.religiao;
        this.selectedCor = this.data.cor;
        this.selectedNacional = this.data.nacional;
        this.selectedEstCivil = this.data.estcivil;

    }

    public compareObjects(o1: any, o2: any): boolean {
        return o1.name === o2.name && o1.id === o2.id;
    }

    public compareItems(i1, i2) {
        return i1 && i2 && i1.id === i2.id;
    }


    submit(form) {
        if (this.status === 'Novo') {
            // console.log('Editando: ', form.value)
            this.api.POST(form.value)
                .subscribe(data => {
                        console.log('Objeto inserido!', data);
                        this.dialogRef.close(`${form.value.descricao}`);
                    }
                );
        }
        if (this.status === 'Editando') {
            Swal.fire({
                title: 'Deseja realmente atualizar?',
                text: '',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#038f9e',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Salvar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.value) {
                    this.api.PUT(form.value)
                        .subscribe(data => {
                                console.log('Objeto atualizado!', data);
                                this.dialogRef.close(`${form.value.descricao}`);
                            }
                        );
                }
            });
        }
        // this.dialogRef.close(`${form.value.descricao}`);
    }

    getErrorMessage() {
        return this.formulario['nome'].hasError('required') ? 'Nome é requerido' : '';
    }

    private idade(data) {
        const atualmente = new Date();
        const nascimento = new Date(data.split('/').reverse().join('/'));
        let ano = atualmente.getFullYear() - nascimento.getFullYear();
        let mes: any;
        let dia: any;

        if ((atualmente.getMonth() + 1) >= (nascimento.getMonth() + 1)) {
            mes = (atualmente.getMonth() + 1) - (nascimento.getMonth() + 1);
        } else {
            mes = 12 + (atualmente.getMonth() + 1) - (nascimento.getMonth() + 1);
            ano--;
        }

        if (atualmente.getDate() >= nascimento.getDate()) {
            dia = atualmente.getDate() - nascimento.getDate();
        } else {
            dia = 31 + atualmente.getDate() - nascimento.getDate();
            mes--;

            if (mes < 0) {
                mes = 11;
                ano--;
            }
        }
        return ((ano > 1) ? ano + ' Anos' : (ano === 1) ? ano + ' Ano' :
            (mes > 1) ? mes + ' Meses' : (mes === 1) ? mes + ' Mês' :
                (dia > 1) ? dia + ' Dias' : (dia === 1) ? dia + ' Dia' : 'Hoje');
    }
}
