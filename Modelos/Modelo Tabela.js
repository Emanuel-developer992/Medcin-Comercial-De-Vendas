function inserirLinhaTabela() {
	var dados = [];
	var nome = $("#nomeContato").val();
	var telefone = $("#telefoneContato").val();
	
	dados.push(nome);
	dados.push(telefone);
	
    // Captura a referência da tabela com id “minhaTabela”
    var table = document.getElementById("tb_contatos");
    // Captura a quantidade de linhas já existentes na tabela
    var numOfRows = table.rows.length;
    // Captura a quantidade de colunas da última linha da tabela
    var numOfCols = table.rows[numOfRows-1].cells.length;

    // Insere uma linha no fim da tabela.
    var newRow = table.insertRow(numOfRows);

    // Faz um loop para criar as colunas
    for (var j = 0; j < numOfCols; j++) {
        // Insere uma coluna na nova linha 
        newCell = newRow.insertCell(j);
        // Insere um conteúdo na coluna
        newCell.innerHTML = dados[j];
    }
    
    $("#nomeContato").val("");
	$("#telefoneContato").val("");

}
