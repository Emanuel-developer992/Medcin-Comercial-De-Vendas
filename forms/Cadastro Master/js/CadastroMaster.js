// API - CEP AUTOMÁTICO

//#region API

$("#cep").blur(function(blur) {
    
    const paisAuto = "Brasil";
    const cadastroCEP = document.getElementById("pais");

    cadastroCEP.value = paisAuto;

    $.getJSON("//viacep.com.br/ws/"+ $("#cep").val() +"/json/", function(dados){ 
        
        $("#endereco").val(dados.logradouro);
        $("#bairro").val(dados.bairro);
        $("#estado").val(dados.localidade);
        
        
        
    })
});

//#endregion

// AUTOMAÇÃO CARDS DE CADASTRO

//#region Função de Navegação entre as opções existentes

function cadastroCP() {

    const clienteP = "Cadastro de Cliente/Patrocinador";
    const cadastroCard = document.getElementById("cadastroCard");

    cadastroCard.value = clienteP;

    $("#cadastro_tabs").removeClass("active");
    $("#cadastro_nav").removeClass("active");
    $("#cliente_patrocinador_tabs").addClass("active");
    $("#cliente_patrocinador_nav").addClass("active");
    $("#cliente_patrocinador_tabs").removeClass("nav-close");
    $("#cadastro_tabs").addClass("nav-close");
   
       

};
function cadastroPS() {

    const produtosS = "Cadastro de Produtos e Serviços";
    const cadastroCard = document.getElementById("cadastroCard");

    cadastroCard.value = produtosS;

    $("#cadastro_tabs").removeClass("active");
    $("#cadastro_nav").removeClass("active");
    $("#produtos_servicos_tabs").addClass("active");
    $("#produtos_servicos_nav").addClass("active");
    $("#produtos_servicos_tabs").removeClass("nav-close");
    $("#cadastro_tabs").addClass("nav-close");


};
function cadastroO() {

    const orcamento = "Cadastro de Orçamento";
    const cadastroCard = document.getElementById("cadastroCard");

    cadastroCard.value = orcamento;

    $("#cadastro_tabs").removeClass("active");
    $("#cadastro_nav").removeClass("active");
    $("#orcamento_tabs").addClass("active");
    $("#orcamento_nav").addClass("active");
    $("#orcamento_tabs").removeClass("nav-close");
    $("#cadastro_tabs").addClass("nav-close");

};

//#endregion

//#region Função de Retornar a navegação para as opções

function backCP() {
    
    $("#cliente_patrocinador_nav").removeClass("active");
    $("#cliente_patrocinador_tabs").removeClass("active");
    $("#cadastro_nav").addClass("active");
    $("#cadastro_tabs").addClass("active");
    $("#cadastro_tabs").removeClass("nav-close");
    $("#cliente_patrocinador_tabs").addClass("nav-close");

};

function backPS() {

    $("#produtos_servicos_nav").removeClass("active");
    $("#produtos_servicos_tabs").removeClass("active");
    $("#cadastro_nav").addClass("active");
    $("#cadastro_tabs").addClass("active");
    $("#cadastro_tabs").removeClass("nav-close");
    $("#produtos_servicos_tabs").addClass("nav-close");

};

function backO() {

    $("#orcamento_nav").removeClass("active");
    $("#orcamento_tabs").removeClass("active");
    $("#cadastro_nav").addClass("active");
    $("#cadastro_tabs").addClass("active");
    $("#cadastro_tabs").removeClass("nav-close");
    $("#orcamento_tabs").addClass("nav-close");

};

//#endregion

// GERADOR DE ID

//#region onload

window.onload = function() {

    var dsCadastro = DatasetFactory.getDataset("DSCadastroGeral", null, null, null);

    var linha = dsCadastro.values.length;

    var inputCP = document.getElementById("idCP");
    var inputPS = document.getElementById("codP");
    var inputO = document.getElementById("idO");

    inputCP.value = "CP-" + (linha + 1);
    
    inputPS.value = "PS-" + (linha + 1);
    
    inputO.value = "O-" + (linha + 1);
    
    
};

//#endregion

// TABELAS

//#region Funtion

var idClick = 0;
var ClickAdd1 = 0;
var ClickAdd2 = 0;
var ClickAdd3 = 0;
var idAll;

