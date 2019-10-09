/**
 * CRUD do endpoint {{host}}/Paciente
 * @author Joel Schecheleski
 * @date 28/04/2019
 */

import {Resource} from '../../../Resource';

export class PacienteModel extends Resource {
    public nome?: string;
    public endereco?: string;
    public complemento?: string;
    public bairro?: string;
    public cep?: number;
    public nascimento?: string;
    public sexo?: number;
    public estcivil?: number;
    public nacional?: number;
    public cor?: number;
    public cpf?: number;
    public identidade?: number;
    public pispasep?: number;
    public certidao?: number;
    public profispaci?:  string;
    public responsavel?: string;
    public cpf_Responsavel?: number;
    public empresa?: string;
    public profissao?: string;
    public ddd?:  number;
    public fone1?: number;
    public fone2?: number;
    public dddemp?:  number;
    public foneemp1?:  number;
    public ramal?: number;
    public segurado?: string;
    public cpf_Segurado?: number;
    public irg_Segurado?: number;
    public nascimento_Segurado?: string;
    public sexo_Segurado?: number;
    public estcivil_Segurado?: number;
    public convenio?: number;
    public matricula?: number;
    public plano?: number;
    public dtvalcart?: string;
    public empseguro?: number;
    public datcad?: string;
    public nomemae?: string;
    public nomepai?: string;
    public religiao?: number;
    public ctrabalho?: number;
    public serie?: string;
    public dataobito?: string;
    public codusuario?: number;
    public dataatual?: string;
    public necropsia?: number;
    public carteirinha?: number;
    public observacao?: string;
    public naturalcid?: string;
    public naturaluf?: string;
    public tiposang?: string;
    public fatorrh?: string;
    public nacional_R?:  number;
    public estcivil_R?: number;
    public profissao_R?: string;
    public irg_R?: number;
    public endereco_R?: string;
    public ddd_R?:   number;
    public fone_R?: number;
    public cep_R?: number;
    public cartaosus?: number;
    public grauinst?: number;
    public docobito?: number;
    public cdusucad?: number;
    public logradourotipo?: number;
    public numero?: number;
    public etnia?: string;
    public estadocivilModel?: any;
    public nacionalModel?: any;
    public corModel?: any;
    public religiaoModel?: any;
    public convenioModel?: any
}
