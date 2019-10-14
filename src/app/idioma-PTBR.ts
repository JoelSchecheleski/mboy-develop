import {Injectable} from '@angular/core';

@Injectable()
export class IdiomaPTBR {
  language = {
    page: 'pagina',
    to: 'para',
    more: 'mais',
    of: 'de',
    next: '',
    last: 'último',
    first: 'próximo',
    previous: 'anterior',
    loadingOoo: 'carregando...',
    selectAll: 'selecionar todos',
    searchOoo: 'procurando...',
    Search: 'Buscar',
    blanks: 'branco',
    filterOoo: 'filtro...',
    applyFilter: 'aplicar filtro...',
    equals: 'igual',
    notEqual: 'não igual',
    lessThanOrEqual: 'menos do que ou igual',
    greaterThanOrEqual: 'mais do que ou igal',
    inRange: 'na faixa',
    lessThan: 'menos que',
    greaterThan: 'maior que',
    contains: 'contém',
    startsWith: 'começa com',
    endsWith: 'finaliza com',
    group: 'grupo',
    columns: 'colunas',
    rowGroupColumns: 'colunas do grupo de linhas',
    rowGroupColumnsEmptyMessage: 'mensagens de coluna de grupo de linhas vazias',
    valueColumns: 'colunas de valor',
    pivotMode: 'modo de rotação',
    groups: 'grupos',
    values: 'valores',
    pivots: 'pivôs',
    valueColumnsEmptyMessage: 'Mensagem vazia de colunas de valor',
    pivotColumnsEmptyMessage: 'Pivôs vazia de colunas de valor',
    noRowsToShow: 'Linhas para mostrar',
    pinColumn: 'coluna pin',
    valueAggregation: 'agregação de valor',
    autosizeThiscolumn: 'Coluna automatica de tamanho',
    autosizeAllColumns: 'todas as colunas de tamanho automatico',
    groupBy: 'agrupar por',
    ungroupBy: 'desagrupar por',
    resetColumns: 'resetar colunas',
    expandAll: 'expandir todas',
    collapseAll: 'retrair todas',
    toolPanel: 'painel de ferramentas',
    export: 'Exportar',
    csvExport: 'Exportar para CSV',
    excelExport: 'Exportar para Excel',
    pinLeft: '<<',
    pinRight: '>>',
    noPin: '<>',
    sum: 'Somar',
    min: 'Mínimo',
    max: 'Máximo',
    none: 'Vazio',
    count: 'Contador',
    average: 'Médio',
    copy: 'Copiar',
    ctrlC: 'ctrl+C',
    paste: 'Colar',
    ctrlV: 'ctrl+V',
  };

  storage: Array<any>;

  public ptBR = {
    firstDayOfWeek: 1,
    dayNames: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
    dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    monthNames: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro',
      'outubro', 'novembro', 'dezembro'],
    monthNamesShort: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
    today: 'Hoje',
    clear: 'Limpar'
  };

  clear() {
    this.storage = null;
  }

}