//#region Orçamento

function pushTable() {

    idClick++;

    wdkAddChild('tabelaOrcamento');

    var inputId = $("#c7_total").val();
    var inputAplicacao = $("#estudo").val();
    var inputValorTab = $("#rItem").val();
    var inputdesconto = $("#desconto").val();
    var inputorcamentoDesconto = $("#orcamentoDesconto").val();

    idAll = inputId;
    console.log(idClick);

    $("#tb1_c7_total___"+idClick).val(inputId);
    $("#tb_estudo___"+idClick).val(inputAplicacao);
    $("#tb_rItem___"+idClick).val(inputValorTab);
    $("#tb_desconto___"+idClick).val(inputdesconto);
    $("#tb_orcamentoDesconto___"+idClick).val(inputorcamentoDesconto);
    
    $("#c7_total").val("");
    $("#estudo").val("");
	$("#rItem").val("");
    $("#desconto").val("");
	$("#orcamentoDesconto").val("");

    setTimeout(function(){$("#descricaoItem").val("")}, 120);
   
	
    $(".excluir").bind("click", Excluir);

};

function pushTable2() {

    wdkAddChild('tabelaOrcamento2');

    var inputdescricao = $("#descricaoItem").val();
    var inputExe = $("#prazoExe").val();
    var inputER = $("#prazoER").val();
    var inputorcamento = $("#tOrcamento").val();    
   
    $("#tb2_c7_total___"+idClick).val(idAll);
    $("#tb_descricaoItem___"+idClick).val(inputdescricao);
    $("#tb_prazoExe___"+idClick).val(inputExe);
    $("#tb_prazoER___"+idClick).val(inputER);
    $("#tb_tOrcamento___"+idClick).val(inputorcamento);
    

    $("#descricao").val("");
    $("#prazoExe").val("");
    $("#prazoER").val("");
    $("#tOrcamento").val("");

    $(".excluir").bind("click", Excluir);

};

//#endregion

//#region Cliente/Patrocinador

function pushAdd1() {

    wdkAddChild('tabelaAddComercial');

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

    wdkAddChild('tabelaAddFinanceiro');

    ClickAdd2++; 

    var inputnomeAdd2 = $("#nomeAdd2").val();
    var inputdepartamentoAdd2 = $("#departamentoAdd2").val();
    var inputcelularAdd2 = $("#celularAdd2").val();
    var inputtelefoneAdd2 = $("#telefoneAdd2").val();
    var inputemailAdd2 = $("#emailAdd2").val();

    $("#tb_nomeAdd2___"+ClickAdd2).val(inputnomeAdd2);
    $("#tb_departamentoAdd2___"+ClickAdd2).val(inputdepartamentoAdd2);
    $("#tb_celularAdd2___"+ClickAdd2).val(inputcelularAdd2);
    $("#tb_telefoneAdd2___"+ClickAdd2).val(inputtelefoneAdd2);
    $("#tb_emailAdd2___"+ClickAdd2).val(inputemailAdd2);

    $("#nomeAdd2").val("");
    $("#departamentoAdd2").val("");
	$("#celularAdd2").val("");
	$("#telefoneAdd2").val("");
	$("#emailAdd2").val("");

    $(".excluir").bind("click", Excluir);

};

function pushAdd3() {

    wdkAddChild('tabelaAddAdicional');

    ClickAdd3++; 
   
    var inputnomeAdd3 = $("#nomeAdd3").val();
    var inputdepartamentoAdd3 = $("#departamentoAdd3").val();
    var inputcelularAdd3 = $("#celularAdd3").val();
    var inputtelefoneAdd3= $("#telefoneAdd3").val();
    var inputemailAdd3 = $("#emailAdd3").val();

        
    $("#tb_nomeAdd3___"+ClickAdd3).val(inputnomeAdd3);
    $("#tb_departamentoAdd3___"+ClickAdd3).val(inputdepartamentoAdd3);
    $("#tb_celularAdd3___"+ClickAdd3).val(inputcelularAdd3);
    $("#tb_telefoneAdd3___"+ClickAdd3).val(inputtelefoneAdd3);
    $("#tb_emailAdd3___"+ClickAdd3).val(inputemailAdd3);
    

    $("#nomeAdd3").val("");
    $("#departamentoAdd3").val("");
	$("#celularAdd3").val("");
	$("#telefoneAdd3").val("");
	$("#emailAdd3").val("");

    $(".excluir").bind("click", Excluir);

};

