// FOCAR ELEMENTO

function focusLocation() {

    window.location.hash = '#filter_project';

}

//NAVEGAÇÃO

//Navegção entre as abas de forma interativa

function selectFilter() {

    $("#filtro_projeto_tabs").removeClass("active");
    $("#filtro_projeto_nav").removeClass("active");

    $("#controle_estudo_tabs").addClass("active");
    $("#controle_estudo_nav").addClass("active");


};

function addMoviment() {

    $("#filtro_projeto_tabs").addClass("nav-close");
    $("#filtro_projeto_nav").addClass("nav-close");

    $("#controle_estudo_tabs").addClass("nav-close");
    $("#controle_estudo_nav").addClass("nav-close");
    
    $("#amostra_tabs").removeClass("nav-close");
    $("#amostra_nav").removeClass("nav-close");

    $("#controle_estudo_tabs").removeClass("active");
    $("#controle_estudo_nav").removeClass("active");

    $("#amostra_tabs").addClass("active");
    $("#amostra_nav").addClass("active");
};

function voltarAmostra() {

    $("#controle_estudo_tabs").removeClass("nav-close");
    $("#controle_estudo_nav").removeClass("nav-close");

    $("#filtro_projeto_tabs").removeClass("nav-close");
    $("#filtro_projeto_nav").removeClass("nav-close");

    $("#amostra_tabs").removeClass("active");
    $("#amostra_nav").removeClass("active");

    $("#amostra_tabs").addClass("nav-close");
    $("#amostra_nav").addClass("nav-close");

    $("#controle_estudo_tabs").addClass("active");
    $("#controle_estudo_nav").addClass("active");

};

function voltarControle() {

    $("#controle_estudo_tabs").removeClass("active");
    $("#controle_estudo_nav").removeClass("active"); 

    $("#filtro_projeto_tabs").addClass("active");
    $("#filtro_projeto_nav").addClass("active");

};

//HISTÓRICO AMOSTRA

function historico_amostra() {


    $("#continuar").removeClass("nav-close");

    
    var array = [];

    var rowCount = $('#tb_hist_amostra tr').length;
    var n_acao = rowCount - 1;
    var acao = $("#solicitacao").val();
    var responsavel = $("#solicitante").val();

    var hj = new Date();

    var dia = hj.getDate();
    var mes = hj.getMonth() + 1;
    var ano = hj.getFullYear();

    var hoje = (dia + '/'+ mes+ '/'+ ano);

    array.push(n_acao);
    array.push(acao);
    array.push(hoje);
    array.push(responsavel);

    var table = document.getElementById("tb_hist_amostra");
	
	var numOfRows = n_acao;
	
	var numOfCols = 4;
	
	var newRow = table.insertRow(numOfRows);
	
	for (var i = 0; i < numOfCols; i++) {
	
		newCell = newRow.insertCell(i);
		
		newCell.innerHTML = array[i];
	
	}
    



};

function continue_amostra() {

    historico_amostra();
    voltarAmostra();

}