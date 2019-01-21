export class RadioTipoComprador {
    constructor() {
        this.radioTipoComprador = $('input[type=radio][name=radioTipoComprador]');
        this.emitter = $({});
        this.on = this.emitter.on.bind(this.emitter);
    }

    init() {
        this.radioTipoComprador.on('change', this._changeFisicaJuridica.bind(this));
    }

    _changeFisicaJuridica() {
        this.emitter.trigger('change', this.radioTipoComprador.filter(":checked").val());
    }

    getSelected() {
        return this.radioTipoComprador.filter(":checked").val();
    }

    setSelected(value) {
        this.radioTipoComprador.filter("[value='" + value + "']").click();
    }
}