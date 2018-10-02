var Checkout = Checkout || {};

Checkout.TabFormaPagamento = (function () {

    function TabFormaPagamento() {
        this.tabFormFormaPagamento = $('#tabFormaPagamento');
        this.emitter = $({});
        this.on = this.emitter.on.bind(this.emitter);
        this.selectedTab = BOLETO_VISTA;
        this.chkMistoBoleto = this.tabFormFormaPagamento.find('#chkMistoBoleto');
        this.chkMistoCredito = this.tabFormFormaPagamento.find('#chkMistoCredito');
        this.chkMistoDebito = this.tabFormFormaPagamento.find('#chkMistoDebito');
        this.chkMistoDinheiro = this.tabFormFormaPagamento.find('#chkMistoDinheiro');
    }

    TabFormaPagamento.prototype.init = function () {
        this.tabFormFormaPagamento.on('shown.bs.tab', changeSelectedTab.bind(this));
        this.chkMistoBoleto.on('change', changePagamentoMisto.bind(this));
        this.chkMistoCredito.on('change', changePagamentoMisto.bind(this));
        this.chkMistoDebito.on('change', changePagamentoMisto.bind(this));
        this.chkMistoDinheiro.on('change', changePagamentoMisto.bind(this));
    }

    TabFormaPagamento.prototype.selectedTab = function () {
        return this.selectedTab;
    }

    TabFormaPagamento.prototype.isMistoBoletoChecked = function () {
        return this.chkMistoBoleto.is(":checked");
    }

    TabFormaPagamento.prototype.isMistoCreditoSelected = function () {
        return this.chkMistoCredito.is(":checked");
    }

    TabFormaPagamento.prototype.isMistoDebitoSelected = function () {
        return this.chkMistoDebito.is(":checked");
    }

    TabFormaPagamento.prototype.isMistoDinheiroSelected = function () {
        return this.chkMistoDinheiro.is(":checked");
    }

    function changeSelectedTab(event) {
        this.selectedTab = event.target.text;
        this.emitter.trigger('change', event.target.text);
    }

    function changePagamentoMisto() {
        this.emitter.trigger('mistoChanged');
    }

    return TabFormaPagamento;

}());