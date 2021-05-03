function modal_add() {

    $("#modal_zoom").addClass('modal-action');

};

function modal_close() {

    $("#modal_zoom").removeClass('modal-action');

};

function Excluir(){

    var par = $(this).parent().parent(); //tr

    par.remove();
};

