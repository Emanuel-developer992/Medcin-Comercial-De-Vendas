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

//#region Function

function cadastroCP() {

    const clienteP = "Cadastro de Cliente/Patrocinador";
    const cadastroCard = document.getElementById("cadastroCard");

    cadastroCard.value = clienteP;


}
function cadastroPS() {

    const produtosS = "Cadastro de Produtos e Serviços";
    const cadastroCard = document.getElementById("cadastroCard");

    cadastroCard.value = produtosS;


}
function cadastroO() {

    const orcamento = "Cadastro de Orçamento";
    const cadastroCard = document.getElementById("cadastroCard");

    cadastroCard.value = orcamento;


}

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
    
    
}

//#endregion

// TABELAS

//#region Funtion

var idAll;
var apAll

function pushTable() {

    var dados = [];
    var inputId = $("#c7_total").val();
    var inputAplicacao = $("#estudo").val();
    var inputDescricao = $("#descricaoItem").val();
    var inputValorTab = $("#rItem").val();
    var inputPrazoEx = $("#prazoExe").val();
    var inputPrazoEn = $("#prazoER").val();

    idAll = inputId;
    apAll = inputAplicacao

    var element = document.getElementById('excluir');
    
   
    dados.push("");
    dados.push(inputId);
    dados.push(inputAplicacao);
    dados.push(inputDescricao);
	dados.push(inputValorTab);
    dados.push(inputPrazoEx);
	dados.push(inputPrazoEn);
    dados.push(element.innerHTML = '<button type="button" class="btn btn-danger excluir">Excluir</button>');  
    
    var table = document.getElementById("tabelaOrcamento");
    
    var numOfRows = table.rows.length;

    var numOfCols = table.rows[numOfRows-1].cells.length;

    var newRow = table.insertRow(numOfRows);

    for (var i = 0; i < numOfCols; i++) {

        newCell = newRow.insertCell(i);

        newCell.innerHTML = dados[i];

        
    }

    $("#c7_total").val("");
    $("#descricaoItem").val("");
	$("#rItem").val("");
    $("#prazoExe").val("");
	$("#prazoER").val("");
	$("#estudo").val("");

    $(".excluir").bind("click", Excluir);

}

function pushTable2() {

    var dados = [];
    var inputTO = $("#tOrcamento").val();
    var inputDesconto = $("#desconto").val();
    var inputOD = $("#orcamentoDesconto").val();

    console.log(idAll);

    var element = document.getElementById('excluir');
    
   
    dados.push("");
    dados.push(idAll);
    dados.push(apAll);
    dados.push(inputTO);
    dados.push(inputDesconto);
	dados.push(inputOD);
    
    dados.push(element.innerHTML = '<button type="button" class="btn btn-danger excluir">Excluir</button>');  
    
    var table = document.getElementById("tabelaOrcamento2");
    
    var numOfRows = table.rows.length;

    var numOfCols = table.rows[numOfRows-1].cells.length;

    var newRow = table.insertRow(numOfRows);

    for (var i = 0; i < numOfCols; i++) {

        newCell = newRow.insertCell(i);

        newCell.innerHTML = dados[i];

        
    }

    $("#tOrcamento").val("");
    $("#desconto").val("");
	$("#orcamentoDesconto").val("");

    $(".excluir").bind("click", Excluir);

}

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