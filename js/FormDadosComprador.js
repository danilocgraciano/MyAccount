import { TrataTela } from "./TrataTela.js";
import * as constants from './Constants.js';

export class FormDadosComprador {

    constructor(radioTipoComprador, chkEstrangeiro, tabFormaPagamento) {
        this.formDadosComprador = $('#formDadosComprador');
        this.radioTipoComprador = radioTipoComprador;
        this.chkEstrangeiro = chkEstrangeiro;
        this.tabFormaPagamento = tabFormaPagamento;
    }

    init() {
        this.radioTipoComprador.on('change', this._onChangeFisicaJuridica.bind(this));
        this.chkEstrangeiro.on('change', this._onChangeEstrangeiro.bind(this));
        this.tabFormaPagamento.on('change', this._onChangeFormaPagamento.bind(this));
        this.tabFormaPagamento.on('mistoChanged', this._onChangePagamentoMisto.bind(this));

        this.lblCpf = this.formDadosComprador.find("label[for='txtCpf']");
        this.txtCpf = this.formDadosComprador.find('#txtCpf');
        this.txtCnpj = this.formDadosComprador.find('#txtCnpj');
        this.txtRazaoSocial = this.formDadosComprador.find('#txtRazaoSocial');
        this.txtNomeFantasia = this.formDadosComprador.find('#txtNomeFantasia');
        this.chkIsento = this.formDadosComprador.find('#chkIsento');
        this.txtInscricaoEstadual = this.formDadosComprador.find('#txtInscricaoEstadual');
        this.txtResponsavelNome = this.formDadosComprador.find('#txtResponsavelNome');
        this.txtResponsavelCpf = this.formDadosComprador.find('#txtResponsavelCpf');
        this.txtNome = this.formDadosComprador.find('#txtNome');
        this.txtRg = this.formDadosComprador.find('#txtRg');
        this.txtTelefoneCelular = this.formDadosComprador.find('#txtTelefoneCelular');
        this.txtTelefoneResidencial = this.formDadosComprador.find('#txtTelefoneResidencial');
        this.txtTelefoneComercial = this.formDadosComprador.find('#txtTelefoneComercial');
        this.txtEmail = this.formDadosComprador.find('#txtEmail');
        this.dtfDataNascimento = this.formDadosComprador.find('#dtfDataNascimento');
        this.comboSexo = this.formDadosComprador.find('#comboSexo');
        this.txtCEP = this.formDadosComprador.find('#txtCEP');
        this.txtLogradouro = this.formDadosComprador.find('#txtLogradouro');
        this.txtNumero = this.formDadosComprador.find('#txtNumero');
        this.txtBairro = this.formDadosComprador.find('#txtBairro');
        this.txtComplemento = this.formDadosComprador.find('#txtComplemento');
        this.txtMunicipio = this.formDadosComprador.find('#txtMunicipio');
        this.radioTipoComprador.setSelected(constants.FISICA);

        this._setCamposObrigatorios();
    }

    _onChangeFisicaJuridica(event, value) {

        if (value == constants.FISICA) {

            TrataTela.hide(this.txtCnpj);
            TrataTela.hide(this.txtRazaoSocial);
            TrataTela.hide(this.txtNomeFantasia);
            TrataTela.hide(this.chkIsento);
            TrataTela.hide(this.txtInscricaoEstadual);
            TrataTela.hide(this.txtResponsavelNome);
            TrataTela.hide(this.txtResponsavelCpf);

            TrataTela.show(this.txtCpf);
            TrataTela.show(this.txtNome);
            TrataTela.show(this.txtRg);
            TrataTela.show(this.txtTelefoneResidencial);
            TrataTela.show(this.dtfDataNascimento);
            TrataTela.show(this.comboSexo);
            this.chkEstrangeiro.show();

        } else {//JURIDICA

            TrataTela.show(this.txtCnpj);
            TrataTela.show(this.txtRazaoSocial);
            TrataTela.show(this.txtNomeFantasia);
            TrataTela.show(this.chkIsento);
            TrataTela.show(this.txtInscricaoEstadual);
            TrataTela.show(this.txtResponsavelNome);
            TrataTela.show(this.txtResponsavelCpf);

            TrataTela.hide(this.txtCpf);
            TrataTela.hide(this.txtNome);
            TrataTela.hide(this.txtRg);
            TrataTela.hide(this.txtTelefoneResidencial);
            TrataTela.hide(this.dtfDataNascimento);
            TrataTela.hide(this.comboSexo);
            this.chkEstrangeiro.hide();

        }

        this._setCamposObrigatorios();
    }

