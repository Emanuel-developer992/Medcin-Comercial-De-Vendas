// IMPRIMIR RELATÓRIO
function printDiv(divName) {

    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;

};

// FILTRAR E BUSCAS
//#region 

// Variaveis globais

    var aTb = [];
    var RowCount;
    var table;
    var array;
    

function filter_participantes() { 

    var cArray = [];
    
    table = document.getElementById("tb_relatorio");
    
    $("#tb_relatorio tr").remove();
    
    //Condição de Busca
    //#region Contraint

    if ($("#filter_nome").val() == "") {
        var nome = "nenhum_parametro_adicionado";
    }
    else {
        nome = $("#filter_nome").val();
        var cNome = DatasetFactory.createConstraint("nomeComp", nome, nome, ConstraintType.MUST);
        cArray.push(cNome);
    }

    if ($("#filter_idade").val() == "") {
        var idade = "nenhum_parametro_adicionado";
    }
    else {
        idade = $("#filter_idade").val();
        var cIdade = DatasetFactory.createConstraint("idade", idade, idade, ConstraintType.MUST);
        cArray.push(cIdade);
    }

    if ($("#filter_cpf").val() == "") {
        var cpf = "nenhum_parametro_adicionado";
    }
    else {
        cpf = $("#filter_cpf").val();
        var cCpf = DatasetFactory.createConstraint("cpf", cpf, cpf, ConstraintType.MUST);
        cArray.push(cCpf);
    }

    if ($("#filter_rg").val() == "") {
        var rg = "nenhum_parametro_adicionado";
    }
    else {
        rg = $("#filter_rg").val();
        var cRg = DatasetFactory.createConstraint("rg", rg, rg, ConstraintType.MUST);
        cArray.push(cRg);
    }

    if ($("#filter_cep").val() == "") {
        var cep = "nenhum_parametro_adicionado";
    }
    else {
        cep = $("#filter_cep").val();
        var cCep = DatasetFactory.createConstraint("cepResid", cep, cep, ConstraintType.MUST);
        cArray.push(cCep);
    }

    if ($("#filter_sexo").val() == "") {
        var sexo = "nenhum_parametro_adicionado";
    }
    else {
        sexo = $("#filter_sexo").val();
        var cSexo = DatasetFactory.createConstraint("sexo", sexo, sexo, ConstraintType.MUST);
        cArray.push(cSexo);
    }

    if ($("#filter_fototipo").val() == "") {
        var fototipo = "nenhum_parametro_adicionado";
    }
    else {
        fototipo = $("#filter_fototipo").val();
        var cFototipo = DatasetFactory.createConstraint("fototipoResp",fototipo,fototipo, ConstraintType.MUST);
        cArray.push(cFototipo);
    }

    if ($("#filter_sensibilidade").val() == "") {
        var sensibilidade = "nenhum_parametro_adicionado";
    }
    else {
        sensibilidade = $("#filter_sensibilidade").val();
        var cSensibilidade = DatasetFactory.createConstraint("sensibilidadeResp", sensibilidade, sensibilidade, ConstraintType.MUST);
        cArray.push(cSensibilidade);
    }

    if ($("#filter_classe").val() == "") {
        var classe = "nenhum_parametro_adicionado";
    }
    else {
        classe = $("#filter_classe").val();
        var cClasse = DatasetFactory.createConstraint("resultClasseSocial", classe, classe, ConstraintType.MUST);
        cArray.push(cClasse);
    }
    
    //#endregion

    //Ordena o resultado pelo nome do Cliente
    var sortingFields = new Array("nomeComp");

    //Filtro de Busca 
    // Busca no Dataset + Condições de Filtro
    if (cArray == "") {
        array = DatasetFactory.getDataset("DSFormulariodeCadastrodeParticipantes", null, null, sortingFields);
    }
    else {
        array = DatasetFactory.getDataset("DSFormulariodeCadastrodeParticipantes", null, cArray, sortingFields);
    }

    // Numero de linhas do array vindo do filtro
    RowCount = array.values.length      
   
};

function filtrar() {

    filter_participantes();
    filter_cadastro();

};

//Limpar campos + tabela
function filter_clear() {

    $("#filter_nome").val("");
    $("#filter_idade").val("");
    $("#filter_cpf").val("");
    $("#filter_rg").val("");
    $("#filter_cep").val("");
    $("#filter_sexo").val("");
    $("#filter_fototipo").val("");
    $("#filter_sensibilidade").val("");
    $("#filter_classe").val("");

    $("#tb_relatorio tr").remove();

};

