import * as constants from './Constants.js';
export class TabFormaPagamento {
    constructor() {
        this.tabFormFormaPagamento = $('#tabFormaPagamento');
        this.emitter = $({});
        this.on = this.emitter.on.bind(this.emitter);
        this.selectedTab = constants.BOLETO_VISTA;
        this.chkMistoBoleto = this.tabFormFormaPagamento.find('#chkMistoBoleto');
        this.chkMistoCredito = this.tabFormFormaPagamento.find('#chkMistoCredito');
        this.chkMistoDebito = this.tabFormFormaPagamento.find('#chkMistoDebito');
        this.chkMistoDinheiro = this.tabFormFormaPagamento.find('#chkMistoDinheiro');
    }

    init() {
        this.tabFormFormaPagamento.on('shown.bs.tab', this._changeSelectedTab.bind(this));
        this.chkMistoBoleto.on('change', this._changePagamentoMisto.bind(this));
        this.chkMistoCredito.on('change', this._changePagamentoMisto.bind(this));
        this.chkMistoDebito.on('change', this._changePagamentoMisto.bind(this));
        this.chkMistoDinheiro.on('change', this._changePagamentoMisto.bind(this));
    }

    _changeSelectedTab(event) {
        this.selectedTab = event.target.text;
        this.emitter.trigger('change', event.target.text);
    }

    _changePagamentoMisto() {
        this.emitter.trigger('mistoChanged');
    }

    getSelectedTab() {
        return this.selectedTab;
    }

    isMistoBoletoChecked() {
        return this.chkMistoBoleto.is(":checked");
    }

    isMistoCreditoSelected() {
        return this.chkMistoCredito.is(":checked");
    }

    isMistoDebitoSelected() {
        return this.chkMistoDebito.is(":checked");
    }

    isMistoDinheiroSelected() {
        return this.chkMistoDinheiro.is(":checked");
    }
}