import { RadioTipoComprador } from './RadioTipoComprador.js';
import { CheckEstrangeiro } from './CheckEstrangeiro.js';
import { TabFormaPagamento } from './TabFormaPagamento.js';
import { FormDadosComprador } from './FormDadosComprador.js';

class Checkout {
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

export let checkout = new Checkout(); 