//pesquisar todos participantes
function filter_all() {

  filter_clear();
  filtrar(); 

};

//FILTROS POR CATEGORIA
function filter_responsavel() {

    filter_participantes();

    for (var n = 0; n < RowCount; n++) {

        aTb = [];

        //Valores para integração ao campos
        //#region array.values[]
        var a_cod = n + 1;
        var a_nomeComp = array.values[n].nomeComp;
        var a_dataCadastro = array.values[n].dataCadastro;
        var a_dataNascimento = array.values[n].dataNascimento;
        var a_nomeResponsavel = array.values[n].nomeResponsavel;
        var a_rgResponsavel = array.values[n].rgResponsavel;
        var a_celularResponsavel = array.values[n].celularResponsavel;
        var a_emailResponsavel = array.values[n].emailResponsavel;

        //#endregion

        //Integração aos campos
        //#region aTb.push();
        aTb.push(a_cod);
        aTb.push(a_nomeComp);
        aTb.push(a_dataCadastro);
        aTb.push(a_dataNascimento);
        aTb.push(a_nomeResponsavel);
        aTb.push(a_rgResponsavel);
        aTb.push(a_celularResponsavel);
        aTb.push(a_emailResponsavel);

        //#endregion

        var newRow = table.insertRow(n);

        //Inserção de linhas
        for (var i = 0; i < 8; i++) {
            
                newCell = newRow.insertCell(i);
                
                newCell.innerHTML = aTb[i];
            
        }
        
    }

};

function filter_cadastro() {

    filter_participantes();

    for (var n = 0; n < RowCount; n++) {

        aTb = [];

        //Valores para integração ao campos
        //#region array.values[]
        var a_cod = n + 1;
        var a_nomeComp = array.values[n].nomeComp;
        var a_sexo = array.values[n].sexo;
        var a_rg = array.values[n].rg;
        var a_cpf = array.values[n].cpf;
        var a_dataNasc = array.values[n].dataNasc;
        var a_idade = array.values[n].idade;
        var a_cContato = array.values[n].cContato;
        var a_tContato = array.values[n].tContato;
        
        //#endregion

        //Integração aos campos
        //#region aTb.push();
        aTb.push(a_cod);
        aTb.push(a_nomeComp);
        aTb.push(a_sexo);
        aTb.push(a_rg);
        aTb.push(a_cpf);
        aTb.push(a_dataNasc);
        aTb.push(a_idade);
        aTb.push(a_cContato);
        aTb.push(a_tContato);

        //#endregion

        var newRow = table.insertRow(n);

        //Inserção de linhas
        for (var i = 0; i < 9; i++) {
            
                newCell = newRow.insertCell(i);
                
                newCell.innerHTML = aTb[i];
            
        }
        
    }

};

function filter_localidade() {

    filter_participantes();

    for (var n = 0; n < RowCount; n++) {

        aTb = [];

        //Valores para integração ao campos
        //#region array.values[]
        var a_cod = n + 1;
        var a_nomeComp = array.values[n].nomeComp;
        var a_cepResid = array.values[n].cepResid;
        var a_endereco = array.values[n].endereco;
        var a_numero = array.values[n].numero;
        var a_complemento = array.values[n].complemento;
        var a_bairro = array.values[n].bairro;
        var a_cidade = array.values[n].cidade;
        var a_estado = array.values[n].estado;
        var a_pais = array.values[n].pais;
        
        //#endregion

        //Integração aos campos
        //#region aTb.push();
        aTb.push(a_cod);
        aTb.push(a_nomeComp);
        aTb.push(a_cepResid);
        aTb.push(a_endereco);
        aTb.push(a_numero);
        aTb.push(a_complemento);
        aTb.push(a_bairro);
        aTb.push(a_cidade);
        aTb.push(a_estado);
        aTb.push(a_pais);

        //#endregion

        var newRow = table.insertRow(n);

        //Inserção de linhas
        for (var i = 0; i < 10; i++) {
            
                newCell = newRow.insertCell(i);
                
                newCell.innerHTML = aTb[i];
            
        }
        
    }

};

