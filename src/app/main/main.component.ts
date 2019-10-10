import {filter} from 'rxjs/operators';
import {Component, OnInit, OnDestroy, ViewChild, HostListener, ViewEncapsulation} from '@angular/core';
import {MenuItems} from '../core/menu/menu-items/menu-items';
import {BreadcrumbService} from 'ng5-breadcrumb';
import {PageTitleService} from '../core/page-title/page-title.service';
import {TranslateService} from '@ngx-translate/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {DeviceDetectorService} from 'ngx-device-detector';
import {TourService} from 'ngx-tour-md-menu';
import PerfectScrollbar from 'perfect-scrollbar';
import {AuthService} from '../service/auth-service/auth.service';
// import {EcommerceService} from '../service/ecommerce/ecommerce.service';
import {CoreService} from '../service/core/core.service';

const screenfull = require('screenfull');

@Component({
    selector: 'gene-layout',
    templateUrl: './main-material.html',
    styleUrls: ['./main-material.scss'],
    encapsulation: ViewEncapsulation.None
})

export class MainComponent implements OnInit, OnDestroy {

    root: any = 'ltr';
    layout: any = 'ltr';
    currentLang: any = 'pt-br';
    customizerIn = false;
    showSettings = false;
    chatpanelOpen = false;
    sidenavOpen = true;
    isMobile = false;
    isFullscreen = false;
    header: string;
    url: string;
    dark: boolean;
    boxed: boolean;
    collapseSidebar: boolean;
    compactSidebar: boolean;
    isMobileStatus: boolean;
    sidenavMode = 'side';
    popupDeleteResponse: any;
    sidebarColor: any;
    isSidebarFilterClass: string;
    isHeaderFilterClass: string;
    deviceInfo = null;
    private _mediaSubscription: Subscription;
    private _routerEventsSubscription: Subscription;
    private _router: Subscription;
    @ViewChild('sidenav') sidenav;

    sideBarFilterClass: any = [
        {
            sideBarSelect: 'sidebar-color-1',
            colorSelect: 'sidebar-color-dark'
        },
        {
            sideBarSelect: 'sidebar-color-2',
            colorSelect: 'sidebar-color-primary',
        },
        {
            sideBarSelect: 'sidebar-color-3',
            colorSelect: 'sidebar-color-accent'
        },
        {
            sideBarSelect: 'sidebar-color-4',
            colorSelect: 'sidebar-color-warn'
        },
        {
            sideBarSelect: 'sidebar-color-5',
            colorSelect: 'sidebar-color-green'
        }
    ]

    headerFilterClass: any = [
        {
            headerSelect: 'header-color-1',
            colorSelect: 'header-color-dark'
        },
        {
            headerSelect: 'header-color-2',
            colorSelect: 'header-color-primary'
        },
        {
            headerSelect: 'header-color-3',
            colorSelect: 'header-color-accent'
        },
        {
            headerSelect: 'header-color-4',
            colorSelect: 'header-color-warning'
        },
        {
            headerSelect: 'header-color-5',
            colorSelect: 'header-color-green'
        }
    ]

    chatList: any [] = [
        {
            image: 'assets/img/user-1.jpg',
            name: 'John Smith',
            chat: 'Lorem ipsum simply dummy',
            mode: 'online'
        },
        {
            image: 'assets/img/user-2.jpg',
            name: 'Amanda Brown',
            chat: 'Lorem ipsum simply dummy',
            mode: 'online'
        },
        {
            image: 'assets/img/user-3.jpg',
            name: 'Justin Randolf',
            chat: 'Lorem ipsum simply dummy',
            mode: 'offline'
        },
        {
            image: 'assets/img/user-4.jpg',
            name: 'Randy SunSung',
            chat: 'Lorem ipsum simply dummy',
            mode: 'online'
        },
        {
            image: 'assets/img/user-5.jpg',
            name: 'Lisa Myth',
            chat: 'Lorem ipsum simply dummy',
            mode: 'online'
        },
    ]

    constructor(public tourService: TourService,
                public menuItems: MenuItems,
                private breadcrumbService: BreadcrumbService,
                private pageTitleService: PageTitleService,
                public translate: TranslateService,
                private router: Router,
                private media: MediaObserver,
                private deviceService: DeviceDetectorService,
                private authService: AuthService,
                // public ecommerceService: EcommerceService,
                public coreService: CoreService, private routes: Router,
                private activatedRoute: ActivatedRoute) {

        // Define o menu horizontal como padrão
        this.changeLayout();

        // Carrega o layout em fullscreen
        // this.toggleFullscreen();

        const browserLang: string = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'pt-br');

