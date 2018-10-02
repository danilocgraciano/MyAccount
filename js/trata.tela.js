var TrataTela = TrataTela || {};

TrataTela.hide = (function (component) {

    if (component[0]) {
        this.label = $("label[for=" + component[0].id + "]");
        this.field = $("#" + component[0].id);
        this.parent = $("#" + component[0].id).closest('div');

        this.label.hide();
        this.field.hide();
        this.parent.hide();
    }
});

TrataTela.show = (function (component) {


    if (component[0]) {
        this.label = $("label[for=" + component[0].id + "]");
        this.field = $("#" + component[0].id);
        this.parent = $("#" + component[0].id).closest('div');

        this.label.show();
        this.field.show();
        this.parent.show();
    }
});