function filter_social() {

    filter_participantes();

    for (var n = 0; n < RowCount; n++) {

        aTb = [];

        //Valores para integração ao campos
        //#region array.values[]
        var a_cod = n + 1;
        var a_nomeComp = array.values[n].nomeComp;
        var a_instagram = array.values[n].instagram;
        var a_facebook = array.values[n].facebook;
        var a_email = array.values[n].email;        
        
        //#endregion

        //Integração aos campos
        //#region aTb.push();
        aTb.push(a_cod);
        aTb.push(a_nomeComp);
        aTb.push(a_instagram);
        aTb.push(a_facebook);
        aTb.push(a_email);

        //#endregion

        var newRow = table.insertRow(n);

        //Inserção de linhas
        for (var i = 0; i < 5; i++) {
            
                newCell = newRow.insertCell(i);
                
                newCell.innerHTML = aTb[i];
            
        }
        
    }

};

function filter_fototipo() {

    filter_participantes();

    for (var n = 0; n < RowCount; n++) {

        aTb = [];

        //Valores para integração ao campos
        //#region array.values[]
        var a_cod = n + 1;
        var a_nomeComp = array.values[n].nomeComp;
        var a_corOlhos = array.values[n].corOlhos;
        var a_corCabelos = array.values[n].corCabelos;
        var a_corPele = array.values[n].corPele;
        var a_exposicaoSolar = array.values[n].exposicaoSolar;
        var a_fototipoResp = array.values[n].fototipoResp;      
        
        //#endregion

        //Integração aos campos
        //#region aTb.push();
        aTb.push(a_cod);
        aTb.push(a_nomeComp);
        aTb.push(a_corOlhos);
        aTb.push(a_corCabelos);
        aTb.push(a_corPele);
        aTb.push(a_exposicaoSolar);
        aTb.push(a_fototipoResp);

        //#endregion

        var newRow = table.insertRow(n);

        //Inserção de linhas
        for (var i = 0; i < 7; i++) {
            
                newCell = newRow.insertCell(i);
                
                newCell.innerHTML = aTb[i];
            
        }
        
    }

};

function filter_sensibilidade() {

    filter_participantes();

    for (var n = 0; n < RowCount; n++) {

        aTb = [];

        //Valores para integração ao campos
        //#region array.values[]
        var a_cod = n + 1;
        var a_nomeComp = array.values[n].nomeComp;
        var a_reacaoTemperatura = array.values[n].reacaoTemperatura;
        var a_descamar = array.values[n].descamar;
        var a_reacaoSabonete = array.values[n].reacaoSabonete;
        var a_reacaoTonico = array.values[n].reacaoTonico;
        var a_reacaoPosBarba = array.values[n].reacaoPosBarba;
        var a_sensibilidadeResp = array.values[n].sensibilidadeResp;    
        
        //#endregion

        //Integração aos campos
        //#region aTb.push();
        aTb.push(a_cod);
        aTb.push(a_nomeComp);
        aTb.push(a_reacaoTemperatura);
        aTb.push(a_descamar);
        aTb.push(a_reacaoSabonete);
        aTb.push(a_reacaoTonico);
        aTb.push(a_reacaoPosBarba);
        aTb.push(a_sensibilidadeResp);
        //#endregion

        var newRow = table.insertRow(n);

        //Inserção de linhas
        for (var i = 0; i < 8; i++) {
            
                newCell = newRow.insertCell(i);
                
                newCell.innerHTML = aTb[i];
            
        }
        
    }

};

function filter_rosto() {

    for (var n = 0; n < RowCount; n++) {

        filter_participantes();

        aTb = [];

        //Valores para integração ao campos
        //#region array.values[]
        var a_cod = n + 1;
        var a_nomeComp = array.values[n].nomeComp;
        var a_classificacaoPeleRosto = array.values[n].classificacaoPeleRosto;
        var a_tipoDepilacao = array.values[n].tipoDepilacao;
        var a_frequenciaEspinhas = array.values[n].frequenciaEspinhas;
        var a_classficacaoEvelhecimentoPele = array.values[n].classficacaoEvelhecimentoPele;
        var a_classificacaoManchasFacial = array.values[n].classificacaoManchasFacial;
        var a_classificacaoOlheiras = array.values[n].classificacaoOlheiras;    
        
        //#endregion

        //Integração aos campos
        //#region aTb.push();
        aTb.push(a_cod);
        aTb.push(a_nomeComp);
        aTb.push(a_classificacaoPeleRosto);
        aTb.push(a_tipoDepilacao);
        aTb.push(a_frequenciaEspinhas);
        aTb.push(a_classficacaoEvelhecimentoPele);
        aTb.push(a_classificacaoManchasFacial);
        aTb.push(a_classificacaoOlheiras);

        //#endregion

        var newRow = table.insertRow(n);

        //Inserção de linhas
        for (var i = 0; i < 8; i++) {
            
                newCell = newRow.insertCell(i);
                
                newCell.innerHTML = aTb[i];
            
        }
        
    }

};

