// Window para onload da página 

window.onload = function() {

    idSeq();
    revisaoDate();
    maskMoney();
    maskPercent();
    aprovacao();

    console.log("--------");
    console.log(getFormMode());
    console.log(getMobile());
    console.log(getWKNumState());
    console.log(getWKUser());
    console.log(getWKNumProces());
    console.log(getWKUserLocale());
    console.log(getWKCardId());
    console.log("--------");


};

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

};

function cadastroPS() {

    const produtosS = "Cadastro de Produtos e Serviços";
    const cadastroCard = document.getElementById("cadastroCard");

    cadastroCard.value = produtosS;

    $("#cadastro_tabs").removeClass("active");
    $("#cadastro_nav").removeClass("active");
    $("#produtos_servicos_tabs").addClass("active");
    $("#produtos_servicos_nav").addClass("active");

};

function cadastroO() {

    const orcamento = "Cadastro de Orçamento";
    const cadastroCard = document.getElementById("cadastroCard");

    cadastroCard.value = orcamento;

    $("#cadastro_tabs").removeClass("active");
    $("#cadastro_nav").removeClass("active");
    $("#orcamento_tabs").addClass("active");
    $("#orcamento_nav").addClass("active");

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
function idSeq() {

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

//Produtos e Serviços
var clickItem = 0;

function pushItem() {

    clickItem++;

    // -------------- Add Coluna ----------------------------------------------
    wdkAddChild('tb_subitem');

    // -------------- Add Estudo Automático -----------------------------------
    var estudo = $("#estudoPS").val();
    $("#tb_responsavel___" + clickItem).val(estudo);
    console.log(estudo);

     // -------------- Número de Linhas + Número do Subitem -------------------
    var rowCount = $('#tb_subitem tr').length;
    var n = rowCount - 2;
    $("#tb_n___" + clickItem).val(n)

    // --------------- Código do Documento ------------------------------------
    var cod_doc = $("#codP").val();
    $("#tb_doc___" + clickItem).val(cod_doc);

    // --------------- Evento de Excluir Linha --------------------------------
    $(".excluir").bind("click", Excluir);

}

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

    var inputOrcamento = document.getElementById("tOrcamento");
    var inputdesconto = document.getElementById("desconto");
    var inputorcamentoDesconto = document.getElementById("orcamentoDesconto");

    var maskOffOcamento = inputOrcamento.value;
    var maskOffdesconto = inputdesconto.value;

    var offmask1 = maskOffOcamento.replace(".","");
    var offmaskF1 = offmask1.replace(",",".");

    var offmask2 = maskOffdesconto.replace(".","");
    var offmaskF2 = offmask2.replace(",",".");

    var desconto = offmaskF2 / 100; 
    var totalDesconto = offmaskF1 - (offmaskF1 * desconto);
    var arredondamento = parseFloat(totalDesconto.toFixed(2));
    inputorcamentoDesconto.value = arredondamento + "";

    console.log(totalDesconto);
    console.log(arredondamento);
    console.log(arredondamento + "");


    maskMoney();
});

$("#tOrcamento").blur(function() {

    var inputOrcamento = document.getElementById("tOrcamento");
    var inputdesconto = document.getElementById("desconto");
    var inputorcamentoDesconto = document.getElementById("orcamentoDesconto");

    var maskOffOcamento = inputOrcamento.value;
    var maskOffdesconto = inputdesconto.value;

    var offmask1 = maskOffOcamento.replace(".","");
    var offmaskF1 = offmask1.replace(",",".");

    var offmask2 = maskOffdesconto.replace(".","");
    var offmaskF2 = offmask2.replace(",",".");

    var desconto = offmaskF2 / 100; 
    var totalDesconto = offmaskF1 - (offmaskF1 * desconto);
    var arredondamento = parseFloat(totalDesconto.toFixed(2));
    inputorcamentoDesconto.value = arredondamento + "";

    maskMoney();
});

//#endregion

// AUTO-CAMPO

//#region Focus

//Zoom C7_total

