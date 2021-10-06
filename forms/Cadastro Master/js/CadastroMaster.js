// Window para onload da página 

window.onload = function() {

    revisaoDate();
    maskMoney();
    maskPercent();
    aprovacao();
    descontoAuto()

    usuario('solicitante');

    validarDoc();
    motherSon();
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
        $("#estado").val(dados.localidade);2
        
        
        
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
    
    inputO.value = "ORC-" + (linha + 1);
    
    
};

//#endregion

// TABELAS
//#region Funtion

var idClick = 0;
var ClickAdd1 = 0;
var ClickAdd2 = 0;
var ClickAdd3 = 0;
var idAll;
var idOAll;

//#region Orçamento

function pushTable() {

    idClick++;

    wdkAddChild('tabelaOrcamento');

    var inputId = $("#c7_total").val();
    var inputIdO = $("#idO").val();
    var inputAplicacao = $("#estudo").val();
    var inputValorTab = $("#rItem").val();
    var inputdesconto = $("#desconto").val();
    var inputorcamentoDesconto = $("#orcamentoDesconto").val();

    idAll = inputId;
    idOAll = inputIdO;

    $("#tb1_c7_total___"+idClick).val(inputId);
    $("#tb1_orc___"+idClick).val(inputIdO);
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
    
    //PrazoExe
    var dia_closure = inputExe.substring(8, 12);
    var mes_closure = inputExe.substring(5, 7);
    var ano_closure = inputExe.substring(0, 4);

    var date_closure = dia_closure + "/" + mes_closure + "/" + ano_closure;

    //PrazoER
    var dia_closure2 = inputER.substring(8, 12);
    var mes_closure2 = inputER.substring(5, 7);
    var ano_closure2 = inputER.substring(0, 4);

    var date_closure2 = dia_closure2 + "/" + mes_closure2 + "/" + ano_closure2;

    $("#tb2_c7_total___"+idClick).val(idAll);
    $("#tb3_orc___"+idClick).val(idOAll);
    $("#tb_descricaoItem___"+idClick).val(inputdescricao);
    $("#tb_prazoExe___"+idClick).val(date_closure);
    $("#tb_prazoER___"+idClick).val(date_closure2);
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

function descontoAuto() {

    document.getElementById("tOrcamento").onchange = function() {
        
        var orcamento = $('#tOrcamento').val();
        
        var orcamentoT1 = orcamento.replace(".", "");
        var orcamentoT2 = orcamentoT1.replace(",", ".");

        var desconto = $('#desconto').val();
        
        if (desconto != "") {

            var descontoT1 = desconto.replace(".", "");
            var descontoT2 = descontoT1.replace(",", ".");

            $('#orcamentoDesconto').val(((orcamentoT2 - (orcamentoT2 * (descontoT2/100))).toFixed(2)).replace(".", ","));
        
        }
        else {
    
            $('#orcamentoDesconto').val(orcamentoT2.replace(".", ","));
        }  
    }

    document.getElementById("desconto").onchange = function() {

        var orcamento = $('#tOrcamento').val();
        
        var orcamentoT1 = orcamento.replace(".", "");
        var orcamentoT2 = orcamentoT1.replace(",", ".");

        var desconto = $('#desconto').val();
        
        if (desconto != "") {

            var descontoT1 = desconto.replace(".", "");
            var descontoT2 = descontoT1.replace(",", ".");

            $('#orcamentoDesconto').val(((orcamentoT2 - (orcamentoT2 * (descontoT2/100))).toFixed(2)).replace(".", ","));
        
        }
        else {
    
            $('#orcamentoDesconto').val(orcamentoT2.replace(".", ","));
        }  
    }

};

//#endregion

// AUTO-CAMPO

//#region Focus

//Zoom C7_total
 
$(document).on('change', "#c7_total",
    function zoomProdutoServico() {

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

        console.log('>>>>');
        console.log(descricaoArray);
        console.log(estudoArray);
        console.log(rItemArray);
        console.log(array);
        console.log('<<<<');

        

    });

// Zoom codClientP

$(document).on('change', "#codClientP",
    function inputValueIsNull() {

       //Condição de Busca
        var zoom = document.getElementById("codClientP");
        var zoomValue = zoom.value;

        //Filtro de Busca 
        var codConstraint = DatasetFactory.createConstraint("idCP", zoomValue, zoomValue, ConstraintType.SHOULD);
        var arrayConstraint = new Array(codConstraint);

        // Busca no Dataset + Condições de Filtro
        var array = DatasetFactory.getDataset("DSCadastroGeral", null, arrayConstraint, null);

        //Valores para integração ao campos
        var fantasia = array.values[0].nomeFantasia

        $("#client").val(fantasia);

    });

//#endregion

//REVISÃO DE DOCUMENTO E DATA
function revisaoDate() {

    //Tratamento de data
    var data = new Date();

    var nProcesso = getWKNumState();
    
    var dia = data.getDate();     // 1-31
    var mes = data.getMonth();    // 0-11 (zero=janeiro)
    var ano = data.getFullYear(); // 4 dígitos

    if ((mes + 1) <= 9) {

        if (dia <= 9) {
            var date_comp = ('0' + dia + "/" + '0' + (mes + 1) + "/" + ano);
        }

        else {
            var date_comp = (dia + "/" + '0' + (mes + 1) + "/" + ano);
        }
    }

    else if (dia <= 9) {
        var date_comp = ('0' + dia + "/" + (mes + 1) + "/" + ano);
    }

    else {
        var date_comp = (dia + "/" + (mes + 1) + "/" + ano);
    }

    //Registro das informações	

    var revAnterior =  parseInt($("#dateRevisao").val());

    if (nProcesso == 0) {

        $("#dataCadastro").val(date_comp);

    }

    $("#revisao").val(revAnterior + 1);
    $("#dateRevisao").val(date_comp); 

};

//MÁSCARAS

function maskMoney() {

    //Dinheiro
    var tOrcamento = $("#tOrcamento");
    tOrcamento.mask('#.##0.00#.##0,00', {reverse: true});

    var rItem = $("#rItem");
    rItem.mask('#.##0.00#.##0,00', {reverse: true});

    var orcamentoDesconto = $("#orcamentoDesconto");
    orcamentoDesconto.mask('#.##0.00#.##0,00', {reverse: true});

    var pVenda = $('#pVenda');
    pVenda.mask('#.##0.00#.##0,00', {reverse: true});

    var pCusto = $('#pCusto');
    pCusto.mask('#.##0.00#.##0,00', {reverse: true});

    //CEP
    var cep = $('#cep');
    cep.mask('00000-000', {reverse: true});

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

var cliqueValid = 0;

function push_sItens() {

    var table = $('#tb_sub_I td input');

    var n_input = table.length - 4;

    var rows = n_input / 4;

    for (var i = 0; i < rows; i++) {

        eventFire(document.getElementById('add_sub_h'), 'click');

        var state = ((i / rows) * n_input) + 4;
        var variavel = cliqueValid * 4;
        
        var column1 = table[state].value;
        var column2 = table[state + 1].value;
        var column3 = table[state + 2].value;
        var column4 = table[state + 3].value;

        var nVariavel = (i + 1) + variavel;

        $("#tb_doc_h___" + nVariavel).val(column1);
        $("#tb2_orc___" + nVariavel).val(idOAll);
        $("#tb_n_h___" + nVariavel).val(column2);
        $("#tb_descricao_h___" + nVariavel).val(column3);
        $("#tb_responsavel_h___" + nVariavel).val(column4);

        eventFire(document.getElementById('excluirSubitemOR___' + nVariavel), 'click');
    
    }

    cliqueValid++;

    $(".excluir").bind("click", Excluir);

};

//NAVEGAÇÃO PELO FLUXO
function aprovacao() {

    var nProcesso = getWKNumState();

    var statusCard = $("#cadastroCard").val();

    if (nProcesso == 0) {

        groups();
        safety();
        idSeq();
    }

    if (nProcesso == 14 || statusCard == "Cadastro de Cliente/Patrocinador") {
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

        $("#panel4_CP").addClass('nav-close');
        $("#panel5_CP").addClass('nav-close');
        $("#panel6_CP").addClass('nav-close');

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

    if (nProcesso == 13 || statusCard == "Cadastro de Produtos e Serviços") {

        cadastroPS();

        if (nProcesso == 13) {
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

            $('#div_select1').addClass('readonly-css')
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
    }
    
    if (nProcesso == 34 || nProcesso == 23 || nProcesso == 15 || statusCard == "Cadastro de Orçamento") {
        cadastroO();

        if (nProcesso == 34 || nProcesso == 23 || nProcesso == 15) {

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

            $("#panel2_O").addClass('nav-close');
            
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

}


//LISTA DE GRUPOS
function groups() {     

    var dataset = DatasetFactory.getDataset("group", null, null, null);

    var count = dataset.values.length;

    $("#grupo_item").append('<option value="">Selecione...</option>');

    for(var i = 0; i < count; i++) {

        var opt = dataset.values[i]["groupPK.groupId"];

        $("#grupo_item").append('<option value=' + opt + '>' + opt + '</option>');
    }
}

function safety() {

    // Obtém a data/hora atual
    var data = new Date();

    var dia = data.getDate();           // 1-31
    var mes = data.getMonth();          // 0-11 (zero=janeiro)
    var ano4 = data.getFullYear();      // 4 dígitos

    var str_data = dia + '/' + (mes+1) + '/' + ano4;

    $('#safety2').val(str_data);

    $('#safety').val(getWKUser());

}


//USUÁRIO RESPONSÁVEL
function usuario(id) {

    var user = getWKUser();

    var c1 = DatasetFactory.createConstraint("login", user, user, ConstraintType.MUST);

    var constraints = new Array(c1);

    var dataset = DatasetFactory.getDataset("colleague", null, constraints, null);

    $('#'+id).val(dataset.values[0].colleagueName);
     
        
};

function teste() {

    var valor = $('#tOrcamento').val();

    console.log(valor);

};

function btnCpf() {

    $('#div_cpf').removeClass();
    $('#div_cnpj').removeClass();
    
    $('#div_cpf').addClass('form-group col-md-6');
    $('#div_cnpj').addClass('form-group col-md-6 nav-close');
    

};

function btnCnpj() {

    $('#div_cpf').removeClass();
    $('#div_cnpj').removeClass();
    
    $('#div_cpf').addClass('form-group col-md-6 nav-close');
    $('#div_cnpj').addClass('form-group col-md-6');

};

function validarDoc(cnpj, cpf) {

    var valid = 0;
    var dataset = DatasetFactory.getDataset("DSCadastroGeral", null, null, null);

    for (var i = 0; i < dataset.values.length; i++) {
        if (dataset.values[i].cnpj == cnpj) {
            valid++;
        }
        else if (dataset.values[i].cpf == cpf) {
            valid++;
        }
    }

    console.log(dataset);

    return valid;
};

$(document).on('change', "#cnpj",
    function validCnpj() {
       
        var inputCnpj = $('#cnpj').val();
        
        var valid = validarDoc(inputCnpj, 0);

        if (valid > 0) {
            $('#cnpj').removeClass();
            $('#p_cnpj').removeClass('nav-close');
            $('#label_cnpj').removeClass();

            $('#cnpj').addClass('form-control doc-error');
            $('#label_cnpj').addClass('doc-error');
        }
        else {

            $('#cnpj').removeClass();
            $('#label_cnpj').removeClass(); 

            $('#p_cnpj').addClass('nav-close');
            $('#cnpj').addClass('form-control');

        }
    }
);

$(document).on('change', "#cpf",
    function validCpf() {
       
        var inputCpf = $('#cpf').val();
        
        var valid = validarDoc(0, inputCpf);

        if (valid > 0) {
            $('#cpf').removeClass();
            $('#p_cpf').removeClass('nav-close');
            $('#label_cpf').removeClass();

            $('#cpf').addClass('form-control doc-error');
            $('#label_cpf').addClass('doc-error');
        }
        else {

            $('#cpf').removeClass();
            $('#label_cpf').removeClass(); 

            $('#p_cpf').addClass('nav-close');
            $('#cpf').addClass('form-control');

        }
    }
);

function motherSon() {


    var dataset = DatasetFactory.getDataset("DSCadastroGeral", null, null, null); 

    for (var i = 0; i < dataset.values.length; i++) {

        var array = dataset.values[i].codP.split('');

        if (array[4] == '-') {
        }
        else if (array[5] == '-') {
        }
        else if (array[6] == '-') {
        }
        else {

            $('#pertence').append($('<option>', {

                value: dataset.values[i].codP,
                text: dataset.values[i].codP
            }));
        }
        
    }   
}

$(document).on('change', "#pertence",
    function idSon() {
       
        var input = $('#pertence').val();
        var nIdSeq = 0;

        var dataset = DatasetFactory.getDataset("DSCadastroGeral", null, null, null); 

        for (var i = 0; i < dataset.values.length; i++) {

            var array = dataset.values[i].codP.split('');

            console.log('...');
            console.log(array);
            console.log('...');

            if (dataset.values[i].codP.length > 4) {
                if (array[4] == '-') {
                    var idDataset = dataset.values[i].codP.substring(0, 4);
                }
                else if (array[5] == '-') {
                    var idDataset = dataset.values[i].codP.substring(0, 5);
                }
                else if (array[6] == '-') {
                    var idDataset = dataset.values[i].codP.substring(0, 6);
                }
                else {
                    var idDataset = dataset.values[i].codP;
                }
            }
            
            else {
                var idDataset = dataset.values[i].codP;
            }

            console.log('>>>');
            console.log(idDataset);
            console.log('>>>');

            if (idDataset == input) {
                nIdSeq++;
            }

        }

        $('#codP').val(input+'-'+nIdSeq);

    });


$(document).on('change', "#compl",
    function pS() {

        var input = $('#compl').val();

        if (input == 'Sim') {
            $('#div_perc').removeClass();
            $('#div_perc').addClass('form-group col-md-6');

        }
        else {
            $('#div_perc').removeClass();
            $('#div_perc').addClass('form-group col-md-6 nav-close');
        }
        
    }
);