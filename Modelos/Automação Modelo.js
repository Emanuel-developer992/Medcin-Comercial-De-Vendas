// AUTOMAÇÃO DE DESCONTO

var counter = 1;

function addCampo() {

    counter++;

    for (var i = 1; i <= counter; i++) {

        var correcao = i - 1;
        console.log(correcao);

        $("#desconto___1").blur(function() {

            var inputtOcamento = document.getElementById("tOrcamento___1");
            var inputdesconto = document.getElementById("desconto___1");
            var inputorcamentoDesconto = document.getElementById("orcamentoDesconto___1");

            var desconto = inputdesconto.value / 100; 
            var totalDesconto = inputtOcamento.value - (inputtOcamento.value * desconto);
            var arredondamento = parseFloat(totalDesconto.toFixed(2));
            inputorcamentoDesconto.value = arredondamento;
        });

        $("#tOrcamento___1").blur(function() {

            var inputtOcamento = document.getElementById("tOrcamento___1");
            var inputdesconto = document.getElementById("desconto___1");
            var inputorcamentoDesconto = document.getElementById("orcamentoDesconto___1");

            var desconto = inputdesconto.value / 100; 
            var totalDesconto = inputtOcamento.value - (inputtOcamento.value * desconto);
            var arredondamento = parseFloat(totalDesconto.toFixed(2));
            inputorcamentoDesconto.value = arredondamento;
        });


        $("#desconto___"+i).blur(function() {

            var inputtOcamento = document.getElementById("tOrcamento___"+correcao);
            var inputdesconto = document.getElementById("desconto___"+correcao);
            var inputorcamentoDesconto = document.getElementById("orcamentoDesconto___"+correcao);

            var desconto = inputdesconto.value / 100; 
            var totalDesconto = inputtOcamento.value - (inputtOcamento.value * desconto);
            var arredondamento = parseFloat(totalDesconto.toFixed(2));
            inputorcamentoDesconto.value = arredondamento;
        });

        $("#tOrcamento___"+i).blur(function() {

            var inputtOcamento = document.getElementById("tOrcamento___"+correcao);
            var inputdesconto = document.getElementById("desconto___"+correcao);
            var inputorcamentoDesconto = document.getElementById("orcamentoDesconto___"+correcao);

            var desconto = inputdesconto.value / 100; 
            var totalDesconto = inputtOcamento.value - (inputtOcamento.value * desconto);
            var arredondamento = parseFloat(totalDesconto.toFixed(2));
            inputorcamentoDesconto.value = arredondamento;
        });
    }
}

function buscaCampos() {

    var inputZoom = "0023";

    var codConstraint = DatasetFactory.createConstraint("codP", inputZoom, inputZoom, ConstraintType.SHOULD);

    var arrayConstraint = new Array(codConstraint);

    var array = DatasetFactory.getDataset("DSCadastroGeral", null, arrayConstraint, null);

    var inputdescricao = document.getElementById("descricaoItem___1");
    var inputvtabela = document.getElementById("#rItem___1");

    var final = array.values[0].specificChar;
    
    console.log(inputZoom);
    console.log(codConstraint);
    console.log(arrayConstraint);
    console.log(array);
    console.log(final);

    inputdescricao.value = final;
    
    
}	