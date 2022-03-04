function printDiv(divName) {

    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;

};	

var nPt1 = 0;
function pt1() {

    var aTb1 = [];
    var aTb2 = [];
    var aTb3 = [];
    var aTb4 = [];
    var aTb5 = [];

    var d1 = '<b>Orçamento</b>';
    var d2 = $("#nProj").val();
    
    var d3 = '<b>Data</b>';
    var d4 = $("#dataCadastro").val();

    var d5 = '<b>Patrocinador</b>';
    var d6 = $("#client").val();

    var d7 = '<b>Solicitante</b>';
    var d8 = $("#name_solic").val();

    var d9 = '<b>Contato</b>';
    var d10 = $("#tel_solic").val();+' / '+$("#email_solic").val();
    

    aTb1.push(d1);
    aTb1.push(d2);
    aTb2.push(d3);
    aTb2.push(d4);
    aTb3.push(d5);
    aTb3.push(d6);
    aTb4.push(d7);
    aTb4.push(d8);
    aTb5.push(d9);
    aTb5.push(d10);

    var table = document.getElementById("tb_pt1");

    //var numOfRows = table.rows.length;
    
    var numOfCols = 2;

    for (var x = 0; x < 5; x++) {

        nPt1++;
    
        var newRow = table.insertRow(x);
        
        for (var j = 0; j < numOfCols; j++) {
        
            newCell = newRow.insertCell(j);

            if (x == 0) {
                newCell.innerHTML = aTb1[j];
            }
            if (x == 1) {
                newCell.innerHTML = aTb2[j];
            }
            if (x == 2) {
                newCell.innerHTML = aTb3[j];
            }
            if (x == 3) {
                newCell.innerHTML = aTb4[j];
            }
            if (x == 4) {
                newCell.innerHTML = aTb5[j];
            }
            
        }
    }

};

function pt2() {
    var tb = $('#tb_sub_R tr');
    var nTb = tb.length;

    

    for (var x = 2; x < nTb; x++) {
        var aTb1 = [];

        var d1 = tb[x].children[0].childNodes[0].value;
        var d2 = tb[x].children[4].childNodes[0].value;
        var d3 = 'N/A';

        aTb1.push(d1);
        aTb1.push(d2);
        aTb1.push(d3);

        var table = document.getElementById("tb_pt2");

        var numOfCols = 3;

        var newRow = table.insertRow(x-1);

        for (var j = 0; j < numOfCols; j++) {

            newCell = newRow.insertCell(j);

            newCell.innerHTML = aTb1[j];        
        }
    }
}

function pt4() {
    var tb1 = $('#tabelaOrcamento2 tr');
    var tb2 = $('#tabelaOrcamento tr');
    var nTb = tb1.length;

    

    for (var x = 2; x < nTb; x++) {

        var aTb1 = [];

        var d1 = tb1[x].children[0].childNodes[0].value;
        var d2 = tb2[x].children[2].childNodes[0].value;
        var d3 = $("#dataCadastro").val();
        var d4 = tb1[x].children[4].childNodes[0].value;

        aTb1.push(d1);
        aTb1.push(d2);
        aTb1.push(d3);
        aTb1.push(d4);

        var table = document.getElementById("tb_pt4");

        var numOfCols = 4;

        var newRow = table.insertRow(x-1);

        for (var j = 0; j < numOfCols; j++) {

            newCell = newRow.insertCell(j);

            newCell.innerHTML = aTb1[j];        
        }
    }
}

function pt5() {

    var tb = $('#tabelaOrcamento tr');
    var nTb = tb.length;

    for (var x = 2; x < nTb; x++) {

        var aTb1 = [];

        var d1 = tb[x].children[0].childNodes[0].value;
        var d2 = 'R$ '+(tb[x].children[4].childNodes[0].value).replace('.', '');
        var d3 = "01"
        var d4 = 'R$ '+tb[x].children[6].childNodes[0].value;

        aTb1.push(d1);
        aTb1.push(d2);
        aTb1.push(d3);
        aTb1.push(d4);

        var table = document.getElementById("tb_pt5");

        var numOfCols = 4;

        var newRow = table.insertRow(x-1);

        for (var j = 0; j < numOfCols; j++) {

            newCell = newRow.insertCell(j);

            newCell.innerHTML = aTb1[j];        
        }
    }

    var aTb2 = [];

    var d5 = $("#vsD").val();
    var d6 = $("#vD").val();
    var d7 = $("#vcD").val();

    aTb2.push(d5);
    aTb2.push(d6);
    aTb2.push(d7);

    var table = document.getElementById("tb_pt5c");

    var numOfCols = 3;

    var newRow = table.insertRow(1);

    for (var j = 0; j < numOfCols; j++) {

        newCell = newRow.insertCell(j);

        newCell.innerHTML = aTb2[j];        
    }
   
};

function printDiv(divId,
  title) {

  var style = "<style>";
  style = style + "table {width: 100%;font: 20px Calibri;}";
  style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
  style = style + "padding: 2px 3px;text-align: center;}";
  style = style + "</style>";

  let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');

  mywindow.document.write(`<html><head><title>${title}</title>`);
  mywindow.document.write(style);
  mywindow.document.write('</head><body >');
  mywindow.document.write(document.getElementById(divId).innerHTML);
  mywindow.document.write('</body></html>');

  mywindow.document.close(); // necessary for IE >= 10
  mywindow.focus(); // necessary for IE >= 10*/

  mywindow.print();
  mywindow.close();

  return true;
}

function startReport() {
    try {
        pt1();
        pt2();
        pt4();
        pt5();
    } catch (e) {
        console.log('ERRO -> '+e);
    }
    var id = $("#nProj").val();
    printDiv('relatorio_nav', id);
};