//#endregion

function Excluir(){

    var par = $(this).parent().parent(); //tr

    par.remove();
};

//#endregion

// AUTOMAÇÃO DE DESCONTO

//#region Blurs

$("#desconto").blur(function() {

    var inputtOcamento = document.getElementById("tOrcamento");
    var inputdesconto = document.getElementById("desconto");
    var inputorcamentoDesconto = document.getElementById("orcamentoDesconto");

    var desconto = inputdesconto.value / 100; 
    var totalDesconto = inputtOcamento.value - (inputtOcamento.value * desconto);
    var arredondamento = parseFloat(totalDesconto.toFixed(2));
    inputorcamentoDesconto.value = arredondamento;
});

$("#tOrcamento").blur(function() {

    var inputtOcamento = document.getElementById("tOrcamento");
    var inputdesconto = document.getElementById("desconto");
    var inputorcamentoDesconto = document.getElementById("orcamentoDesconto");

    var desconto = inputdesconto.value / 100; 
    var totalDesconto = inputtOcamento.value - (inputtOcamento.value * desconto);
    var arredondamento = parseFloat(totalDesconto.toFixed(2));
    inputorcamentoDesconto.value = arredondamento;
});

//#endregion

// AUTO-CAMPO

//#region Focus

$("#estudo").focus(function() {  

    //Condição de Busca
    var Zoom = document.getElementById("c7_total");
    var inputZoom = Zoom.value;

    //Filtro de Busca 
    var codConstraint = DatasetFactory.createConstraint("codP", inputZoom, inputZoom, ConstraintType.SHOULD);
    var arrayConstraint = new Array(codConstraint);

    // Busca no Dataset + Condições de Filtro
    var array = DatasetFactory.getDataset("DSCadastroGeral", null, arrayConstraint, null);

    //Valores para integração ao campos
    var descricaoArray = array.values[0].descricao;
    var estudoArray = array.values[0].estudoPS;
    var rItemArray = array.values[0].pVenda;

    //Integração aos campos
    $("#descricaoItem").val(descricaoArray);
    $("#estudo").val(estudoArray);
    $("#rItem").val(rItemArray);
    
    
    
});

$("#descricaoItem").focus(function() {  

    //Condição de Busca
    var Zoom = document.getElementById("c7_total");
    var inputZoom = Zoom.value     
    //Filtro de Busca 
    var codConstraint = DatasetFactory.createConstraint("codP", inputZoom, inputZoom, ConstraintType.SHOULD);
    var arrayConstraint = new Array(codConstraint)     
    // Busca no Dataset + Condições de Filtro
    var array = DatasetFactory.getDataset("DSCadastroGeral", null, arrayConstraint, null)      
    //Valores para integração ao campos
    var descricaoArray = array.values[0].descricao;
    var estudoArray = array.values[0].estudoPS;
    var rItemArray = array.values[0].pVenda    
    //Integração aos campos
    $("#descricaoItem").val(descricaoArray);
    $("#estudo").val(estudoArray);
    $("#rItem").val(rItemArray);
    
});

$("#rItem").focus(function() {  

    //Condição de Busca
    var Zoom = document.getElementById("c7_total");
    var inputZoom = Zoom.value;

    //Filtro de Busca 
    var codConstraint = DatasetFactory.createConstraint("codP", inputZoom, inputZoom, ConstraintType.SHOULD);
    var arrayConstraint = new Array(codConstraint);

    // Busca no Dataset + Condições de Filtro
    var array = DatasetFactory.getDataset("DSCadastroGeral", null, arrayConstraint, null);

    //Valores para integração ao campos
    var descricaoArray = array.values[0].descricao;
    var estudoArray = array.values[0].estudoPS;
    var rItemArray = array.values[0].pVenda;

    //Integração aos campos
    $("#descricaoItem").val(descricaoArray);
    $("#estudo").val(estudoArray);
    $("#rItem").val(rItemArray);
    
    
    
});

