//EXECUTAR AO CARREGAR A PÁGINA
window.onload = function() {

    navegation();
    getUser();
    getUser2();
    maskInput();
    hoje('date_fornecedor');
    hoje('date_aprovacao');
    
};

//INSERÇÃO DE TABELAS
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

//NAVEGAÇÃO ENTRE ATIVIDADES DO PROCESSO
function navegation() {

    var atividade = getWKNumState();

    if (atividade == 0) {

        $('#panel5').addClass('nav-close');
        id();

    }

    if (atividade == 2) {

        $('#cnpj').prop('readonly', true);
        $('#companyName').prop('readonly', true);
        $('#nomeFantasia').prop('readonly', true);
        $('#escopo').prop('readonly', true);
        $('#cep').prop('readonly', true);
        $('#endereco').prop('readonly', true);
        $('#numero').prop('readonly', true);
        $('#complemento').prop('readonly', true);
        $('#bairro').prop('readonly', true);
        $('#estado').prop('readonly', true);
        $('#pais').prop('readonly', true);
        $('#telefone').prop('readonly', true);
        $('#email').prop('readonly', true);
        $('#nomeAdd1').prop('readonly', true);
        $('#departamentoAdd1').prop('readonly', true);
        $('#celularAdd1').prop('readonly', true);
        $('#telefoneAdd1').prop('readonly', true);
        $('#emailAdd1').prop('readonly', true);
        $('#observacao').prop('readonly', true);
        $('#resp_fornecedor').prop('readonly', true);
        $('#date_fornecedor').prop('readonly', true);
        $('#normas_select').prop('readonly', true);
        $('#aprovado').prop('readonly', true);

        $('#add1').prop('disabled', true);

        var countBtn = ex_button.length;
        for (var i = 0; i < countBtn; i++) {

            ex_button[i].disabled = true;

        }
        
        

    }

};

//Gerador de ID

function id() {

    var dsCadastro = DatasetFactory.getDataset("DSFormulariodeCadastrodeFornecedor", null, null, null);

    var linha = dsCadastro.values.length;

    var inputCP = document.getElementById("idCP");

    inputCP.value = "F-" + (linha + 1);
    
};

//CEP Automático
$("#cep").blur(function() {
        
    const paisAuto = "Brasil";
    const cadastroCEP = document.getElementById("pais");

    cadastroCEP.value = paisAuto;

    $.getJSON("//viacep.com.br/ws/"+ $("#cep").val() +"/json/", function(dados){ 
        
        $("#endereco").val(dados.logradouro);
        $("#bairro").val(dados.bairro);
        $("#estado").val(dados.localidade);
        
    })
});

function getUser() {
 
    //Condição de Busca
    var user = getWKUser();

    //Filtro de Busca 
    var userConstraint = DatasetFactory.createConstraint("colleaguePK.colleagueId", user, user, ConstraintType.MUST);

    var arrayConstraint = new Array(userConstraint);

    // Busca no Dataset + Condições de Filtro
    var array = DatasetFactory.getDataset("colleague", null, arrayConstraint, null);

    var responsavel = array.values[0].colleagueName    
    
    $("#resp_fornecedor").val(responsavel);


};

function getUser2() {
 
    //Condição de Busca
    var user = getWKUser();

    //Filtro de Busca 
    var userConstraint = DatasetFactory.createConstraint("colleaguePK.colleagueId", user, user, ConstraintType.MUST);

    var arrayConstraint = new Array(userConstraint);

    // Busca no Dataset + Condições de Filtro
    var array = DatasetFactory.getDataset("colleague", null, arrayConstraint, null);

    var responsavel = array.values[0].colleagueName    
    
    
    $("#resp_aprovacao").val(responsavel);


};

function maskInput() {

    //CEP
    var cep = $('#cep');
    cep.mask('00000-000', {reverse: true});

};

//DATA DE HOJE
function hoje(id) {

    // Obtém a data/hora atual
	var data = new Date();
	
    // Guarda cada pedaço em uma variável
    var dia = data.getDate();           // 1-31
    var mes = data.getMonth() +1;          // 0-11 (zero=janeiro)
    var ano4 = data.getFullYear();      // 4 dígitos
    
    // Formata a data e a hora (note o mês + 1)

    if (dia < 10) {
        dia = "0"+dia;
    }
    if (mes < 10) {
        mes = "0"+mes;
    }

    var str_data = dia+'/'+mes+'/'+ano4;

    $('#'+id).val(str_data);
    return str_data;

};

$(document).on('change', "#nomeFantasia",
    function descFormId() {
		
		var name = $('#nomeFantasia').val();
		var dataset = DatasetFactory.getDataset("processAttachment", null, null, null);
		var nRow = dataset.values.length;
	
		var nProcess = dataset.values[nRow-1]['processAttachmentPK.processInstanceId'];
	
		$('#descForm').val(nProcess+1+' - '+name);
		
    }
);
    