$("#estudo").focus(function() {
    
    //Busca Subitens
    pushSub_i();

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

    //Busca Subitens
    pushSub_i();

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

    //Busca Subitens
    pushSub_i();

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

    //Busca Subitens
    pushSub_i();

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

    //Busca Subitens
    pushSub_i();

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

    //Busca Subitens
    pushSub_i();

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

    //Busca Subitens
    pushSub_i();

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

    //Busca Subitens
    pushSub_i();

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

// Zoom codClientP

$("#client").focus(function() {

    //Condição de Busca
    var zoom = document.getElementById("codClientP");
    var zoomValue = zoom.value;

    //Filtro de Busca 
    var codConstraint = DatasetFactory.createConstraint("idCP", zoomValue, zoomValue, ConstraintType.SHOULD);
    var arrayConstraint = new Array(codConstraint);

    // Busca no Dataset + Condições de Filtro
    var array = DatasetFactory.getDataset("DSCadastroGeral", null, arrayConstraint, null);

    //Valores para integração ao campos
    var fantasia = array.values[0].companyName

    $("#client").val(fantasia);

});

//#endregion

//REVISÃO DE DOCUMENTO E DATA
var arrayRevisao = [];

function revisaoDate() {

    //Tratamento de data
    var data = new Date();
    
    var dia = data.getDate();     // 1-31
    var mes = data.getMonth();    // 0-11 (zero=janeiro)
    var ano = data.getFullYear(); // 4 dígitos

    var date_comp = (dia + "/" + (mes + 1) + "/" + ano);
    arrayRevisao.push(date_comp);

    //Registro das informações	
    var arrayLength = arrayRevisao.length;
	
	var date_cadastro = arrayRevisao[0];
    var revisao = arrayLength - 1;
    var dateRevisao = arrayRevisao[revisao]

    $("#dataCadastro").val(date_cadastro);
    $("#revisao").val(revisao);
    $("#dateRevisao").val(dateRevisao);

    console.log(date_cadastro);
    console.log(revisao);
    console.log(dateRevisao);


  
    

};

//MÁSCARAS

function maskMoney() {

    var tOrcamento = $("#tOrcamento");
    tOrcamento.mask('#.##0.00#.##0,00', {reverse: true});

    var rItem = $("#rItem");
    rItem.mask('#.##0.00#.##0,00', {reverse: true});

    var orcamentoDesconto = $("#orcamentoDesconto");
    orcamentoDesconto.mask('#.##0.00#.##0,00', {reverse: true});
};

function maskPercent() {

    var desconto = $("#desconto");
    desconto.mask('000,00', {reverse: true});

};

//Busca e inserção de Subitens
var times = 0;
var rowPrevious = 0;

function pushSub_i() {  

    //Condição de Busca
    var tb_name = "tb_subitem";
    var tbdoc = document.getElementById('c7_total').value;

    //Filtro de Busca 
    var tbConstraint = DatasetFactory.createConstraint("tablename", tb_name, tb_name, ConstraintType.MUST);
    var docConstraint = DatasetFactory.createConstraint("tb_doc", tbdoc, tbdoc, ConstraintType.MUST);
    var arrayConstraint = new Array(tbConstraint, docConstraint);

    // Busca no Dataset + Condições de Filtro
    var array = DatasetFactory.getDataset("DSCadastroGeral", null, arrayConstraint, null);

    var nRow = array.values.length;

    var rowCount = ($('#tb_sub_I tr').length) - 2;

    console.log(rowCount);

    if (tbdoc != "") {

        if (rowCount == 0) {


            for (var i = 0; i < nRow; i++) {

                eventFire(document.getElementById('add_sub'), 'click');

                var doc = array.values[i].tb_doc;
                var n = array.values[i].tb_n;
                var descricao = array.values[i].tb_descricao;
                var responsavel  = array.values[i].tb_responsavel;

                var rowInject = rowPrevious + (i + 1);

                $("#tb_doc_I___" + rowInject).val(doc);
                $("#tb_n_I___" + rowInject).val(n);
                $("#tb_descricao_I___" + rowInject).val(descricao);
                $("#tb_responsavel_I___" + rowInject).val(responsavel);

            }

            if (rowPrevious == 0) {
                rowPrevious = nRow;
            }
            else if (rowPrevious > 0) {
                rowPrevious = rowPrevious + nRow;
            }

            
        }
    }

    $(".excluir").bind("click", Excluir);
};

function eventFire(el, etype){
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
};

function push_sItens() {

    var table = $('#tb_sub_I td input');

    var n_input = table - 4;

    var rows = n_input / 4;

    for (var i = 0; i < rows; i++) {

        var state = (i / rows) * n_input;
        
        table[state].defaultValue;
        table[state + 1].defaultValue;
        table[state + 2].defaultValue;
        table[state + 3].defaultValue;

        push ("input1___" + i)
        push ("input2___" + i)
        push ("input3___" + i)
        push ("input4___" + i)

    }

    console.log(table);
    console.log(table.length);

};

//NAVEGAÇÃO PELO FLUXO
function aprovacao() {

    var nProcesso = getWKNumState();

    if (nProcesso == 14) {
        cadastroCP();

        //Todos os campos do formulário de cadastro de Cliente/Patrocinador apenas para vizualização.
        //#region 
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
        $('#nomeAdd2').prop('readonly', true);
        $('#departamentoAdd2').prop('readonly', true);
        $('#celularAdd2').prop('readonly', true);
        $('#telefoneAdd2').prop('readonly', true);
        $('#emailAdd2').prop('readonly', true);
        $('#nomeAdd3').prop('readonly', true);
        $('#departamentoAdd3').prop('readonly', true);
        $('#celularAdd3').prop('readonly', true);
        $('#telefoneAdd3').prop('readonly', true);
        $('#emailAdd3').prop('readonly', true);
        $('#ativo').prop('readonly', true);
        $('#indiceF').prop('readonly', true);
        $('#dataClient').prop('readonly', true);
        $('#exit_CP').prop('disabled', true);
        $('#add1').prop('disabled', true);
        $('#add2').prop('disabled', true);
        $('#add3').prop('disabled', true);
        //#endregion
   
        //Inoperando botões das tabelas
        var nButtonAdd1 = excluirAdd1.length;
        var nButtonAdd2 = excluirAdd2.length;
        var nButtonAdd3 = excluirAdd3.length;

        for (var i = 0; i < nButtonAdd1; i++) {
            excluirAdd1[i].disabled = true;
        }

        for (var ii = 0; ii < nButtonAdd2; ii++) {
            excluirAdd2[ii].disabled = true;
        }

        for (var iii = 0; iii < nButtonAdd3; iii++) {
            excluirAdd3[iii].disabled = true;
        }


    }

    if (nProcesso == 13) {
        cadastroPS();

        //Todos os campos do formulário de cadastro de Produtos e Serviços apenas para vizualização.
        //#region 
        $('#estudoPS').prop('readonly', true);
        $('#grupo_item').prop('readonly', true);
        $('#descricao').prop('readonly', true);
        $('#specificChar').prop('readonly', true);
        $('#descricaoEn').prop('readonly', true);
        $('#controlEstoq').attr("disabled", true);
        $('#pVenda').prop('readonly', true);
        $('#pCusto').prop('readonly', true);
        $('#fornecedores').prop('readonly', true);
        $('#metodologia').prop('readonly', true);
        $('#exit_PS').prop('disabled', true);
        $('#add_subitem').prop('disabled', true);
        //#endregion

        var nButton = excluirSubitem.length;
        var nRow = nButton - 1;

        for (var i = 0; i < nButton; i++) {

            excluirSubitem[i].disabled = true;

        }

        for (var n = 1; n <= nRow; n++) {

            $("#tb_descricao___" + n).prop('readonly', true);
            $("#tb_responsavel___" + n).prop('readonly', true);

        }


    }
    
    if (nProcesso == 34 || nProcesso == 23 || nProcesso == 15) {
        cadastroO();

        //Todos os campos do formulário de cadastro de Orçamento apenas para vizualização.
        //#region 
        $('#client').prop('readonly', true);
        $('#solicitante').prop('readonly', true);
        $('#estudo').prop('readonly', true);
        $('#descricaoItem').prop('readonly', true);
        $('#rItem').prop('readonly', true);
        $('#prazoExe').prop('readonly', true);
        $('#prazoER').prop('readonly', true);
        $('#tOrcamento').prop('readonly', true);
        $('#desconto').prop('readonly', true);
        $('#orcamentoDesconto').prop('readonly', true);
        $('#formPag').prop('readonly', true);
        $('#infoOrc').prop('readonly', true);
        $('#regMov').prop('readonly', true);
        $('#add').prop('disabled', true);
        $('#exit_O').prop('disabled', true);
        
        $("#zoom1").addClass("readonly-css");
        $("#zoom2").addClass("readonly-css");
        //#endregion

        var subButton = excluirSubitemO.length;
        var RowSub = subButton - 1;
        var nButton1 = excluirOrcamento.length; 
        var nButton2 = excluirDados.length;
        
        for (var s = 0; s < subButton; s++) {
            excluirSubitemO[s].disabled = true;
            
        }

        for (var r = 1; r <= RowSub; r++) {
            $("#tb_descricao_I___" + r ).prop('readonly', true);
            $("#tb_responsavel_I___" + r).prop('readonly', true);
            

        }

        for (var i = 0; i < nButton1; i++) {
            excluirOrcamento[i].disabled = true;
           
        }

        for (var n = 0; n < nButton2; n++) {
            excluirDados[n].disabled = true;
            
        }

    }

}
