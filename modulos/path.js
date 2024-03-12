const path = require ('path')

// basename -- apenas o nome do arquivo atual
console.log(path.basename(__filename));


//  nome do diretorio atual
console.log(path.dirname(__filename));


// extensão do arquivo.
console.log(path.extname(__filename));

// Criar objeto Path
console.log(path.parse(__filename));

// juntar caminhos de arquivos
console.log(path.join(__dirname, "test", "text.html"));

