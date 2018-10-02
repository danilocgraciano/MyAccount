var Checkout = Checkout || {};

Checkout.RadioTipoComprador = (function () {

    function RadioTipoComprador() {
        this.radioTipoComprador = $('input[type=radio][name=radioTipoComprador]');
        this.emitter = $({});
        this.on = this.emitter.on.bind(this.emitter);
    }

    RadioTipoComprador.prototype.init = function () {
        this.radioTipoComprador.on('change', changeFisicaJuridica.bind(this));
    }

    RadioTipoComprador.prototype.getSelected = function () {
        return this.radioTipoComprador.filter(":checked").val();
    }

    RadioTipoComprador.prototype.setSelected = function (value) {
        this.radioTipoComprador.filter("[value='" + value + "']").click();
    }

    function changeFisicaJuridica() {
        this.emitter.trigger('change', this.radioTipoComprador.filter(":checked").val());
    }

    return RadioTipoComprador;

}());