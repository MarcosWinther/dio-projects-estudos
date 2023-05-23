const fs = require('fs');

const promessaDaLeituraDoArquivo = fs.promises.readFile('tarefas.csv');

promessaDaLeituraDoArquivo.then((arquivo) => {
   console.log(arquivo.toString('utf8'));
}).catch((error) => {
   console.error('Deu ruim!', error)
})