function filter_cabelo() {
    
    filter_participantes();

    for (var n = 0; n < RowCount; n++) {

        aTb = [];

        //Valores para integração ao campos
        //#region array.values[]
        var a_cod = n + 1;
        var a_nomeComp = array.values[n].nomeComp;
        var a_tipoCabelo = array.values[n].tipoCabelo;
        var a_procedimentoCapilar = array.values[n].procedimentoCapilar;
        var a_caspas = array.values[n].caspas;
        var a_quedaCapilar = array.values[n].quedaCapilar;
        
    
        
        //#endregion

        //Integração aos campos
        //#region aTb.push();
        aTb.push(a_cod);
        aTb.push(a_nomeComp);
        aTb.push(a_tipoCabelo);
        aTb.push(a_procedimentoCapilar);
        aTb.push(a_caspas);
        aTb.push(a_quedaCapilar);
        //#endregion

        var newRow = table.insertRow(n);

        //Inserção de linhas
        for (var i = 0; i < 6; i++) {
            
                newCell = newRow.insertCell(i);
                
                newCell.innerHTML = aTb[i];
            
        }
        
    }

};

function filter_corpo() {

    filter_participantes();

    for (var n = 0; n < RowCount; n++) {

        aTb = [];

        //Valores para integração ao campos
        //#region array.values[]
        var a_cod = n + 1;
        var a_nomeComp = array.values[n].nomeComp;
        var a_classificacaoPele = array.values[n].classificacaoPele;
        var a_pelosAxilas = array.values[n].pelosAxilas;
        var a_transpiracao = array.values[n].transpiracao;
        var a_classificacaoCelulite = array.values[n].classificacaoCelulite;
        var a_classificacaoEstrias = array.values[n].classificacaoEstrias;
        var a_classificacaoUnhas = array.values[n].classificacaoUnhas;       
        
        //#endregion

        //Integração aos campos
        //#region aTb.push();
        aTb.push(a_cod);
        aTb.push(a_nomeComp);
        aTb.push(a_classificacaoPele);
        aTb.push(a_pelosAxilas);
        aTb.push(a_transpiracao);
        aTb.push(a_classificacaoCelulite);
        aTb.push(a_classificacaoEstrias);
        aTb.push(a_classificacaoUnhas);

        //#endregion

        var newRow = table.insertRow(n);

        //Inserção de linhas
        for (var i = 0; i < 8; i++) {
            
                newCell = newRow.insertCell(i);
                
                newCell.innerHTML = aTb[i];
            
        }
        
    }

};

function filter_saude() {

    filter_participantes();

    for (var n = 0; n < RowCount; n++) {

        aTb = [];

        //Valores para integração ao campos
        //#region array.values[]
        var a_cod = n + 1;
        var a_nomeComp = array.values[n].nomeComp;
        var a_historicoAlergias = array.values[n].historicoAlergias;
        var a_cosmeticosUtilizados = array.values[n].cosmeticosUtilizados;
        var a_disponibilidade = array.values[n].disponibilidade;
        var a_cicloMenstrual = array.values[n].cicloMenstrual;
        var a_usoMedicamentos = array.values[n].usoMedicamentos;
        var a_fuma = array.values[n].fuma;
        var a_praticaEsportes = array.values[n].praticaEsportes;
        var a_bebidaAcoolica = array.values[n].bebidaAcoolica;
    
        //#endregion

        //Integração aos campos
        //#region aTb.push();
        aTb.push(a_cod);
        aTb.push(a_nomeComp);
        aTb.push(a_historicoAlergias);
        aTb.push(a_cosmeticosUtilizados);
        aTb.push(a_disponibilidade);
        aTb.push(a_cicloMenstrual);
        aTb.push(a_usoMedicamentos);
        aTb.push(a_fuma);
        aTb.push(a_praticaEsportes);
        aTb.push(a_bebidaAcoolica);

        //#endregion

        var newRow = table.insertRow(n);

        //Inserção de linhas
        for (var i = 0; i < 10; i++) {
            
                newCell = newRow.insertCell(i);
                
                newCell.innerHTML = aTb[i];
            
        }
        
    }

};

//#endregion