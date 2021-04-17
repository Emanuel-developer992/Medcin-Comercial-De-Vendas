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
var idAll;

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

function pushKP() {

    var dados = [];
    var inputcodKP = $("#codKP").val();
    var inputintensP = $("#itensP").val();
    var inputdesKP = $("#descricaoKP").val();

    var element = document.getElementById('excluir');
   
    dados.push("");
    dados.push(inputcodKP);
    dados.push(inputintensP);
    dados.push(inputdesKP);
    dados.push(element.innerHTML = '<button type="button" class="btn btn-danger excluir">Excluir</button>');  
    
    var table = document.getElementById("tabelaCadastroPS");
    
    var numOfRows = table.rows.length;

    var numOfCols = table.rows[numOfRows-1].cells.length;

    var newRow = table.insertRow(numOfRows);

    for (var i = 0; i < numOfCols; i++) {

        newCell = newRow.insertCell(i);

        newCell.innerHTML = dados[i];

        
    }

    $("#codKP").val("");
    $("#itensP").val("");
	$("#descricaoKP").val("");

    $(".excluir").bind("click", Excluir);

};

function pushKP2() {

    var dados = [];
    var inputquantKP = $("#quantKP").val();
    var inputtvalorKP = $("#tvalorKP").val();
    var inputpVendaKP = $("#pVendaKP").val();
    var inputpCustoKP = $("#pCustoKP").val();

    var element = document.getElementById('excluir');
    
   
    dados.push("");
    dados.push(inputquantKP);
    dados.push(inputtvalorKP);
    dados.push(inputpVendaKP);
    dados.push(inputpCustoKP);    
    dados.push(element.innerHTML = '<button type="button" class="btn btn-danger excluir">Excluir</button>');  
    
    var table = document.getElementById("tabelaCadastroPS2");
    
    var numOfRows = table.rows.length;

    var numOfCols = table.rows[numOfRows-1].cells.length;

    var newRow = table.insertRow(numOfRows);

    for (var i = 0; i < numOfCols; i++) {

        newCell = newRow.insertCell(i);

        newCell.innerHTML = dados[i];

        
    }

    $("#quantKP").val("");
    $("#tvalorKP").val("");
	$("#pVendaKP").val("");
	$("#pCustoKP").val("");

    $(".excluir").bind("click", Excluir);

};

function pushAdd1() {

    var dados = [];
    var inputnomeAdd1 = $("#nomeAdd1").val();
    var inputdepartamentoAdd1 = $("#departamentoAdd1").val();
    var inputcelularAdd1 = $("#celularAdd1").val();
    var inputtelefoneAdd1 = $("#telefoneAdd1").val();
    var inputemailAdd1 = $("#emailAdd1").val();

    var element = document.getElementById('excluir');
    
   
    dados.push("");
    dados.push(inputnomeAdd1);
    dados.push(inputdepartamentoAdd1);
    dados.push(inputcelularAdd1);
    dados.push(inputtelefoneAdd1);    
    dados.push(inputemailAdd1);    
    dados.push(element.innerHTML = '<button type="button" class="btn btn-danger excluir">Excluir</button>');  
    
    var table = document.getElementById("tabelaAddComercial");
    
    var numOfRows = table.rows.length;

    var numOfCols = table.rows[numOfRows-1].cells.length;

    var newRow = table.insertRow(numOfRows);

    for (var i = 0; i < numOfCols; i++) {

        newCell = newRow.insertCell(i);

        newCell.innerHTML = dados[i];

        
    }

    $("#nomeAdd1").val("");
    $("#departamentoAdd1").val("");
	$("#celularAdd1").val("");
	$("#telefoneAdd1").val("");
	$("#emailAdd1").val("");

    $(".excluir").bind("click", Excluir);

};

function pushAdd2() {

    var dados = [];
    var inputnomeAdd1 = $("#nomeAdd2").val();
    var inputdepartamentoAdd1 = $("#departamentoAdd2").val();
    var inputcelularAdd1 = $("#celularAdd2").val();
    var inputtelefoneAdd1 = $("#telefoneAdd2").val();
    var inputemailAdd1 = $("#emailAdd2").val();

    var element = document.getElementById('excluir');
    
   
    dados.push("");
    dados.push(inputnomeAdd1);
    dados.push(inputdepartamentoAdd1);
    dados.push(inputcelularAdd1);
    dados.push(inputtelefoneAdd1);    
    dados.push(inputemailAdd1);    
    dados.push(element.innerHTML = '<button type="button" class="btn btn-danger excluir">Excluir</button>');  
    
    var table = document.getElementById("tabelaAddFinanceiro");
    
    var numOfRows = table.rows.length;

    var numOfCols = table.rows[numOfRows-1].cells.length;

    var newRow = table.insertRow(numOfRows);

    for (var i = 0; i < numOfCols; i++) {

        newCell = newRow.insertCell(i);

        newCell.innerHTML = dados[i];

        
    }

    $("#nomeAdd2").val("");
    $("#departamentoAdd2").val("");
	$("#celularAdd2").val("");
	$("#telefoneAdd2").val("");
	$("#emailAdd2").val("");

    $(".excluir").bind("click", Excluir);

};

function pushAdd3() {

    var dados = [];
    var inputnomeAdd1 = $("#nomeAdd3").val();
    var inputdepartamentoAdd1 = $("#departamentoAdd3").val();
    var inputcelularAdd1 = $("#celularAdd3").val();
    var inputtelefoneAdd1 = $("#telefoneAdd3").val();
    var inputemailAdd1 = $("#emailAdd3").val();

    var element = document.getElementById('excluir');
    
   
    dados.push("");
    dados.push(inputnomeAdd1);
    dados.push(inputdepartamentoAdd1);
    dados.push(inputcelularAdd1);
    dados.push(inputtelefoneAdd1);    
    dados.push(inputemailAdd1);    
    dados.push(element.innerHTML = '<button type="button" class="btn btn-danger excluir">Excluir</button>');  
    
    var table = document.getElementById("tabelaAddAdicional");
    
    var numOfRows = table.rows.length;

    var numOfCols = table.rows[numOfRows-1].cells.length;

    var newRow = table.insertRow(numOfRows);

    for (var i = 0; i < numOfCols; i++) {

        newCell = newRow.insertCell(i);

        newCell.innerHTML = dados[i];

        
    }

    $("#nomeAdd3").val("");
    $("#departamentoAdd3").val("");
	$("#celularAdd3").val("");
	$("#telefoneAdd3").val("");
	$("#emailAdd3").val("");

    $(".excluir").bind("click", Excluir);

};

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