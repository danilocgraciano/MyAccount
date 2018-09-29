var Checkout = Checkout || {};

Checkout.FormDadosComprador = (function () {

    function FormDadosComprador(radioTipoComprador, chkEstrangeiro, tabFormaPagamento) {
        this.radioTipoComprador = radioTipoComprador;
        this.chkEstrangeiro = chkEstrangeiro;
        this.tabFormaPagamento = tabFormaPagamento;
    }

    FormDadosComprador.prototype.init = function () {
        this.radioTipoComprador.on('change', onChangeFisicaJuridica.bind(this));
        this.chkEstrangeiro.on('change', onChangeEstrangeiro.bind(this));
        this.tabFormaPagamento.on('change', onChangeFormaPagamento.bind(this));
        this.tabFormaPagamento.on('mistoChanged', onChangePagamentoMisto.bind(this));

        this.lblCpf = $("label[for='txtCpf']");
        this.txtCpf = $('#txtCpf');
        this.txtCnpj = $('#txtCnpj');
        this.txtRazaoSocial = $('#txtRazaoSocial');
        this.txtNomeFantasia = $('#txtNomeFantasia');
        this.chkIsento = $('#chkIsento');
        this.txtInscricaoEstadual = $('#txtInscricaoEstadual');
        this.txtResponsavelNome = $('#txtResponsavelNome');
        this.txtResponsavelCpf = $('#txtResponsavelCpf');
        this.txtNome = $('#txtNome');
        this.txtRg = $('#txtRg');
        this.txtTelefoneCelular = $('#txtTelefoneCelular');
        this.txtTelefoneResidencial = $('#txtTelefoneResidencial');
        this.txtTelefoneComercial = $('#txtTelefoneComercial');
        this.txtEmail = $('#txtEmail');
        this.dtfDataNascimento = $('#dtfDataNascimento');
        this.comboSexo = $('#comboSexo');
        this.txtCEP = $('#txtCEP');
        this.txtLogradouro = $('#txtLogradouro');
        this.txtNumero = $('#txtNumero');
        this.txtBairro = $('#txtBairro');
        this.txtComplemento = $('#txtComplemento');
        this.txtMunicipio = $('#txtMunicipio');
        this.radioTipoComprador = $('input[type=radio][name=radioTipoComprador]');

        this.radioTipoComprador.filter("[value=" + FISICA + "]").click();

        this.setCamposObrigatorios();

    }

    FormDadosComprador.prototype.setCamposObrigatorios = function () {

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


        if (this.radioTipoComprador.filter(":checked").val() == FISICA) {
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

        if (this.tabFormaPagamento.selectedTab == CARTAO_CREDITO
            || this.tabFormaPagamento.selectedTab == CARTAO_DEBITO
            || this.tabFormaPagamento.selectedTab == DINHEIRO) {
            this.txtRg.prop('required', false);
            this.txtLogradouro.prop('required', false);
            this.txtNumero.prop('required', false);
            this.txtBairro.prop('required', false);
            this.txtMunicipio.prop('required', false);
        }

        if (this.tabFormaPagamento.selectedTab == MISTO) {


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

    function onChangeFormaPagamento() {
        this.setCamposObrigatorios();
    }

    function onChangePagamentoMisto() {
        this.setCamposObrigatorios();
    }


    function onChangeFisicaJuridica(event, value) {

        if (value == FISICA) {

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

        this.setCamposObrigatorios();
    }

    function onChangeEstrangeiro(event, value) {

        if (value) {
            this.lblCpf.text('Documento');
            TrataTela.hide(this.txtRg);
        } else {
            this.lblCpf.text('CPF');
            TrataTela.show(this.txtRg);
        }

        this.setCamposObrigatorios();
    }

    return FormDadosComprador;

}());