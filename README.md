Siga as seguintes instruções (se caso abaixar os arquivos na máquina virtual) :
Verifique se TODOS os arquivos .ejs estão dentro da pasta: /views
Verificar se o arquivo dados.js está fora da pasta /views
  Após isso, digite no terminal os seguintes comandos:
  source ~/Documentos/src/nodejs-env/bin/activate
  npm init -y
  npm install mysql2 express body-parser cors ejs
  IMPORTANTE: Após isso, criar um banco de dados com o nome: "isadora" e com a tabela chamada "dados". Com os seguintes itens: email VARCHAR (255) CPF VARCHAR (255) senha VARCHAR (255)
