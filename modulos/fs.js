const { error } = require("console");
const fs = require("fs");
const path = require("path");

// criar uma pasta

fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    console.log("Erro: ", error);
  }

  console.log("Pasta criada com sucesso! ");
});

//  criar um arquivo e adicionando texto
fs.writeFile(
  path.join(__dirname, "/test", "text.txt"),
  "Hello node!",
  (error) => {
    if (error) {
      return console.log("Deu k.o", error);
    }
    console.log("Arquivo criado com sucesso!");
  }
);


//  adicionar á um arquivo novo texto
// fs.appendFile(
//     path.join(__dirname, "/test", 'text.txt'), 
//     "hello world! ",
//      (error) => {
//         if (error){
//             return console.log ("acresentou em nada ", error);
//         }
//             console.log("Arquivo adicionado com sucesso! ");
//     }
// )   


// ler arquivo

fs.readFile(
    path.join(__dirname, '/test', 'text.txt'),
'utf8', (error,data) => {
    if (error){
        return console.log('Erro: ', error)
    }

    console.log(data)
}
)