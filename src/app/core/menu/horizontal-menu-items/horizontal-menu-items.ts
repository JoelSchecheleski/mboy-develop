import {Injectable} from '@angular/core';

export interface ChildrenItems {
    state: string;
    name: string;
    type?: string;
    active?: boolean;
}

export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
    active?: boolean;
    children?: ChildrenItems[];
}

const MENUITEMS = [
    // {
    //     state: 'vertical',
    //     name: 'Vertical Menu',
    //     type: 'button',
    //     icon: ''
    // },

    // ================================== GERAL ===============================
    {
        name: 'General',
        type: 'sub',
        class: 'group-title',
        icon: '',
        active: true,
        children: [
            // {
            //     state: 'dashboard',
            //     name: 'DASHBOARD',
            //     type: 'subChild',
            //     icon: 'explore',
            //     active: true,
            //     children: [
            //         {state: 'saas', type: 'link', name: 'SAAS', active: true},
            //         {state: 'web-analytics', type: 'link', name: 'WEB ANALYTICS', active: true}
            //     ]
            // },
            // {
            //     state: 'courses',
            //     name: 'COURSES',
            //     type: 'subChild',
            //     icon: 'book',
            //     active: true,
            //     children: [
            //         {state: 'courses', name: 'COURSES', type: 'link', active: true},
            //         {state: 'courses-list', name: 'COURSES LIST', type: 'link', active: true},
            //         {state: 'course-detail', name: 'COURSE DETAIL', type: 'link', active: true},
            //         {state: 'signin', name: 'SIGN IN', type: 'link', active: true},
            //         {state: 'payment', name: 'PAYMENT', type: 'link', active: true}
            //     ]
            // },
            // {
            //     state: 'ecommerce',
            //     name: 'E-COMMERCE',
            //     type: 'subChild',
            //     icon: 'explore',
            //     active: true,
            //     children: [
            //         {state: 'shop', type: 'link', name: 'SHOP', active: true},
            //         {state: 'cart', type: 'link', name: 'CART', active: true},
            //         {state: 'checkout', type: 'link', name: 'CHECKOUT', active: true},
            //         {state: 'cards', type: 'link', name: 'CARDS', active: true},
            //         {state: 'invoice', type: 'link', name: 'INVOICE', active: true}
            //     ]
            // },
            // {
            //     state: 'inbox',
            //     name: 'INBOX',
            //     type: 'link',
            //     icon: 'mail',
            //     active: true
            // },
            {
                state: 'chat',
                name: 'CHAT',
                type: 'link',
                icon: 'chat',
                active: true
            },
            {
                state: 'calendar',
                name: 'CALENDAR',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'patients', // Cadastro de Pacientes
                name: 'patients',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'convenios', // Cadastro de Convênios Médicos
                name: 'convenios',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'porte', // Cadastro de Porte Anestésicos
                name: 'porte',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'procedimentos',
                name: 'Procedimentos',
                type: 'subChild',
                icon: 'explore',
                active: true,
                children: [
                    {state: 'cbhpm', name: 'cbhpm', type: 'link', icon: 'date_range', active: true},
                    {state: 'proc-cbhpm-padrao', name: 'proc-cbhpm-padrao', type: 'link', icon: 'date_range', active: true},
                    {state: 'intersus', name: 'intersus', type: 'link', icon: 'date_range', active: true},
                    {state: 'antimicrobiano', name: 'antimicrobiano', type: 'link', icon: 'date_range', active: true},
                    {state: 'etiologicos', name: 'etiologicos', type: 'link', icon: 'date_range', active: true},
                ]
            },
            {
                state: 'cadfun', // Cadastro de funcionários do hospital
                name: 'cadfun',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'sitio', // Cadastro de Sítio Cirurgico
                name: 'sitio',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'metodo', // Cadastro de métodos
                name: 'metodo',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'antibiograma', // Cadastro de Antibiograma
                name: 'antibiograma',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'tipoacomodacao', // Cadastro de tipos de acomodações
                name: 'tipoacomodacao',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'quarto', // Cadastro de quartos
                name: 'quarto',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'diarias', // Cadastro de diarias
                name: 'diarias',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'cbo', // Código Brasileiro de Ocupações
                name: 'cbo',
                type: 'link',
                icon: 'date_range',
                active: true
            },

            {
                state: 'parametros', // Parâmetros gerais do sistema
                name: 'parametros',
                type: 'link',
                icon: 'date_range',
                active: true
            }
        ]
    },
    { // ================================== PS ===============================
        name: 'Pronto Socorro',
        type: 'sub',
        class: 'group-title',
        icon: '',
        active: true,
        children: [
            {
                state: 'atendimento', // Atendimento geral do pronto socorro
                name: 'atendimento',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'evolucaoenfermagem', // Evolução de pacientes da enfermagem
                name: 'evolucaoenfermagem',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'folhagastos', // Folha de gastos de pacientes com pronto socorro
                name: 'folhagastos',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'tabmanchester', // Tabela de classificação de risco pelo Manchester
                name: 'tabmanchester',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'sae', // Sistematização da Assistência de Enfermagem (SAE)
                name: 'sae',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'saeopcao', // OPÇÕES Do Sistematização da Assistência de Enfermagem (SAE)
                name: 'saeopcao',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'altaps', // Alta de pacientes do pronto socorro
                name: 'altaps',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'relatorios',
                name: 'relatorios',
                type: 'subChild',
                icon: 'report',
                active: true,
                children: [
                    {state: 'relps', name: 'relps', type: 'link', icon: 'date_range', active: true}
                ]
            },
        ]
    },
    {
        name: 'Internação',
        type: 'sub',
        class: 'group-title',
        icon: '',
        active: true,
        children: [
            {
                state: 'interhospitalar', // Internação hospitalar
                name: 'interhospitalar',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'altainternacao', // Alta da Internação hospitalar
                name: 'altainternacao',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'histopaciente', // Histórico de Pacientes
                name: 'histopaciente',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'trocaleito', // Troca o leito do paciente
                name: 'trocaleito',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'controleconta', // Controle de contas hospitalares
                name: 'controleconta',
                type: 'link',
                icon: 'date_range',
                active: true
            }
        ]
    },
    {
        name: 'Raio-X',
        type: 'sub',
        class: 'group-title',
        icon: '',
        active: true,
        children: [
            {
                state: 'exames', // Exames de Imagem
                name: 'exames',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'consumomaterialrx', // Consumo de materiais de Raio-x Por exame
                name: 'consumomaterialrx',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'emissaolaudo', // Emissão de Lauros de Raio-X por paciente
                name: 'emissaolaudo',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'medicosolicitante', // Cadastro de Médicos Solicitantes de exames de Raio-X
                name: 'medicosolicitante',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'modelolaudorx', // Cadastro de modelos de Laudos do Raio-X
                name: 'modelolaudorx',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'tipoexame', // Cadastro de tipos de exames do Raio-X
                name: 'tipoexame',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'faturaraiox', // Faturamento do Raio-X
                name: 'faturaraiox',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'entregalaudo', // Entrega de exames do Raio-X
                name: 'entregalaudo',
                type: 'link',
                icon: 'date_range',
                active: true
            }
        ]
    },
    {
        name: 'Oncologia',
        type: 'sub',
        class: 'group-title',
        icon: '',
        active: true,
        children: [
            {
                state: 'onco', // Oncologia
                name: 'onco',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'evenferonco', // Evolução de pacientes da oncologia
                name: 'evenferonco',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'prescrioncologia', // Prescrição de pacientes da oncologia
                name: 'prescrioncologia',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'evolucao', // Evolução Médica
                name: 'evolucao',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'mapaleitos', // Mapa de leitos Oncologia/Internação
                name: 'mapaleitos',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'altaoncologia', // Alta de pacientes da oncologia
                name: 'altaoncologia',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'prontuariooncologia', // Prontuário oncológico
                name: 'prontuariooncologia',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'relatorios', // Relatórios da oncologia
                name: 'relatoriosoncologia',
                type: 'subChild',
                icon: 'explore',
                active: true,
                children: [
                    {state: 'reloncologia', name: 'reloncologia', type: 'link', icon: 'date_range', active: true},
                    {state: 'evolfisioterapia', name: 'evolfisioterapia', type: 'link', icon: 'date_range', active: true},
                ]
            },
        ]
    },
    {
        name: 'Prescrição',
        type: 'sub',
        class: 'group-title',
        icon: '',
        active: true,
        children: [
            {
                state: 'prescri', // Prescrição médica
                name: 'prescri',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'atestado', // Atestado médica
                name: 'atestado',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'dietas', // Controle de dietas para pacientes
                name: 'dietas',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'visitas', // Controle de visitas para pacientes
                name: 'visitas',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'transfleito', // Controle de transferencia de leitos
                name: 'transfleito',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'vias', // vias
                name: 'vias',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'solfarmacia', // Solicitações de farmácia
                name: 'solfarmacia',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'kitmedicamentos', // Kits de medicamentos
                name: 'kitmedicamentos',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'kitprocedimentos', // Kits para procedimentos médicos
                name: 'kitprocedimentos',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'fisioterapia', // Evolução da fisioterapia
                name: 'fisioterapia',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'evolenfermagem', // Evolução da enfermagem
                name: 'evolenfermagem',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'ecg', // Laudo ECG
                name: 'ecg',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'solicitacaoposto', // Solicitação de posto
                name: 'solicitacaoposto',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'horarioaplicacao', // Horário de aplicação dos medicamentos
                name: 'horarioaplicacao',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'protocolos', // Horário de aplicação dos medicamentos
                name: 'protocolos',
                type: 'link',
                icon: 'date_range',
                active: true
            }
            ,
            {
                state: 'taxaenfermagem', // taxaenfermagem
                name: 'taxaenfermagem',
                type: 'link',
                icon: 'date_range',
                active: true
            }
            ,
            {
                state: 'cadexamelabor', // cadexamelabor
                name: 'cadexamelabor',
                type: 'link',
                icon: 'date_range',
                active: true
            }
            ,
            {
                state: 'estornofolha', // estornofolha
                name: 'estornofolha',
                type: 'link',
                icon: 'date_range',
                active: true
            }
            ,
            {
                state: 'saldoposto', // saldoposto
                name: 'saldoposto',
                type: 'link',
                icon: 'date_range',
                active: true
            }
            ,
            {
                state: 'ccih', // ccih
                name: 'ccih',
                type: 'link',
                icon: 'date_range',
                active: true
            }
            ,
            {
                state: 'checaconsumo', // checaconsumo
                name: 'checaconsumo',
                type: 'link',
                icon: 'date_range',
                active: true
            }
            ,
            {
                state: 'receituario', // receituario
                name: 'receituario',
                type: 'link',
                icon: 'date_range',
                active: true
            }
            ,
            {
                state: 'aihspendentes', // aihspendentes
                name: 'aihspendentes',
                type: 'link',
                icon: 'date_range',
                active: true
            }
        ]
    },
    {
        name: 'Farmácia',
        type: 'sub',
        class: 'group-title',
        icon: '',
        active: true,
        children: [
            {
                state: 'consulrequisicao', // Consulta de requisições
                name: 'consulrequisicao',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'devmedicamentos', // Devolução de medicamentos
                name: 'devmedicamentos',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'bxhorarios', // Baixa por hrários
                name: 'bxhorarios',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'bxpostos', // Baixa de posto
                name: 'bxpostos',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'etiqprodutos', // Etiqueta de produtos
                name: 'etiqprodutos',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'dcb', // DCB
                name: 'dcb',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'movicontrolados', // Movimentação de medicamentos controlados
                name: 'movicontrolados',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'gruposubgrupofamilia', // // Grupo / Subgrupo / Família
                name: 'gruposubgrupofamilia',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'deposito', // Cadastro de depositos
                name: 'deposito',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'unimed', // Unidade de medidas
                name: 'unimed',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'cadprod', // Cadastro de produtos
                name: 'cadprod',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'notasentrada', // Notas de entrada
                name: 'notasentrada',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'movestoque', // Movimentação de estoque
                name: 'movestoque',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'ccusto', // Centro de custo
                name: 'ccusto',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'atubrasindice', // Atualização de preços pelo Brasindice
                name: 'atubrasindice',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'pedcompras', // Pedidos de compras
                name: 'pedcompras',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'medurgentes', // Baixa de medicamentos urgentes
                name: 'medurgentes',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'consumofuncionarios', // Consumo de medicamentos por funcionários
                name: 'consumofuncionarios',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'relmedcontrolado', // Relatório de medicamentos controlados
                name: 'relmedcontrolado',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'relhonorarios', // Relatório de honorários
                name: 'relhonorarios',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'reletiqfrac', // Relatório de etiquetas fracionadas
                name: 'reletiqfrac',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'relmovestoque', // Relatório de movimentação de estoque
                name: 'relmovestoque',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'relnotaentrada', // Relatório de notas de entrada
                name: 'relnotaentrada',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'relpedidocompra', // Relatório de pedido de compras
                name: 'relpedidocompra',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'relfornece', // Relatório de fornecedores
                name: 'relfornece',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'relabc', // Relatório Curva ABC de produtos
                name: 'relabc',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'relproduto', // Relatório de produtos
                name: 'relproduto',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'relconsuinterno', // Relatório de consumo interno de materiais/medicamentos
                name: 'relconsuinterno',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'extmovestoque', // Extrato de movimentação de estoque
                name: 'extmovestoque',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'extmedcontrolados', // Extrato de medicamentos controlados
                name: 'extmedcontrolados',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'receitasabertas', // Receitas em aberto
                name: 'receitasabertas',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'requisicoes', // Requisições de medicamentos
                name: 'requisicoes',
                type: 'link',
                icon: 'date_range',
                active: true
            }

        ]
    },
    {
        name: 'Faturamento', // MÓDULO DE FATURAMENTO
        type: 'sub',
        class: 'group-title',
        icon: '',
        active: true,
        children: [
            {
                state: 'preconta',
                name: 'preconta',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'modnota',
                name: 'modnota',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'tesourariafinscal',
                name: 'tesourariafinscal',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'notasimples',
                name: 'notasimples',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'notafaturamento',
                name: 'notafaturamento',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'digitacaofatura',
                name: 'digitacaofatura',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'digitacaocredito',
                name: 'digitacaocredito',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'alocred',
                name: 'alocred',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'altalocred',
                name: 'altalocred',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'glosa',
                name: 'glosa',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'tabir',
                name: 'tabir',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'libhono',
                name: 'libhono',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'paghono',
                name: 'paghono',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'lanchono',
                name: 'lanchono',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'faturaradio',
                name: 'faturaradio',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'faturaterceiros',
                name: 'faturaterceiros',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'custocontauti',
                name: 'custocontauti',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'inss',
                name: 'inss',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'portanes',
                name: 'portanes',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'contasps',
                name: 'contasps',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'fechamentoconta',
                name: 'fechamentoconta',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'fechamentopartic',
                name: 'fechamentopartic',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'controleinternacao',
                name: 'controleinternacao',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'faturaconvenio',
                name: 'faturaconvenio',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'exthono',
                name: 'exthono',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'contaltas',
                name: 'contaltas',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'relcontas',
                name: 'relcontas',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'notemitfatur',
                name: 'notemitfatur',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'notemitsimples',
                name: 'notemitsimples',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'notaemittesouraria',
                name: 'notaemittesouraria',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'faturaimagem',
                name: 'faturaimagem',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'infopaquehono',
                name: 'infopaquehono',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'gastomedic',
                name: 'gastomedic',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'excluirfatrx',
                name: 'excluirfatrx',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'tiss',
                name: 'tiss',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'relprodambu',
                name: 'relprodambu',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'acompcontasfaturamento',
                name: 'acompcontasfaturamento',
                type: 'link',
                icon: 'date_range',
                active: true
            }
        ]
    },
    {
        name: 'Tesouraria',
        type: 'sub',
        class: 'group-title',
        icon: '',
        active: true,
        children: [
            {
                state: 'titpagar', // Títulos a pagar
                name: 'titpagar',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'pagamentos', // Pagamentos
                name: 'pagamentos',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'agptitapagar', // Agrupamento de títulos
                name: 'agptitapagar',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'emisscheques', // Emissão de cheques
                name: 'emisscheques',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'emissrecibos', // Emissão de recibos
                name: 'emissrecibos',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'relfornecedores', // Relatório de fornecedores
                name: 'relfornecedores',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'relnotafiscentrada', // Relatório de notas fiscais de entrada
                name: 'relnotafiscentrada',
                type: 'link',
                icon: 'date_range',
                active: true
            },
            {
                state: 'reltitpagar', // Relatório de títulos a pagar
                name: 'reltitpagar',
                type: 'link',
                icon: 'date_range',
                active: true
            }
        ]
    },
    {
        name: 'Components',
        type: 'sub',
        class: 'group-title',
        icon: '',
        active: true,
        children: [
            // {
            //     state: '',
            //     name: 'Cadastrogeral',
            //     type: 'subChild',
            //     icon: 'format_shapes',
            //     active: true,
            //     children: [
            //         {state: 'convenios', type: 'link', name: 'convenios', active: true},
            //         {state: 'patients', type: 'link', name: 'paciente', active: true}
            //     ]
            // },
            {
                state: 'editor',
                name: 'EDITOR',
                type: 'subChild',
                icon: 'format_shapes',
                active: true,
                children: [
                    {state: 'wysiwyg', type: 'link', name: 'WYSIWYG EDITOR', active: true},
                    {state: 'ckeditor', type: 'link', name: 'CKEDITOR', active: true}
                ]
            },
            {
                state: 'icons',
                name: 'MATERIAL ICONS',
                type: 'link',
                icon: 'grade',
                active: true
            },
            {
                state: 'chart',
                name: 'CHARTS',
                type: 'subChild',
                icon: 'show_chart',
                active: true,
                children: [
                    {state: 'ng2-charts', type: 'link', name: 'NG2 CHARTS', active: true},
                    {state: 'easy-pie-chart', type: 'link', name: 'EASY PIE', active: true}
                ]
            },
            {
                state: 'taskboard',
                name: 'TASK BOARD',
                type: 'link',
                icon: 'drag_indicator',
                active: true
            }
        ]
    },
    {
        name: 'UI Elements',
        type: 'sub',
        class: 'group-title',
        mega: true,
        showColumns: 'show-column-4',
        icon: '',
        active: true,
        children: [
            {
                state: 'components',
                name: 'UI COMPONENTS',
                type: 'subChild',
                icon: 'layers',
                active: true,
                children: [
                    {state: 'cards', type: 'link', name: 'CARDS', active: true},
                    {state: 'grid', type: 'link', name: 'GRID', active: true},
                    {state: 'list', type: 'link', name: 'LIST', active: true},
                    {state: 'menu', type: 'link', name: 'MENU', active: true},
                    {state: 'slider', type: 'link', name: 'SLIDER', active: true},
                    {state: 'snackbar', type: 'link', name: 'SNACKBAR', active: true},
                    {state: 'tooltip', type: 'link', name: 'TOOLTIP', active: true},
                    {state: 'dialog', type: 'link', name: 'DIALOG', active: true},
                    {state: 'toolbar', type: 'link', name: 'TOOLBAR', active: true},
                    {state: 'progress', type: 'link', name: 'PROGRESS', active: true},
                    {state: 'tabs', type: 'link', name: 'TABS', active: true},
                    {state: 'colorpicker', type: 'link', name: 'COLORPICKER', active: true},
                    {state: 'datepicker', type: 'link', name: 'DATEPICKER', active: true}
                ]
            },
            {
                state: 'components',
                name: 'FORM COMPONENTS',
                type: 'subChild',
                icon: 'layers',
                active: true,
                children: [
                    {state: 'buttons', type: 'link', name: 'BUTTONS', active: true},
                    {state: 'select', type: 'link', name: 'SELECT', active: true},
                    {state: 'input', type: 'link', name: 'INPUT', active: true},
                    {state: 'checkbox', type: 'link', name: 'CHECKBOX', active: true},
                    {state: 'radio', type: 'link', name: 'RADIO', active: true}
                ]
            },
            {
                state: 'dragndrop',
                name: 'DRAG & DROP',
                type: 'subChild',
                icon: 'mouse',
                active: true,
                children: [
                    {state: 'dragula', type: 'link', name: 'DRAGULA', active: true},
                    {state: 'sortable', type: 'link', name: 'SORTABLEJS', active: true}
                ]
            },
            {
                state: 'tables',
                name: 'TABLES',
                type: 'subChild',
                icon: 'format_line_spacing',
                active: true,
                children: [
                    {state: 'fullscreen', type: 'link', name: 'FULLSCREEN', active: true},
                    {state: 'selection', type: 'link', name: 'SELECTION', active: true},
                    {state: 'pinning', type: 'link', name: 'PINNING', active: true},
                    {state: 'sorting', type: 'link', name: 'SORTING', active: true},
                    {state: 'paging', type: 'link', name: 'PAGING', active: true},
                    {state: 'editing', type: 'link', name: 'EDITING', active: true},
                    {state: 'filter', type: 'link', name: 'FILTER', active: true},
                    {state: 'responsive', type: 'link', name: 'RESPONSIVE', active: true}
                ]
            },
            {
                state: 'chart',
                name: 'CHARTS',
                type: 'subChild',
                icon: 'show_chart',
                active: true,
                children: [
                    {state: 'ng2-charts', type: 'link', name: 'NG2 CHARTS', active: true},
                    {state: 'easy-pie-chart', type: 'link', name: 'EASY PIE', active: true},
                ]
            },
            {
                state: 'forms',
                name: 'FORMS',
                type: 'subChild',
                icon: 'insert_comment',
                active: true,
                children: [
                    {state: 'form-wizard', type: 'link', name: 'FORM WIZARD', active: true},
                    {state: 'form-validation', type: 'link', name: 'FORM VALIDATION', active: true},
                    {state: 'form-upload', type: 'link', name: 'UPLOAD', active: true},
                    {state: 'form-tree', type: 'link', name: 'TREE', active: true}
                ]
            },
            {
                state: 'maps',
                name: 'MAPS',
                type: 'subChild',
                icon: 'map',
                active: true,
                children: [
                    {state: 'googlemap', type: 'link', name: 'GOOGLE MAP', active: true},
                    {state: 'leafletmap', type: 'link', name: 'LEAFLET MAP', active: true}
                ]
            },
            {
                state: 'video-player',
                name: 'VIDEO PLAYER',
                type: 'link',
                icon: 'videocam',
                active: true
            },
        ]
    },
    {
        name: 'Pages',
        type: 'sub',
        class: 'group-title',
        mega: true,
        showColumns: 'show-column-3',
        icon: '',
        active: true,
        children: [
            {
                state: 'pages',
                name: 'PAGES',
                type: 'subChild',
                icon: 'import_contacts',
                active: true,
                children: [
                    {state: 'media', name: 'GALLERY', type: 'link', active: true},
                    {state: 'mediaV2', name: 'GALLERY V2', type: 'link', active: true},
                    {state: 'pricing', name: 'PRICING', type: 'link', active: true},
                    {state: 'pricing-1', name: 'PRICING V2', type: 'link', active: true},
                    {state: 'blank', name: 'BLANK', type: 'link', active: true},
                    {state: 'timeline', name: 'TIMELINE', type: 'link', active: true},
                    {state: 'faq', name: 'FAQ', type: 'link', active: true},
                    {state: 'feedback', name: 'FEEDBACK', type: 'link', active: true},
                    {state: 'about', name: 'ABOUT', type: 'link', active: true},
                    {state: 'contact', name: 'CONTACT', type: 'link', active: true},
                    {state: 'search', name: 'SEARCH', type: 'link', active: true},
                    {state: 'comingsoon', name: 'COMING SOON', type: 'link', active: true},
                    {state: 'maintenance', name: 'MAINTENANCE', type: 'link', active: true},
                ]
            },
            {
                state: 'users',
                name: 'USERS',
                type: 'subChild',
                icon: 'web',
                active: true,
                children: [
                    {state: 'userlist', type: 'link', name: 'USER LIST', active: true},
                    {state: 'userprofile', type: 'link', name: 'USER PROFILE', active: true},
                    {state: 'userprofilev2', type: 'link', name: 'USER PROFILE V2', active: true}
                ]
            },
            {
                state: 'user-management',
                name: 'MANAGEMENT',
                type: 'subChild',
                icon: 'view_list',
                active: true,
                children: [
                    {state: 'usermanagelist', name: 'USER LIST', type: 'link', active: true},
                    {state: 'usergridlist', name: 'USER GRID', type: 'link', active: true}
                ]
            },
            {
                state: 'session',
                name: 'SESSIONS',
                type: 'subChild',
                icon: 'face',
                active: true,
                children: [
                    {state: 'login', name: 'LOGIN', type: 'link', active: true},
                    {state: 'loginV2', name: 'LOGIN V2', type: 'link', active: true},
                    {state: 'register', name: 'REGISTER', type: 'link', active: true},
                    {state: 'registerV2', name: 'REGISTER V2', type: 'link', active: true},
                    {state: 'forgot-password', name: 'FORGOT', type: 'link', active: true},
                    {state: 'forgot-passwordV2', name: 'FORGOT V2', type: 'link', active: true},
                    {state: 'lockscreen', name: 'LOCKSCREEN', type: 'link', active: true},
                    {state: 'lockscreenV2', name: 'LOCKSCREEN V2', type: 'link', active: true}
                ]
            }
        ]
    }
];

@Injectable()
export class HorizontalMenuItems {
    getAll() {

        // const acesso = JSON.parse(localStorage.getItem('infoUsuarioLogado'))[0].acessos;
        // const menus = MENUITEMS;
        // acesso.forEach(a => {
        //   a.telas.forEach(b => {
        //     menus.forEach(e => {
        //       e.main.forEach(d => {
        //         if (b.componentModulo == d.state) {
        //           d.active = true;
        //           d.children.forEach(f => {
        //             if (b.componentTela == f.state) {
        //               f.active = true;
        //             }
        //           });
        //         }
        //       });
        //     });
        //   });
        // });
        // return menus;
        return MENUITEMS;
    }
}
