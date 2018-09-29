$(function () {

    var radioTipoComprador = new Checkout.RadioTipoComprador();
    radioTipoComprador.init();

    var chkEstrangeiro = new Checkout.CheckEstrangeiro();
    chkEstrangeiro.init();

    var tabPagamento = new Checkout.TabFormaPagamento();
    tabPagamento.init();

    var formCheckout = new Checkout.FormDadosComprador(radioTipoComprador, chkEstrangeiro, tabPagamento);
    formCheckout.init();

});
