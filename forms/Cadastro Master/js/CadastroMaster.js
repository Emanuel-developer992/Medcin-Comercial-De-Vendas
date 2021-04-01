// API - CEP AUTOMÁTICO

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

// AUTOMAÇÃO CARDS DE CADASTRO

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

// GERADOR DE ID

window.onload = function() {

    var dsCadastro = DatasetFactory.getDataset("DSCadastroGeral", null, null, null);

    var linha = dsCadastro.values.length;

    var inputCP = document.getElementById("idCP");
    var inputPS = document.getElementById("idPS");
    var inputO = document.getElementById("idO");

    inputCP.value = "CP-" + (linha + 1);
    
    inputPS.value = "PS-" + (linha + 1);
    
    inputO.value = "O-" + (linha + 1);
    
    
}


// Tabela 

function pushTable() {

    var dados = [];
    var inputId = $("#c7_total").val();
    var inputDescricao = $("#descricaoItem").val();
    var inputValorTab = $("#rItem").val();
    var inputPrazoEx = $("#prazoExe").val();
    var inputPrazoEn = $("#prazoER").val();

    var element = document.getElementById('excluir');
    
   
    dados.push("");
    dados.push(inputId);
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

    $(".excluir").bind("click", Excluir);

}

function Excluir(){

    var par = $(this).parent().parent(); //tr

    par.remove();
};



// AUTOMAÇÃO DE DESCONTO



