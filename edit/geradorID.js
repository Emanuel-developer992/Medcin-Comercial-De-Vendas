window.onload = function() {

    var dsCadastro = DatasetFactory.getDataset("group", null, null, null);

    var linha = dsCadastro.values.length;

    var inputID = document.getElementById("idSeq");

    inputID.value = linha;

    
}