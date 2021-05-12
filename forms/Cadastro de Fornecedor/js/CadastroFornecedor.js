var ClickAdd1 = 0;
var ClickAdd2 = 0;

function pushAdd1() {

    wdkAddChild('tb_contato');

    ClickAdd1++; 

    var inputnomeAdd1 = $("#nomeAdd1").val();
    var inputdepartamentoAdd1 = $("#departamentoAdd1").val();
    var inputcelularAdd1 = $("#celularAdd1").val();
    var inputtelefoneAdd1 = $("#telefoneAdd1").val();
    var inputemailAdd1 = $("#emailAdd1").val();

    $("#tb_nomeAdd1___"+ClickAdd1).val(inputnomeAdd1);
    $("#tb_departamentoAdd1___"+ClickAdd1).val(inputdepartamentoAdd1);
    $("#tb_celularAdd1___"+ClickAdd1).val(inputcelularAdd1);
    $("#tb_telefoneAdd1___"+ClickAdd1).val(inputtelefoneAdd1);
    $("#tb_emailAdd1___"+ClickAdd1).val(inputemailAdd1);

    $("#nomeAdd1").val("");
    $("#departamentoAdd1").val("");
	$("#celularAdd1").val("");
	$("#telefoneAdd1").val("");
	$("#emailAdd1").val("");

    $(".excluir").bind("click", Excluir);
  

};

function pushAdd2() {

    wdkAddChild('tb_normas');

    ClickAdd2++; 

    var inputnorma = $("#normas_select").val();

    $("#tb_norma___"+ClickAdd2).val(inputnorma);

    $("#normas_select").val("");
    

    $(".excluir").bind("click", Excluir);

};

function Excluir(){

    var par = $(this).parent().parent(); //tr

    par.remove();
};