    _onChangeEstrangeiro(event, value) {

        if (value) {
            this.lblCpf.text('Documento');
            TrataTela.hide(this.txtRg);
        } else {
            this.lblCpf.text('CPF');
            TrataTela.show(this.txtRg);
        }

        this._setCamposObrigatorios();
    }

    _onChangeFormaPagamento() {
        this._setCamposObrigatorios();
    }

    _onChangePagamentoMisto() {
        this._setCamposObrigatorios();
    }

    _setCamposObrigatorios() {

        this.lblCpf.prop('required', false);
        this.txtCpf.prop('required', false);
        this.txtCnpj.prop('required', false);
        this.txtRazaoSocial.prop('required', false);
        this.txtNomeFantasia.prop('required', false);
        this.chkIsento.prop('required', false);
        this.txtInscricaoEstadual.prop('required', false);
        this.txtResponsavelNome.prop('required', false);
        this.txtResponsavelCpf.prop('required', false);
        this.txtNome.prop('required', false);
        this.txtRg.prop('required', false);
        this.txtTelefoneCelular.prop('required', false);
        this.txtTelefoneResidencial.prop('required', false);
        this.txtTelefoneComercial.prop('required', false);
        this.txtEmail.prop('required', false);
        this.dtfDataNascimento.prop('required', false);
        this.comboSexo.prop('required', false);

        this.txtCEP.prop('required', false);
        this.txtLogradouro.prop('required', false);
        this.txtNumero.prop('required', false);
        this.txtBairro.prop('required', false);
        this.txtComplemento.prop('required', false);
        this.txtMunicipio.prop('required', false);


        if (this.radioTipoComprador.getSelected() == constants.FISICA) {
            this.txtCpf.prop('required', true);
            this.txtNome.prop('required', true);
            this.txtRg.prop('required', true);

            if (this.chkEstrangeiro.isChecked())
                this.txtRg.prop('required', false);

            this.txtTelefoneCelular.prop('required', true);
            this.txtEmail.prop('required', true);
            this.dtfDataNascimento.prop('required', true);
            this.comboSexo.prop('required', true);
            this.txtCEP.prop('required', true);
            this.txtLogradouro.prop('required', true);
            this.txtNumero.prop('required', true);
            this.txtBairro.prop('required', true);
            this.txtMunicipio.prop('required', true);
        } else {
            this.txtCnpj.prop('required', true);
            this.txtRazaoSocial.prop('required', true);
            this.txtInscricaoEstadual.prop('required', true);
            this.txtTelefoneComercial.prop('required', true);
            this.txtEmail.prop('required', true);
            this.txtResponsavelNome.prop('required', true);
            this.txtResponsavelCpf.prop('required', true);
            this.txtCEP.prop('required', true);
            this.txtLogradouro.prop('required', true);
            this.txtNumero.prop('required', true);
            this.txtBairro.prop('required', true);
            this.txtMunicipio.prop('required', true);
        }

        if (this.tabFormaPagamento.selectedTab == constants.CARTAO_CREDITO
            || this.tabFormaPagamento.selectedTab == constants.CARTAO_DEBITO
            || this.tabFormaPagamento.selectedTab == constants.DINHEIRO) {
            this.txtRg.prop('required', false);
            this.txtLogradouro.prop('required', false);
            this.txtNumero.prop('required', false);
            this.txtBairro.prop('required', false);
            this.txtMunicipio.prop('required', false);
        }

        if (this.tabFormaPagamento.selectedTab == constants.MISTO) {


            this.txtRg.prop('required', false);
            this.txtLogradouro.prop('required', false);
            this.txtNumero.prop('required', false);
            this.txtBairro.prop('required', false);
            this.txtMunicipio.prop('required', false);

            if (this.tabFormaPagamento.isMistoBoletoChecked()) {
                this.txtRg.prop('required', true);
                this.txtLogradouro.prop('required', true);
                this.txtNumero.prop('required', true);
                this.txtBairro.prop('required', true);
                this.txtMunicipio.prop('required', true);
            }

        }

    }
}
