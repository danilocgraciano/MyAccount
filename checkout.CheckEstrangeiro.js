Checkout.CheckEstrangeiro = (function () {

    function CheckEstrangeiro() {
        this.chkEstrangeiro = $('#chkEstrangeiro')
        this.emitter = $({});
        this.on = this.emitter.on.bind(this.emitter);
    }

    CheckEstrangeiro.prototype.init = function () {
        this.chkEstrangeiro.on('change', changeEstrangeiro.bind(this));
    }

    CheckEstrangeiro.prototype.hide = function () {
        TrataTela.hide(this.chkEstrangeiro);
    }

    CheckEstrangeiro.prototype.show = function () {
        TrataTela.show(this.chkEstrangeiro);
    }

    CheckEstrangeiro.prototype.isChecked = function () {
        return this.chkEstrangeiro.is(":checked");
    }

    function changeEstrangeiro() {
        this.emitter.trigger('change', this.chkEstrangeiro.is(':checked'));
    }

    return CheckEstrangeiro;

}());