        this.tourService.initialize([{
            anchorId: 'start.tour',
            content: 'Welcome to Gene admin panel!',
            placement: 'below',
            title: 'Bem vindo novamente',
        },
            {
                anchorId: 'tour-search',
                content: 'Enjoying Search box with sugestion and many more things',
                placement: 'below',
                title: 'Search Box',
            },
            {
                anchorId: 'tour-full-screen',
                content: 'By pressing this button you can switch to fullscreen mode.',
                placement: 'below',
                title: 'Full Screen',
            },
            {
                anchorId: 'tour-ui',
                content: 'Show your site stats with unique designed cards',
                placement: 'below',
                title: 'Stats Cards',
            }]);

        if (window.innerWidth > 959) {
            this.tourService.start();
        }

        breadcrumbService.addFriendlyNameForRoute('/dashboard', 'Dashboard');
        breadcrumbService.addFriendlyNameForRoute('/dashboard/saas', 'SAAS');
        breadcrumbService.addFriendlyNameForRoute('/dashboard/web-analytics', 'Web Analytics');
        breadcrumbService.addFriendlyNameForRoute('/inbox', '');
        breadcrumbService.addFriendlyNameForRoute('/chat', '');
        breadcrumbService.addFriendlyNameForRoute('/calendar', '');

        // CADASTRO GERAL DO SISTEMA
        breadcrumbService.addFriendlyNameForRoute('/patients', ''); // Abre a sessão de cadastro de pacientes
        breadcrumbService.addFriendlyNameForRoute('/convenios', ''); // Abre a sessão de cadastro de convenios
        breadcrumbService.addFriendlyNameForRoute('/porte', ''); // Abre a sessão de cadastro de porte anestésicos
        breadcrumbService.addFriendlyNameForRoute('/cbhpm', ''); // CBHPM - Classificação Brasileira Hierarquisada de Procedimentos Médicos
        breadcrumbService.addFriendlyNameForRoute('/proc-cbhpm-padrao', ''); // Procedimentis CBHPM Padrão
        breadcrumbService.addFriendlyNameForRoute('/cadfun', ''); // Cadastro de funcionários do hospital
        breadcrumbService.addFriendlyNameForRoute('/sitio', ''); // Cadastro de sítio cirurgico
        breadcrumbService.addFriendlyNameForRoute('/antimicrobiano', ''); // Cadastro de Antimicrobiano
        breadcrumbService.addFriendlyNameForRoute('/etiologicos', ''); // Cadastro de Etiologicos
        breadcrumbService.addFriendlyNameForRoute('/metodo', ''); // Cadastro de métodos
        breadcrumbService.addFriendlyNameForRoute('/antibiograma', ''); // Cadastro de antibiograma
        breadcrumbService.addFriendlyNameForRoute('/tipoacomodacao', ''); // Cadastro de tipos de acomodações
        breadcrumbService.addFriendlyNameForRoute('/quarto', ''); // Cadastro de tipos de acomodações
        breadcrumbService.addFriendlyNameForRoute('/diarias', ''); // Cadastro de tipos de diarias
        breadcrumbService.addFriendlyNameForRoute('/cbo', ''); // Código Brasileiro de Ocupações
        breadcrumbService.addFriendlyNameForRoute('/intersus', ''); // Valores de procedimentos intersus
        breadcrumbService.addFriendlyNameForRoute('/parametros', ''); // Parâmetros gerais do sistema

        // PRONTO SOCORRO
        breadcrumbService.addFriendlyNameForRoute('/atendimento', ''); // Atendimento do Pronto Socorro
        breadcrumbService.addFriendlyNameForRoute('/evolucaoenfermagem', ''); // Evolução da enfermagem
        breadcrumbService.addFriendlyNameForRoute('/folhagastos', ''); // Folha de gastos de pacientes
        breadcrumbService.addFriendlyNameForRoute('/tabmanchester', ''); // Tabela de classificação de risco Manchester
        breadcrumbService.addFriendlyNameForRoute('/sae', ''); // Sistematização da Assistência de Enfermagem (SAE)
        breadcrumbService.addFriendlyNameForRoute('/saeopcao', ''); // Cadastro de opções do SAE
        breadcrumbService.addFriendlyNameForRoute('/altaps', ''); // Alta de pacientes do pronto socorro
        breadcrumbService.addFriendlyNameForRoute('/relps', ''); // Relatórios do pronto socorro

        // INTERNAÇÃO
        breadcrumbService.addFriendlyNameForRoute('/interhospitalar', ''); // Internação Hospitalar
        breadcrumbService.addFriendlyNameForRoute('/altainternacao', ''); // Alta de Internação Hospitalar
        breadcrumbService.addFriendlyNameForRoute('/histopaciente', ''); // Histórico de Pacientes
        breadcrumbService.addFriendlyNameForRoute('/trocaleito', ''); // Trocar leitode paciente
        breadcrumbService.addFriendlyNameForRoute('/controleconta', ''); // Controle de contas

