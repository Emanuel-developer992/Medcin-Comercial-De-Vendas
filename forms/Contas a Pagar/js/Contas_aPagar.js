function modal_add() {

    $("#modal_zoom").addClass('modal-action');

};

function modal_close() {

    $("#modal_zoom").removeClass('modal-action');

};

function pushAdd() {

    wdkAddChild('tb_addItem');

    $(".excluir").bind("click", Excluir);

    onsole.log("Chegou aqui 1");

}

function Excluir(){

    console.log("Chegou aqui 2");

    var par = $(this).parent().parent(); //tr

    par.remove();

};

function db_busca() {

    var aTb = [];
    var RowCount;
    var table;
    var array;

    table = document.getElementById("tb_busca");

    var array = DatasetFactory.getDataset("DSCadastroGeral", null, null, null);

    RowCount = array.values.length 

    for (var n = 0; n < RowCount; n++) {

        aTb = [];

        //Valores para integração ao campos
        //#region array.values[]
        var a_nomeComp = array.values[n].nomeComp;
        var a_nomeResponsavel = array.values[n].nomeResponsavel;
        var a_rgResponsavel = array.values[n].rgResponsavel;
        var a_emailResponsavel = array.values[n].emailResponsavel;

        //#endregion

        //Integração aos campos
        //#region aTb.push();
        aTb.push(a_nomeComp);
        aTb.push(a_nomeResponsavel);
        aTb.push(a_rgResponsavel);
        aTb.push(a_emailResponsavel);

        //#endregion

        var newRow = table.insertRow(n);

        //Inserção de linhas
        for (var i = 0; i < 8; i++) {
            
                newCell = newRow.insertCell(i);
                
                newCell.innerHTML = aTb[i];
            
        }
        
    }

}
