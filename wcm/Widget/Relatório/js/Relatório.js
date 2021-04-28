// IMPRIMIR RELATÓRIO
function printDiv(divName) {

    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;

};

// FILTRAR E BUSCAS
function filter_participantes() { 

    var cArray = [];
    var array;
    var table = document.getElementById("tb_relatorio");
    var numOfRows = table.rows.length;

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

    //Filtro de Busca 

    // Busca no Dataset + Condições de Filtro
    if (cArray == "") {
        array = DatasetFactory.getDataset("DSFormulariodeCadastrodeParticipantes", null, null, null);
    }
    else {
        array = DatasetFactory.getDataset("DSFormulariodeCadastrodeParticipantes", null, cArray, null);
    }

    // Numero de linhas do array vindo do filtro
    var RowCount = array.values.length    

    for (var n = 0; n < RowCount; n++) {

        var aTb = [];

        //Valores para integração ao campos
        //#region array.values[]
        var a_nomeComp = array.values[n].nomeComp;
        var a_idade = array.values[n].idade;
        var a_cpf = array.values[n].cpf;
        var a_rg = array.values[n].rg;
        var a_cepResid = array.values[n].cepResid;
        var a_sexo = array.values[n].sexo;
        var a_fototipoResp = array.values[n].fototipoResp;
        var a_sensibilidadeResp = array.values[n].sensibilidadeResp;
        var a_resultClasseSocial = array.values[n].resultClasseSocial;
        
        
        //#endregion

        //Integração aos campos
        //#region aTb.push();
        aTb.push(a_nomeComp);
        aTb.push(a_idade);
        aTb.push(a_cpf);
        aTb.push(a_rg);
        aTb.push(a_cepResid);
        aTb.push(a_sexo);
        aTb.push(a_fototipoResp);
        aTb.push(a_sensibilidadeResp);
        aTb.push(a_resultClasseSocial);
        //#endregion

        console.log(RowCount);
        console.log(numOfRows);
        var newRow = table.insertRow(0);

        //Inserção de linhas
        for (var i = 0; i < 9; i++) {
            
                newCell = newRow.insertCell(i);
                
                newCell.innerHTML = aTb[i];
            
        }
        
    }

    
   
};

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

function filter_all() {

  filter_clear();
  filter_participantes(); 

};

function filter_responsavel() {

};

function filter_cadastro() {

};

function filter_localidade() {
    
}