        // RAIO-X
        breadcrumbService.addFriendlyNameForRoute('/exames', ''); // Exames
        breadcrumbService.addFriendlyNameForRoute('/consumomaterialrx', ''); // Consumo de materiais do Raio-X
        breadcrumbService.addFriendlyNameForRoute('/emissaolaudo', ''); // Emissão de Laudos de Raio-X por paciente
        breadcrumbService.addFriendlyNameForRoute('/medicosolicitante', ''); // Cadastro de Médicos Solicitantes de exames de Raio-X
        breadcrumbService.addFriendlyNameForRoute('/modelolaudorx', ''); // Cadastro de Modelos de Laudos do Raio-X
        breadcrumbService.addFriendlyNameForRoute('/tipoexame', ''); // Cadastro de tipos de exames do Raio-X
        breadcrumbService.addFriendlyNameForRoute('/faturaraiox', ''); // Faturamento do Raio-X
        breadcrumbService.addFriendlyNameForRoute('/entregalaudo', ''); // Entrega de Exames do Raio-X

        // ONCOLOGIA
        breadcrumbService.addFriendlyNameForRoute('/onco', ''); // Oncologia
        breadcrumbService.addFriendlyNameForRoute('/evenferonco', ''); // Evolução de pacientes da oncologia
        breadcrumbService.addFriendlyNameForRoute('/prescrioncologia', ''); // Prescrição para pacientes da oncologia
        breadcrumbService.addFriendlyNameForRoute('/evolucao', ''); // Evolução Médica
        breadcrumbService.addFriendlyNameForRoute('/mapaleitos', ''); // Mapa de leitos Oncologia/Internação
        breadcrumbService.addFriendlyNameForRoute('/altaoncologia', ''); // Alta de pacientes da oncologia
        breadcrumbService.addFriendlyNameForRoute('/prontuariooncologia', ''); // Prontuário oncológico
        breadcrumbService.addFriendlyNameForRoute('/reloncologia', ''); // Relatório de encologia
        breadcrumbService.addFriendlyNameForRoute('/evolfisioterapia', ''); // Relatórios da evolução de fisioterapia

        // PRESCRIÇÃO MÉDICA
        breadcrumbService.addFriendlyNameForRoute('/prescri', ''); // Prescrição médica
        breadcrumbService.addFriendlyNameForRoute('/atestado', ''); // Atestado médico
        breadcrumbService.addFriendlyNameForRoute('/dietas', ''); // Controle de dietas para pacientes
        breadcrumbService.addFriendlyNameForRoute('/visitas', ''); // Controle de visitas
        breadcrumbService.addFriendlyNameForRoute('/transfleito', ''); // Transferência de leito
        breadcrumbService.addFriendlyNameForRoute('/vias', ''); // Via
        breadcrumbService.addFriendlyNameForRoute('/solfarmacia', ''); // Solicitações de farmácia
        breadcrumbService.addFriendlyNameForRoute('/kitmedicamentos', ''); // Kits de medicamentos
        breadcrumbService.addFriendlyNameForRoute('/kitprocedimentos', ''); // Kits para procedimentos médicos
        breadcrumbService.addFriendlyNameForRoute('/fisioterapia', ''); // Evolução da fisioterapia
        breadcrumbService.addFriendlyNameForRoute('/evolenfermagem', ''); // Evolução da enfermagem
        breadcrumbService.addFriendlyNameForRoute('/ecg', ''); // Laudo ECG
        breadcrumbService.addFriendlyNameForRoute('/solicitacaoposto', ''); // Solicitação de posto
        breadcrumbService.addFriendlyNameForRoute('/horarioaplicacao', ''); // Horário de aplicação dos medicamentos
        breadcrumbService.addFriendlyNameForRoute('/protocolos', ''); // protocolos
        breadcrumbService.addFriendlyNameForRoute('/taxaenfermagem', ''); // taxaenfermagem
        breadcrumbService.addFriendlyNameForRoute('/cadexamelabor', ''); // cadexamelabor
        breadcrumbService.addFriendlyNameForRoute('/estornofolha', ''); // estornofolha
        breadcrumbService.addFriendlyNameForRoute('/saldoposto', ''); // saldoposto
        breadcrumbService.addFriendlyNameForRoute('/ccih', ''); // ccih
        breadcrumbService.addFriendlyNameForRoute('/checaconsumo', ''); // checaconsumo
        breadcrumbService.addFriendlyNameForRoute('/receituario', ''); // receituario
        breadcrumbService.addFriendlyNameForRoute('/aihspendentes', ''); // aihspendentes

