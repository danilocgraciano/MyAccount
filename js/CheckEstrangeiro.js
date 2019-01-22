import { TrataTela } from "./TrataTela.js";

export class CheckEstrangeiro {
    constructor() {
        this.chkEstrangeiro = $('#chkEstrangeiro')
        this.emitter = $({});
        this.on = this.emitter.on.bind(this.emitter);
    }

    init() {
        this.chkEstrangeiro.on('change', this.changeEstrangeiro.bind(this));
    }

    changeEstrangeiro() {
        this.emitter.trigger('change', this.chkEstrangeiro.is(':checked'));
    }

    hide() {
        TrataTela.hide(this.chkEstrangeiro);
    }
    show() {
        TrataTela.show(this.chkEstrangeiro);
    }

    isChecked() {
        return this.chkEstrangeiro.is(':checked');
    }
}