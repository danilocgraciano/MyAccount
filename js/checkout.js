import { RadioTipoComprador } from "./RadioTipoComprador.mjs";
import { CheckEstrangeiro } from "./CheckEstrangeiro";
import { TabFormaPagamento } from "./TabFormaPagamento.mjs";
import { FormDadosComprador } from "./FormDadosComprador.mjs";

export class Checkout {
    constructor() {

        let radioTipoComprador = new RadioTipoComprador();
        radioTipoComprador.init();

        let chkEstrangeiro = new CheckEstrangeiro();
        chkEstrangeiro.init();

        let tabPagamento = new TabFormaPagamento();
        tabPagamento.init();

        let formCheckout = new FormDadosComprador(radioTipoComprador, chkEstrangeiro, tabPagamento);
        formCheckout.init();
    }
}