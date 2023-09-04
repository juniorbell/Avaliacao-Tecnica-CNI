# Guia de execução da aplicação  front-end


## Pré-requisitos

Antes de começar, você deve ter o seguinte instalado em sua máquina:

- Node.js: [Download e Instalação](https://nodejs.org/)
- npm (Node Package Manager): Geralmente, é instalado com o Node.js
- Angular CLI (Command Line Interface): Execute o seguinte comando para instalar globalmente:
- npm install -g @angular;cli

## git clone

1. Clone este repositório em sua máquina local usando o seguinte comando: 
  1.1 git clone https://github.com/juniorbell/Avaliacao-Tecnica-CNI.git
  1.2 navegue até o diretório do projeto Avaliacao-Tecnica-CNI/front-end
2. Instale as dependências do projeto usando o npm: 
   2.1 npm install

##Executando a aplicação
- Após concluir a instalação, você pode iniciar o servidor de desenvolvimento do angular, executando o seguinte comando:
O ng serve.

  A aplicação estará disponível em `http://localhost:4200/`

# Guia de execução da aplicação  back-end 

Após realizar o git clone da aplicação, navegue até o diretório do projeto
  cd Avaliacao-Tecnica-CNI\back-end
1. Instale as dependências do projeto usando o npm: 
   1.1 npm install

## Configuração

1. Configure as variáveis de ambiente necessárias, como a URL do banco de dados, chaves de API, etc., em um arquivo `.env` na raiz do projeto. Um exemplo pode ser encontrado em `.env.example`.

2. Certifique-se de configurar corretamente o banco de dados, se aplicável, com as informações de conexão corretas no arquivo de configuração.

## Executando o Servidor
Após a instalaçao e configuração, vpocê pode iniciar o servidor. Executando o seguinte comando: 
- nodemon dist/index.js
O servidor estará em execução em `http://localhost:3001/`


