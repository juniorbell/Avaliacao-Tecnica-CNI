# Avaliação-Técnica-CNI


A industria farmaceutica hojé é um mercado em constante crescimento e consequentemente mais lucrativos e influentes. Só no ano de 2020, o mercado farmacêutico movimentou mais de R$ 88 bilhões de reais somente no Brasil e mais de 1 trilhão de doláres em todo o mundo, de acordo com os dados da IQVIA, uma renomada consultoria especializado no tipo de assunto. 

O motivo principal da industria famaceutica é desenvolver, produzir e comercializar medicamentos e terapias que previnem, tratam ou curam doenças, desde doenças comuns, como gripe, resfriado, dores no corpo, até mais complexas.

Com altos investimentos em biotecnologia, inovação, pesquisa e desenvolvimento e dentre outros, surgiu a ideia de fazer esse projeto voltado com a ideia na industria farmaceutica. 

# Projeto
O  BellPharma é um Projeto que tem como base um crud (Creat, Read, Update and Delete) onde é registrado o medicamento, contendo as informações: id(pk), Nome Medicamento, Descrição, Quantidade, laboratório, Forma Farmaceutica e estoque.

Para o desenvolvimento da aplicação foram utilizadas linguagens e frameworks, tais como: 

## front-end: 
Angular 15, HTML, CSS, JavaScript e TypeScript. Para estilização dos components, tabelas e  notificações foram utilizados as bibliotecas e frameworks: Toastr, Bootswatch, PrimeNG, Material, jsPDF.

## Back-end: 
No back-end foi utilizado o node, para a conexão de acesso e manipulação de banco de dados foi utilizado o Sequelize, auxiliando no mapeamento e consultas do banco de dados relacional.  
Express para auxiliar o node.js com um conjunto de recursos essenciais, tais como: roteamento, requisições e respostas, tratamento de erros e dentre outros. Postman para testar, validar e fazer requisições, tanto com api e endpoints. 

## Banco de Dados 
No projeto foi utilizado banco de dados relacional MySql. O mesmo é utilizado bastante para esses tipos de projetos, por sua ampla compatibilidade com sistemas operacionais, gerenciamento, escabilidade e dentre outros.


# Guia de execução da aplicação  front-end


## Pré-requisitos

Antes de começar, você deve ter o seguinte instalado em sua máquina:

- Node.js: [Download e Instalação](https://nodejs.org/)
- npm (Node Package Manager): Geralmente, é instalado com o Node.js
- Angular CLI (Command Line Interface): Execute o seguinte comando para instalar globalmente:
- npm install -g @angular;cli

## git clone

1. Clone este repositório em sua máquina local usando o seguinte comando: 
 - git clone https://github.com/juniorbell/Avaliacao-Tecnica-CNI.git
 - navegue até o diretório do projeto Avaliacao-Tecnica-CNI/front-end
2. Instale as dependências do projeto usando o npm: 
- npm install

## Executando a aplicação
- Após concluir a instalação, você pode iniciar o servidor de desenvolvimento do angular, executando o seguinte comando:
O ng serve.

 A aplicação estará disponível em `http://localhost:4200/`

# Guia de execução da aplicação  back-end 

- Após realizar o git clone da aplicação, navegue até o diretório do projeto
O cd Avaliacao-Tecnica-CNI\back-end
O Instale as dependências do projeto usando o npm: 
O npm install

## Configuração

1. Configure as variáveis de ambiente necessárias, como a URL do banco de dados, chaves de API, etc., em um arquivo `.env` na raiz do projeto. Um exemplo pode ser encontrado em `.env.example`.

2. Certifique-se de configurar corretamente o banco de dados, se aplicável, com as informações de conexão corretas no arquivo de configuração.

## Executando o Servidor
Após a instalaçao e configuração, vpocê pode iniciar o servidor. Executando o seguinte comando: 
- nodemon dist/index.js
O servidor estará em execução em `http://localhost:3001/`
