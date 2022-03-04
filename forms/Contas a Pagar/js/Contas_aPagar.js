window.onload = function() {   
    today();
    maskMoney();
    userS();
    navegation();
    descFormId();
    developDate();
    
}

//ABRIR E FECHAR MODAL DE BUSCA
function modal_add() {

    $("#modal_zoom").addClass('modal-action');

};

function modal_close() {

    $("#modal_zoom").removeClass('modal-action');

};

//INSERIR NOVOS REGISTROS
var count = 0;
function pushAdd() {

    count++;
    $("#div_table").addClass('table-color');

    wdkAddChild('tb_addItem');

    $(".excluir").bind("click", Excluir);

    maskMoney();
    activator();
    activator2();

}

//FUNÇÃO PARA EXCLUIR LINHAS DE TABELA
function Excluir(){

    var par = $(this).parent().parent(); //tr

    par.remove();

};

//ID DO DOCUMENTO
function IDseq() {


    var dataset = DatasetFactory.getDataset("DSFormulariodeSolicitacaodeCompras", null, null, null);

    var rowCount = dataset.values.length;

    if ((rowCount+1) >= 10) {

        var id = 'SC-0' + (rowCount + 1);

    }
    else if ((rowCount + 1) >= 100) {

        var id = 'SC-' + (rowCount + 1);
    }
    else {

        var id = 'SC-00' + (rowCount + 1);
    }

   $("#idSeq").val(id);

};

//NOME DO SOLICITANTE
var usuario;
function userS() {

    var user = getWKUser();

    var c1 = DatasetFactory.createConstraint("login", user, user, ConstraintType.MUST);

    var constraint = new Array (c1);

    var array = DatasetFactory.getDataset("colleague", null, constraint, null);

    usuario = array.values[0].colleagueName;   

};

//DATA
var hj;

//DATA DE HOJE
function today(id) {

    // Obtém a data/hora atual
	var data = new Date();
	
    // Guarda cada pedaço em uma variável
    var dia = data.getDate();           // 1-31
    var mes = data.getMonth()+1;          // 0-11 (zero=janeiro)
    var ano4 = data.getFullYear();      // 4 dígitos
    
    // Formata a data e a hora (note o mês + 1)

    if (dia < 10) {
        dia = "0"+dia;
    }
    if (mes < 10) {
        mes = "0"+mes;
    }
    var str_data = dia+'/'+mes+'/'+ano4;

    hj = str_data;
    $('#'+id).val(str_data);
    return str_data;

};