$("#prazoExe").focus(function() {  

    //Condição de Busca
    var Zoom = document.getElementById("c7_total");
    var inputZoom = Zoom.value;

    //Filtro de Busca 
    var codConstraint = DatasetFactory.createConstraint("codP", inputZoom, inputZoom, ConstraintType.SHOULD);
    var arrayConstraint = new Array(codConstraint);

    // Busca no Dataset + Condições de Filtro
    var array = DatasetFactory.getDataset("DSCadastroGeral", null, arrayConstraint, null);

    //Valores para integração ao campos
    var descricaoArray = array.values[0].descricao;
    var estudoArray = array.values[0].estudoPS;
    var rItemArray = array.values[0].pVenda;

    //Integração aos campos
    $("#descricaoItem").val(descricaoArray);
    $("#estudo").val(estudoArray);
    $("#rItem").val(rItemArray);
    
    
    
});

$("#prazoER").focus(function() {  

    //Condição de Busca
    var Zoom = document.getElementById("c7_total");
    var inputZoom = Zoom.value;

    //Filtro de Busca 
    var codConstraint = DatasetFactory.createConstraint("codP", inputZoom, inputZoom, ConstraintType.SHOULD);
    var arrayConstraint = new Array(codConstraint);

    // Busca no Dataset + Condições de Filtro
    var array = DatasetFactory.getDataset("DSCadastroGeral", null, arrayConstraint, null);

    //Valores para integração ao campos
    var descricaoArray = array.values[0].descricao;
    var estudoArray = array.values[0].estudoPS;
    var rItemArray = array.values[0].pVenda;

    //Integração aos campos
    $("#descricaoItem").val(descricaoArray);
    $("#estudo").val(estudoArray);
    $("#rItem").val(rItemArray);
    
    
    
});

$("#tOrcamento").focus(function() {  

    //Condição de Busca
    var Zoom = document.getElementById("c7_total");
    var inputZoom = Zoom.value;

    //Filtro de Busca 
    var codConstraint = DatasetFactory.createConstraint("codP", inputZoom, inputZoom, ConstraintType.SHOULD);
    var arrayConstraint = new Array(codConstraint);

    // Busca no Dataset + Condições de Filtro
    var array = DatasetFactory.getDataset("DSCadastroGeral", null, arrayConstraint, null);

    //Valores para integração ao campos
    var descricaoArray = array.values[0].descricao;
    var estudoArray = array.values[0].estudoPS;
    var rItemArray = array.values[0].pVenda;

    //Integração aos campos
    $("#descricaoItem").val(descricaoArray);
    $("#estudo").val(estudoArray);
    $("#rItem").val(rItemArray);
    
    
    
});

$("#desconto").focus(function() {  

    //Condição de Busca
    var Zoom = document.getElementById("c7_total");
    var inputZoom = Zoom.value;

    //Filtro de Busca 
    var codConstraint = DatasetFactory.createConstraint("codP", inputZoom, inputZoom, ConstraintType.SHOULD);
    var arrayConstraint = new Array(codConstraint);

    // Busca no Dataset + Condições de Filtro
    var array = DatasetFactory.getDataset("DSCadastroGeral", null, arrayConstraint, null);

    //Valores para integração ao campos
    var descricaoArray = array.values[0].descricao;
    var estudoArray = array.values[0].estudoPS;
    var rItemArray = array.values[0].pVenda;

    //Integração aos campos
    $("#descricaoItem").val(descricaoArray);
    $("#estudo").val(estudoArray);
    $("#rItem").val(rItemArray);
    
    
    
});

$("#orcamentoDesconto").focus(function() {  

    //Condição de Busca
    var Zoom = document.getElementById("c7_total");
    var inputZoom = Zoom.value;

    //Filtro de Busca 
    var codConstraint = DatasetFactory.createConstraint("codP", inputZoom, inputZoom, ConstraintType.SHOULD);
    var arrayConstraint = new Array(codConstraint);

    // Busca no Dataset + Condições de Filtro
    var array = DatasetFactory.getDataset("DSCadastroGeral", null, arrayConstraint, null);

    //Valores para integração ao campos
    var descricaoArray = array.values[0].descricao;
    var estudoArray = array.values[0].estudoPS;
    var rItemArray = array.values[0].pVenda;

    //Integração aos campos
    $("#descricaoItem").val(descricaoArray);
    $("#estudo").val(estudoArray);
    $("#rItem").val(rItemArray);
    
    
    
});



//#endregion