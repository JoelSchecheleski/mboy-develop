/**
 * CRUD do endpoint {{host}}/Paciente
 * @author Joel Schecheleski
 * @date 28/04/2019
 */
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResourceService} from '../../../ResourceService';
import {PacienteModel} from './pacienteModel';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class PacienteServices extends ResourceService<PacienteModel> {
    private dados: any;
    private client_http: HttpClient;

    constructor(httpClient: HttpClient) {
        super(
            httpClient,
            'Paciente');
    }

    /**
     * Monta a estrutura de dados de pacientes para ser apresentado nos componentes
     * @param file Objeto (registro) selecionado na grid.
     */
    public pacienteData(file: any): Observable<any> {
        this.dados = {};
        this.dados = {
            id: file ? file.id : '',
            nome: file ? file.nome : '',
            endereco: file ? file.endereco : '',
            complemento: file ? file.complemento : '',
            bairro: file ? file.bairro : '',
            cep: file ? file.cep : '',
            nascimento: file ? file.nascimento : '',
            sexo: file ? file.sexo : '',
            estcivil: file ? file.estcivil : '',
            nacional: file ? file.nacional : '',
            cor: file ? file.cor : '',
            cpf: file ? file.cpf : '',
            identidade: file ? file.identidade : '',
            pispasep: file ? file.pispasep : '',
            certidao: file ? file.certidao : '',
            profispaci: file ? file.profispaci : '',
            responsavel: file ? file.responsavel : '',
            cpf_Responsavel: file ? file.cpf_Responsavel : '',
            empresa: file ? file.empresa : '',
            profissao: file ? file.profissao : '',
            ddd: file ? file.ddd : '',
            fone1: file ? file.fone1 : '',
            fone2: file ? file.fone2 : '',
            dddemp: file ? file.dddemp : '',
            foneemp1: file ? file.foneemp1 : '',
            ramal: file ? file.ramal : '',
            segurado: file ? file.segurado : '',
            cpf_Segurado: file ? file.cpf_Segurado : '',
            irg_Segurado: file ? file.irg_Segurado : '',
            nascimento_Segurado: file ? file.nascimento_Segurado : '',
            sexo_Segurado: file ? file.sexo_Segurado : '',
            estcivil_Segurado: file ? file.estcivil_Segurado : '',
            convenio: file ? file.convenio : '',
            matricula: file ? file.matricula : '',
            plano: file ? file.plano : '',
            dtvalcart: file ? file.dtvalcart : '',
            empseguro: file ? file.empseguro : '',
            datcad: file ? file.datcad : '',
            nomemae: file ? file.nomemae : '',
            nomepai: file ? file.nomepai : '',
            religiao: file ? file.religiao : '',
            ctrabalho: file ? file.ctrabalho : '',
            serie: file ? file.serie : '',
            dataobito: file ? file.dataobito : '',
            codusuario: file ? file.codusuario : '',
            dataatual: file ? file.dataatual : '',
            necropsia: file ? file.necropsia : '',
            carteirinha: file ? file.carteirinha : '',
            observacao: file ? file.observacao : '',
            naturalcid: file ? file.naturalcid : '',
            naturaluf: file ? file.naturaluf : '',
            tiposang: file ? file.tiposang : '',
            fatorrh: file ? file.fatorrh : '',
            nacional_R: file ? file.nacional_R : '',
            estcivil_R: file ? file.estcivil_R : '',
            profissao_R: file ? file.profissao_R : '',
            irg_R: file ? file.irg_R : '',
            endereco_R: file ? file.endereco_R : '',
            ddd_R: file ? file.ddd_R : '',
            fone_R: file ? file.fone_R : '',
            cep_R: file ? file.cep_R : '',
            cartaosus: file ? file.cartaosus : '',
            grauinst: file ? file.grauinst : '',
            docobito: file ? file.docobito : '',
            cdusucad: file ? file.cdusucad : '',
            logradourotipo: file ? file.logradourotipo : '',
            numero: file ? file.numero : '',
            etnia: file ? file.etnia : '',
        };

        return this.dados;
    }
}