//NAVEGAÇÃO ENTRE ETAPAS DO PROCESSO
function navegation() {

    var nState = getWKNumState();

    //Preenchimento Inicial
    if (nState == 0) {
        IDseq();
        userS();
        $("#requester").val(usuario);
        $("#date_solicitation").val(hj);
    }

    //Aprovação Retorno Inicial
    else if (nState == 1) {

        gerente();

        $('#tobs').prop('readonly', true);
        $('#tdate').prop('readonly', true);
        $('#tpayment').prop('readonly', true);
        $('#div_aprovacao').addClass('off');

    }

    //Aprovação Gerente
    else if (nState == 2) {

        inspecao();

        $("#div_table").addClass('table-color');
        //Desabilita dados preenchidos inicialmente
        $("#div_table").addClass('off');
        $('#button_add').prop('disabled', true);

        $('#money_all').prop('readonly', true);
        $('#price').prop('readonly', true);
        

        //Data de aprovação
        $('#aprovacao_data_gerente').val(hj);

        //Responsável
        $('#aprovacao_responsavel_gerente').val(usuario);

        gerente();

        //Botões inertes
        var nButton = ex_button.length;

        for (var i = 0; i < nButton; i++) {

            ex_button[i].disabled = true;
        }

        financeiroR();

    }
    else if (nState == 29) {
        $("#div_table").addClass('table-color');
        //Desabilita dados preenchidos inicialmente
        $("#div_table").addClass('off');
        $('#button_add').prop('disabled', true);

        $('#money_all').prop('readonly', true);
        $('#price').prop('readonly', true);

        //Exibir informações do gerente
        $('#aprovacao_gerente_tabs').removeClass('nav-close');
        $('#aprovacao_gerente_nav').removeClass('nav-close');

        $('#tobs').prop('readonly', true);
        $('#tdate').prop('readonly', true);
        $('#tpayment').prop('readonly', true);
        $('#div_aprovacao').addClass('off');
    }
    else if (nState == 5) {

        $("#div_table").addClass('table-color');
        //Desabilita dados preenchidos inicialmente
        $("#div_table").addClass('off');
        $("#div_cotacao").addClass('off');
        $('#button_add').prop('disabled', true);

        $('#money_all').prop('readonly', true);
        $('#price').prop('readonly', true);

        financeiro();

        $('#aprovacao_resp_finan').val(usuario);
        $('#aprovacao_data_finan').val(hj);

        //Botões inertes
        var nButton = ex_button.length;

        for (var i = 0; i < nButton; i++) {

            ex_button[i].disabled = true;
        }


    }
    else if (nState == 6) {

        $("#div_table").addClass('table-color');
        //Desabilita dados preenchidos inicialmente
        $("#div_table").addClass('off');
        $("#div_cotacao").addClass('off');
        $('#button_add').prop('disabled', true);

        recebimento();
        inspecao();

        $('#aprovacao_resp_inspecao').val(usuario);
        $('#aprovacao_data_insp').val(hj);
        $('#deadline').val(hj);

        //Botões inertes
        var nButton = ex_button.length;

        for (var i = 0; i < nButton; i++) {

            ex_button[i].disabled = true;
        }

    }
};

function gerente() {

    $('#aprovacao_gerente_tabs').removeClass('nav-close');
    $('#aprovacao_gerente_tabs').addClass('active');
    $('#aprovacao_gerente_nav').removeClass('nav-close');
    $('#aprovacao_gerente_nav').addClass('active');

};

function financeiro() {

    $('#aprovacao_financeiro_tabs').removeClass('nav-close');
    $('#aprovacao_financeiro_tabs').addClass('active');
    $('#aprovacao_financeiro_nav').removeClass('nav-close');
    $('#aprovacao_financeiro_nav').addClass('active');

    //Exibir informações do gerente
    $('#aprovacao_gerente_tabs').removeClass('nav-close');
    $('#aprovacao_gerente_nav').removeClass('nav-close');

    $('#tobs').prop('readonly', true);
    $('#tdate').prop('readonly', true);
    $('#tpayment').prop('readonly', true);
    $('#div_aprovacao').addClass('off');

};

function recebimento() {

    $('#recebimento_tabs').removeClass('nav-close');
    $('#recebimento_tabs').addClass('active');
    $('#recebimento_nav').removeClass('nav-close');
    $('#recebimento_nav').addClass('active');

     //Exibir informações do gerente
    $('#aprovacao_gerente_tabs').removeClass('nav-close');
    $('#aprovacao_gerente_nav').removeClass('nav-close');

    $('#tobs').prop('readonly', true);
    $('#tdate').prop('readonly', true);
    $('#tpayment').prop('readonly', true);
    $('#div_aprovacao').addClass('off');

    //Exibir informações do financeiro
    $('#aprovacao_financeiro_tabs').removeClass('nav-close');
    $('#aprovacao_financeiro_nav').removeClass('nav-close');

    $('#div_aprovado_finan').addClass('off');
    $('#tobs_finan').prop('readonly', true);

};

//MASK (MÁSCARA)

function maskMoney() {

    var pagamento = $('#tpayment');
    pagamento.mask('#.##0.00#.##0,00', {reverse: true});     

    for (var i = 1; i <= count; i++) {

        var valor_unit = $('#tb_money___' + i);
        var valor_titem = $('#tb_money_final___' + i);

        valor_unit.mask('#.##0.00#.##0,00', {reverse: true});
        valor_titem.mask('#.##0.00#.##0,00', {reverse: true});
    }
    
    
};