        // FARMÁCIA
        breadcrumbService.addFriendlyNameForRoute('/consulrequisicao', ''); // Consulta de requisições
        breadcrumbService.addFriendlyNameForRoute('/devmedicamentos', ''); // Devolução de medicamentos
        breadcrumbService.addFriendlyNameForRoute('/bxhorarios', ''); // Baixa por hrários
        breadcrumbService.addFriendlyNameForRoute('/bxpostos', ''); //  Baixa de posto
        breadcrumbService.addFriendlyNameForRoute('/etiqprodutos', ''); // Etiqueta de produtos
        breadcrumbService.addFriendlyNameForRoute('/dcb', ''); // DCB
        breadcrumbService.addFriendlyNameForRoute('/movicontrolados', ''); // Movimentação de medicamentos controlados
        breadcrumbService.addFriendlyNameForRoute('/gruposubgrupofamilia', ''); // Grupo / Subgrupo / Família
        breadcrumbService.addFriendlyNameForRoute('/deposito', ''); // Deposito
        breadcrumbService.addFriendlyNameForRoute('/unimed', ''); // Unidade de medida
        breadcrumbService.addFriendlyNameForRoute('/cadprod', ''); // Cadasro de produtos
        breadcrumbService.addFriendlyNameForRoute('/notasentrada', ''); // Notas de entrada
        breadcrumbService.addFriendlyNameForRoute('/movestoque', ''); // Movimentação de estoque
        breadcrumbService.addFriendlyNameForRoute('/ccusto', ''); // Centro de Custo
        breadcrumbService.addFriendlyNameForRoute('/atubrasindice', ''); // Atualização de preços de produtos pelo Brasindice
        breadcrumbService.addFriendlyNameForRoute('/pedcompras', ''); // Pedidos de compra
        breadcrumbService.addFriendlyNameForRoute('/transmedicposto', ''); // Transferência de medicamentos entre postos
        breadcrumbService.addFriendlyNameForRoute('/medurgentes', ''); // Baixa de medicamentos urgentes
        breadcrumbService.addFriendlyNameForRoute('/consumofuncionarios', ''); // Consumo de medicamentos por funcionários
        breadcrumbService.addFriendlyNameForRoute('/relmedcontrolado', ''); //  Relatório de medicamentos controlados
        breadcrumbService.addFriendlyNameForRoute('/relhonorarios', ''); // Relatório de honorários
        breadcrumbService.addFriendlyNameForRoute('/reletiqfrac', ''); //  Relatório de etiquetas fracionadas
        breadcrumbService.addFriendlyNameForRoute('/relmovestoque', ''); //  Relatório de movimentação de estoque
        breadcrumbService.addFriendlyNameForRoute('/relnotaentrada', ''); //  Relatório de notas de entrada
        breadcrumbService.addFriendlyNameForRoute('/relpedidocompra', ''); // Relatório de pedido de compras
        breadcrumbService.addFriendlyNameForRoute('/relfornece', ''); // Relatório de fornecedores
        breadcrumbService.addFriendlyNameForRoute('/relabc', ''); // Relatório Curva ABC de produtos
        breadcrumbService.addFriendlyNameForRoute('/relproduto', ''); // Relatório de produtos
        breadcrumbService.addFriendlyNameForRoute('/relconsuinterno', ''); // Relatório de consumo interno de materiais/medicamentos
        breadcrumbService.addFriendlyNameForRoute('/extmovestoque', ''); // Extrato de movimentação de estoque
        breadcrumbService.addFriendlyNameForRoute('/extmedcontrolados', ''); //  Extrato de medicamentos controlados
        breadcrumbService.addFriendlyNameForRoute('/receitasabertas', ''); // Receitas em aberto
        breadcrumbService.addFriendlyNameForRoute('/requisicoes', ''); // Requisições de medicamentos

        // TESOURARIA
        breadcrumbService.addFriendlyNameForRoute('/titpagar', ''); // Titulos a pagar
        breadcrumbService.addFriendlyNameForRoute('/pagamentos', ''); // Pagamentos
        breadcrumbService.addFriendlyNameForRoute('/agptitapagar', ''); // Agrupamento de titulos a pagar
        breadcrumbService.addFriendlyNameForRoute('/emisscheques', ''); // Emissão de cheques
        breadcrumbService.addFriendlyNameForRoute('/emissrecibos', ''); // Emissão de recibos
        breadcrumbService.addFriendlyNameForRoute('/relfornecedores', ''); // Relatório de fornecedores
        breadcrumbService.addFriendlyNameForRoute('/relnotafiscentrada', ''); // Relatório de notas fiscais de entrada
        breadcrumbService.addFriendlyNameForRoute('/reltitpagar', ''); // Relatório de títulos a pagar

        // FATURAMENTO
        breadcrumbService.addFriendlyNameForRoute('/preconta', '');
        breadcrumbService.addFriendlyNameForRoute('/modnota', '');
        breadcrumbService.addFriendlyNameForRoute('/tesourariafinscal', '');
        breadcrumbService.addFriendlyNameForRoute('/notasimples', '');
        breadcrumbService.addFriendlyNameForRoute('/notafaturamento', '');
        breadcrumbService.addFriendlyNameForRoute('/digitacaofatura', '');
        breadcrumbService.addFriendlyNameForRoute('/digitacaocredito', '');
        breadcrumbService.addFriendlyNameForRoute('/alocred', '');
        breadcrumbService.addFriendlyNameForRoute('/altalocred', '');
        breadcrumbService.addFriendlyNameForRoute('/glosa', '');
        breadcrumbService.addFriendlyNameForRoute('/tabir', '');
        breadcrumbService.addFriendlyNameForRoute('/libhono', '');
        breadcrumbService.addFriendlyNameForRoute('/paghono', '');
        breadcrumbService.addFriendlyNameForRoute('/lanchono', '');
        breadcrumbService.addFriendlyNameForRoute('/faturaradio', '');
        breadcrumbService.addFriendlyNameForRoute('/faturaterceiros', '');
        breadcrumbService.addFriendlyNameForRoute('/custocontauti', '');
        breadcrumbService.addFriendlyNameForRoute('/inss', '');
        breadcrumbService.addFriendlyNameForRoute('/portanes', '');
        breadcrumbService.addFriendlyNameForRoute('/contasps', '');
        breadcrumbService.addFriendlyNameForRoute('/fechamentoconta', '');
        breadcrumbService.addFriendlyNameForRoute('/fechamentopartic', '');
        breadcrumbService.addFriendlyNameForRoute('/controleinternacao', '');
        breadcrumbService.addFriendlyNameForRoute('/faturaconvenio', '');
        breadcrumbService.addFriendlyNameForRoute('/exthono', '');
        breadcrumbService.addFriendlyNameForRoute('/contaltas', '');
        breadcrumbService.addFriendlyNameForRoute('/relcontas', '');
        breadcrumbService.addFriendlyNameForRoute('/notemitfatur', '');
        breadcrumbService.addFriendlyNameForRoute('/notemitsimples', '');
        breadcrumbService.addFriendlyNameForRoute('/notaemittesouraria', '');
        breadcrumbService.addFriendlyNameForRoute('/faturaimagem', '');
        breadcrumbService.addFriendlyNameForRoute('/infopaquehono', '');
        breadcrumbService.addFriendlyNameForRoute('/gastomedic', '');
        breadcrumbService.addFriendlyNameForRoute('/excluirfatrx', '');
        breadcrumbService.addFriendlyNameForRoute('/tiss', '');
        breadcrumbService.addFriendlyNameForRoute('/relprodambu', '');
        breadcrumbService.addFriendlyNameForRoute('/acompcontasfaturamento', '');