//CÁLCULO TOTAL POR ITEM E POR SOLICITAÇÃO
var soma;

function calculo() {

    soma = 0;
    
    var lengthTable = ($("#tb_addItem tr").length) - 2;

    for (var i = 1; i <= lengthTable; i++) {

        var unidade = $("#tb_addItem tr input#tb_qtd___" + i);
        var valor_unit = $("#tb_addItem tr input#tb_money___" + i);
        var valor_titem = $("#tb_addItem tr input#tb_money_final___" + i);

        var replace1Unit = valor_unit[0].value.replace(".", "");
        var replace2Unit = replace1Unit.replace(",", ".");

        valor_titem[0].value = ((unidade[0].value * replace2Unit).toFixed(2)).replace(".", ",");
        
        soma = parseFloat(soma) + parseFloat((valor_titem[0].value).replace(",", "."));
    }   
    
    $('#money_all').val((soma.toFixed(2)).replace(".", ","));
}

function activator() {

    for (var i = 1; i <= count; i++) {

        $("#tb_money___" + i).blur(function() {

            calculo();
            coditem();

        });
    }
};

function activator2() {

    for (var i = 1; i <= count; i++) {

        $(document).on('change', "#tb_item___"+i,
            function inputValueIsNull() {

                datasetItem();

            }
        );
    }

}

//Inseção de recebimentos na tabela na segunda atividade
function inspecao() {

    var lengthTable = ($("#tb_addItem tr").length) - 2;

    for (var i = 1; i <= lengthTable; i++) {

        wdkAddChild('tb_inspecao');

        var item = $('#tb_itemCod___' + i).val();
        var descricao = $('#tb_descricao___' + i).val();
        var fornecedor = $('#tb_fornecedor___' + i).val();

        $('#tb_ins_item___' + i).val(item);
        $('#tb_ins_desc___' + i).val(descricao);
        $('#tb_ins_forn___' + i).val(fornecedor);
    }

};

function coditem() {

    for (var i = 1; i <= count; i++) {

        var codigo = $('#tb_item___' + i).val();

        $('#tb_itemCod___' + i).val(codigo);
    }

};

//Retorno de Formulário devido a inconsistencias
function financeiroR() {
    var obs = $('#tobs_finan').val();

    if (obs != "") {

    //Exibir informações do financeiro
    $('#aprovacao_financeiro_tabs').removeClass('nav-close');
    $('#aprovacao_financeiro_nav').removeClass('nav-close');

    $('#div_aprovado_finan').addClass('off');
    $('#tobs_finan').prop('readonly', true);

    }

};

function datasetItem() {

    for (var i = 1; i <= count; i++) {

        try {

        var codigo = document.getElementById('tb_item___' + i).value;

        var c1 = DatasetFactory.createConstraint("codP", codigo, codigo, ConstraintType.MUST);

        var constraint = new Array(c1);

        var array = DatasetFactory.getDataset("DSFormulariodeCadastrodeProdutoseServicos", null, constraint, null);

        $('#tb_descricao___'+ i).val(array.values[0].descricao);
        $('#tb_fornecedor___'+ i).val(array.values[0].fornecedores);

        }

        catch {

            alert('Houve um Erro inesperado');

        }
    }

}

function descFormId() {
    
    var name = $('#idSeq').val();
    var id = $('#requester').val();
    var dataset = DatasetFactory.getDataset("processAttachment", null, null, null);
    var nRow = dataset.values.length;

    var nProcess = dataset.values[nRow-1]['processAttachmentPK.processInstanceId'];

    $('#descForm').val(nProcess+1+' - '+name+' - '+id);
    
}

function developDate() {
    var data = $('#date_solicitation').val();

    var dia = data.substring(0,2);
    var mes = data.substring(3,5);
    var ano = data.substring(6,10);

    data = ano.toString()+mes.toString()+dia.toString();

    $('#develop_date').val(data);
}