        breadcrumbService.addFriendlyNameForRoute('/taskboard', '');
        breadcrumbService.addFriendlyNameForRoute('/editor', 'Editor');
        breadcrumbService.addFriendlyNameForRoute('/video-player', 'Editor');
        breadcrumbService.addFriendlyNameForRoute('/editor/wysiwyg', 'Wysiwyg');
        breadcrumbService.addFriendlyNameForRoute('/editor/ckeditor', 'Ckeditor');
        breadcrumbService.addFriendlyNameForRoute('/icons', '');
        breadcrumbService.addFriendlyNameForRoute('/components', 'Components');
        breadcrumbService.addFriendlyNameForRoute('/components/buttons', 'Buttons');
        breadcrumbService.addFriendlyNameForRoute('/components/cards', 'Cards');
        breadcrumbService.addFriendlyNameForRoute('/components/grid', 'Grid');
        breadcrumbService.addFriendlyNameForRoute('/components/list', 'List');
        breadcrumbService.addFriendlyNameForRoute('/components/menu', 'Menu');
        breadcrumbService.addFriendlyNameForRoute('/components/slider', 'Slider');
        breadcrumbService.addFriendlyNameForRoute('/components/snackbar', 'Snackbar');
        breadcrumbService.addFriendlyNameForRoute('/components/dialog', 'Dialog');
        breadcrumbService.addFriendlyNameForRoute('/components/select', 'Select');
        breadcrumbService.addFriendlyNameForRoute('/components/input', 'Input');
        breadcrumbService.addFriendlyNameForRoute('/components/colorpicker', 'Colorpicker');
        breadcrumbService.addFriendlyNameForRoute('/checkbox', 'Checkbox');
        breadcrumbService.addFriendlyNameForRoute('/components/radio', 'Radio');
        breadcrumbService.addFriendlyNameForRoute('/components/toolbar', 'Toolbar');
        breadcrumbService.addFriendlyNameForRoute('/components/progress', 'Progress');
        breadcrumbService.addFriendlyNameForRoute('/components/tabs', 'Tabs');
        breadcrumbService.addFriendlyNameForRoute('/dragndrop', 'Drag and Drop');
        breadcrumbService.addFriendlyNameForRoute('/dragndrop/dragula', 'Dragula');
        breadcrumbService.addFriendlyNameForRoute('/dragndrop/sortable', 'SortableJS');
        breadcrumbService.addFriendlyNameForRoute('/chart', 'Charts');
        breadcrumbService.addFriendlyNameForRoute('/chart/ng2-charts', 'NG2 Charts');
        breadcrumbService.addFriendlyNameForRoute('/chart/easy-pie-chart', 'Easy Pie');
        breadcrumbService.addFriendlyNameForRoute('/tables', 'Table');
        breadcrumbService.addFriendlyNameForRoute('/tables/fullscreen', 'Full Screen');
        breadcrumbService.addFriendlyNameForRoute('/tables/selection', 'Selection');
        breadcrumbService.addFriendlyNameForRoute('/tables/pinning', 'Pinning');
        breadcrumbService.addFriendlyNameForRoute('/tables/sorting', 'Sorting');
        breadcrumbService.addFriendlyNameForRoute('/tables/Paging', 'Paging');
        breadcrumbService.addFriendlyNameForRoute('/tables/editing', 'Editing');
        breadcrumbService.addFriendlyNameForRoute('/tables/filter', 'Filter');
        breadcrumbService.addFriendlyNameForRoute('/tables/responsive', 'Responsive');
        breadcrumbService.addFriendlyNameForRoute('/forms', 'Forms');
        breadcrumbService.addFriendlyNameForRoute('/forms/form-wizard', 'Form Wizard');
        breadcrumbService.addFriendlyNameForRoute('/forms/form-validation', 'Form Validation');
        breadcrumbService.addFriendlyNameForRoute('/forms/form-upload', 'Form Upload');
        breadcrumbService.addFriendlyNameForRoute('/forms/form-tree', 'Tree');
        breadcrumbService.addFriendlyNameForRoute('/maps', 'Maps');
        breadcrumbService.addFriendlyNameForRoute('/maps/googlemap', 'Google Map');
        breadcrumbService.addFriendlyNameForRoute('/maps/leaflet', 'Leaflet Map');
        // breadcrumbService.addFriendlyNameForRoute('/pages', 'Pages');
        breadcrumbService.addFriendlyNameForRoute('/pages/media', 'Gallery');
        breadcrumbService.addFriendlyNameForRoute('/pages/pricing', 'Pricing');
        breadcrumbService.addFriendlyNameForRoute('/pages/blank', 'Blank');
        breadcrumbService.addFriendlyNameForRoute('/pages/mediaV2', 'Gallery V2');
        breadcrumbService.addFriendlyNameForRoute('/pages/pricing-1', 'Pricing-1');
        breadcrumbService.addFriendlyNameForRoute('/pages/timeline', 'Timeline');
        breadcrumbService.addFriendlyNameForRoute('/pages/faq', 'FAQ');
        breadcrumbService.addFriendlyNameForRoute('/pages/feedback', 'Feedback');
        breadcrumbService.addFriendlyNameForRoute('/pages/about', 'About');
        breadcrumbService.addFriendlyNameForRoute('/pages/contact', 'Contact');
        breadcrumbService.addFriendlyNameForRoute('/pages/search', 'Search');
        breadcrumbService.addFriendlyNameForRoute('/pages/comingsoon', 'Coming Soon');
        breadcrumbService.addFriendlyNameForRoute('/pages/maintenance', 'Maintenance');
        breadcrumbService.addFriendlyNameForRoute('/users', 'Users');
        breadcrumbService.addFriendlyNameForRoute('/users/userprofile', 'User Profile');
        breadcrumbService.addFriendlyNameForRoute('/users/userlist', 'User List');
        breadcrumbService.addFriendlyNameForRoute('/session', 'Session');
        breadcrumbService.addFriendlyNameForRoute('/session/login', 'Login');
        breadcrumbService.addFriendlyNameForRoute('/session/register', 'Register');
        breadcrumbService.addFriendlyNameForRoute('/session/forgot-password', 'Forgot');
        breadcrumbService.addFriendlyNameForRoute('/session/lockscreen', 'Lock Screen');
        breadcrumbService.addFriendlyNameForRoute('/courses', 'Courses');
        breadcrumbService.addFriendlyNameForRoute('/courses/courses', 'Courses');
        breadcrumbService.addFriendlyNameForRoute('/courses/courses-list', 'Courses List');
        breadcrumbService.addFriendlyNameForRoute('/courses/course-detail', 'Course Detail');
        breadcrumbService.addFriendlyNameForRoute('/courses/signin', 'Sign In');
        breadcrumbService.addFriendlyNameForRoute('/courses/payment', 'Payment');
        breadcrumbService.addFriendlyNameForRoute('/ecommerce', 'Ecommerce');
        breadcrumbService.addFriendlyNameForRoute('/ecommerce/shop', 'Shop');
        breadcrumbService.addFriendlyNameForRoute('/ecommerce/cart', 'Cart');
        breadcrumbService.addFriendlyNameForRoute('/ecommerce/checkout', 'Checkout');
        breadcrumbService.addFriendlyNameForRoute('/ecommerce/cards', 'Cards');
        breadcrumbService.addFriendlyNameForRoute('/ecommerce/invoice', 'Invoice');
        breadcrumbService.addFriendlyNameForRoute('/users/userprofilev2', 'User Profile V2');
        breadcrumbService.addFriendlyNameForRoute('/user-management', 'Management');
        breadcrumbService.addFriendlyNameForRoute('/user-management/usermanagelist', 'User List');
        breadcrumbService.addFriendlyNameForRoute('/user-management/usergridlist', 'User Grid');
        breadcrumbService.addFriendlyNameForRoute('/video-player', '');
    }

    ngOnInit() {
        this.pageTitleService.title.subscribe((val: string) => {
            this.header = val;
        });

        setTimeout(() => {
            if ((this.router.url === '/courses/courses' || this.router.url === '/courses/courses-list' ||
                this.router.url === '/courses/course-detail') && window.innerWidth < 1920) {
                this.coreService.sidenavMode = 'over';
                this.coreService.sidenavOpen = false;
            } else if ((this.router.url === '/ecommerce/shop' || this.router.url === '/ecommerce/checkout' ||
                this.router.url === '/ecommerce/invoice') && window.innerWidth < 1920) {
                this.coreService.sidenavMode = 'over';
                this.coreService.sidenavOpen = false;
            } else if (window.innerWidth > 1280) {
                this.coreService.sidenavMode = 'side';
                this.coreService.sidenavOpen = true;
            }
        }, 10)

        this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
            this.url = event.url;
        });

        if (this.url !== '/session/login' && this.url !== '/session/register' &&
            this.url !== '/session/forgot-password' && this.url !== '/session/lockscreen') {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar-container ')
        }

        this.deviceInfo = this.deviceService.getDeviceInfo();
        if (this.deviceInfo.device === 'ipad' || this.deviceInfo.device === 'iphone' ||
            this.deviceInfo.device === 'android') {
            this.coreService.sidenavMode = 'over';
            this.coreService.sidenavOpen = false;
        }

        this._mediaSubscription = this.media.media$.subscribe((change: MediaChange) => {
            if (this.coreService.horizontalStatus) {
                if (window.innerWidth <= 959) {
                    this.coreService.horizontalSizeStatue = false;
                } else {
                    this.coreService.horizontalSizeStatue = true;
                }
            }
            this.isMobileStatus = (change.mqAlias === 'xs') || (change.mqAlias === 'sm') || (change.mqAlias === 'md');
            this.isMobile = this.isMobileStatus;
            if (this.isMobile || ((this.router.url === '/ecommerce/shop' || this.router.url === '/ecommerce/checkout' ||
                this.router.url === '/ecommerce/invoice' || this.router.url === '/courses/courses' ||
                this.router.url === '/courses/courses-list' || this.router.url === '/courses/course-detail') && window.innerWidth < 1920)) {
                this.coreService.sidenavMode = 'over';
                this.coreService.sidenavOpen = false;
            } else {
                this.coreService.sidenavMode = 'side';
                this.coreService.sidenavOpen = true;
            }
        });

        this._routerEventsSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd && this.isMobile) {
                this.sidenav.close();
            }
        });
    }

    ngOnDestroy() {
        this._router.unsubscribe();
        this._mediaSubscription.unsubscribe();
    }


    /**
     * Como saída (router outlet) emitirá um evento de ativação sempre que um novo componente estiver sendo instanciado.
     */
    onActivate(e, scrollContainer) {
        scrollContainer.scrollTop = 0;
        if ((this.router.url === '/courses/courses' || this.router.url === '/courses/courses-list' ||
            this.router.url === '/courses/course-detail') && window.innerWidth < 1920) {
            this.coreService.sidenavMode = 'over';
            this.coreService.sidenavOpen = false;
        } else if ((this.router.url === '/ecommerce/shop' || this.router.url === '/ecommerce/checkout' ||
            this.router.url === '/ecommerce/invoice') && window.innerWidth < 1920) {
            this.coreService.sidenavMode = 'over';
            this.coreService.sidenavOpen = false;
        } else if (window.innerWidth > 1280) {
            this.coreService.sidenavMode = 'side';
            this.coreService.sidenavOpen = true;
        }
    }

    /**
     * toggleFullscreen method is used to show a template in fullscreen.
     */
    toggleFullscreen() {
        if (screenfull.enabled) {
            screenfull.toggle();
            this.isFullscreen = !this.isFullscreen;
        }
    }

    /**
     * customizerFunction is used to open and close the customizer.
     */
    customizerFunction() {
        this.customizerIn = !this.customizerIn;
    }

    /**
     * addClassOnBody method is used to add a add or remove class on body.
     */
    addClassOnBody(event) {
        const body = document.body;
        if (event.checked) {
            body.classList.add('dark-theme-active');
        } else {
            body.classList.remove('dark-theme-active');
        }
    }

    /**
     * addMenuItem is used to add a new menu into menu list.
     */
    addMenuItem(): void {
        this.menuItems.add({
            state: 'pages',
            name: 'GENE MENU',
            type: 'sub',
            icon: 'trending_flat',
            children: [
                {state: 'blank', name: 'SUB MENU1'},
                {state: 'blank', name: 'SUB MENU2'}
            ]
        });
    }

    /**
     * changeRTL method is used to change the layout of template.
     */
    changeRTL(isChecked) {
        if (isChecked) {
            this.layout = 'rtl'
        } else {
            this.layout = 'ltr'
        }
    }

    /**
     * toggleSidebar method is used a toggle a side nav bar.
     */
    toggleSidebar() {
        this.coreService.sidenavOpen = !this.coreService.sidenavOpen;
    }

    /**
     * logOut method is used to log out the  template.
     */
    // logOut() {
    //     this.authService.logOut();
    // }

    /**
     * onDelete function is used to open the delete dialog.
     */
    onDelete(cart) {
        // this.ecommerceService.deleteDialog('Are you sure you want to delete this product permanently?')
        //     .subscribe(res => {
        //             this.popupDeleteResponse = res
        //         },
        //         err => console.log(err),
        //         () => this.getPopupDeleteResponse(this.popupDeleteResponse, cart)
        //     );
    }

    /**
     * getPopupDeleteResponse is used to delete the cart item when reponse is yes.
     */
    getPopupDeleteResponse(response: any, cart) {
        if (response === 'yes') {
            // this.ecommerceService.localStorageDelete(cart, 'cartProduct');
        }
    }

    /**
     * sidebarFilter function filter the color for header section.
     */
    sidebarFilter(selectedFilter) {
        document.getElementById('main-app').classList.remove('sidebar-color-dark');
        this.isSidebarFilterClass = selectedFilter.colorSelect;
        document.querySelector('.radius-circle').classList.remove('radius-circle');
        document.getElementById(selectedFilter.sideBarSelect).classList.add('radius-circle');
    }

    /**
     * sidebarFilter function filter the color for header section.
     */
    headerFilter(selectedFilter) {
        document.getElementById('main-app').classList.remove('header-color-dark');
        this.isHeaderFilterClass = selectedFilter.colorSelect;
        document.querySelector('.radius-active').classList.remove('radius-active');
        document.getElementById(selectedFilter.headerSelect).classList.add('radius-active');
    }

    /**
     *chatMenu method is used to toggle a chat menu list.
     */
    chatMenu() {
        document.getElementById('gene-chat').classList.toggle('show-chat-list');
    }

    /**
     * onChatOpen method is used to open a chat window.
     */
    onChatOpen() {
        document.getElementById('chat-open').classList.toggle('show-chat-window');
    }

    /**
     * onChatWindowClose method is used to close the chat window.
     */
    chatWindowClose() {
        document.getElementById('chat-open').classList.remove('show-chat-window');
    }

    /**
     * O método changeLayout é usado para alterar o layout vertical para o layout horizontal.
     */
    changeLayout() {
        this.coreService.horizontalStatus = true;
        if (window.innerWidth <= 959) {
            this.coreService.horizontalSizeStatue = false;
        } else {
            this.coreService.horizontalSizeStatue = true;
        }
    }
}


