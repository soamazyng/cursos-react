# Anotações

## Criando um projeto novo

Não é preciso instalar Babel ou Webpack pois o React possui um CLI que contém tudo que é necessário para rodar um projeto novo.

E já vem com todas as configurações prontas
Para isso basta rodar o comando abaixo:

```
npx create-react-app <name>
```

## Configuração do ESLint e Pretter :

```
  npm i eslint --save-dev
```

Depois de instalar o eslint

```
npx eslint --init
```

Agora instalar as dependências do prettier

```
 npm i prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

Resolve os problemas com o state={}
https://babeljs.io/docs/en/babel-plugin-proposal-class-properties

## Plugin eslint para react hooks

```
npm i eslint-plugin-react-hooks --save-dev
```

Não esquecer de add dentro do eslintrc.js plugins e add as rules.

## Trabalhando com Rotas dentro do React

```
npm i react-router-dom
```

## Trabalhando com Styled Component

```
npm install --save styled-components
```

## Pacote de ícones mais utilizado para desenvolvedores React

```
npm i react-icons
```

## PropTypes

Biblioteca para controlar o tipo de envio de parâmetros

```
npm i prop-types
```

## Polished

Biblioteca que lida com cores dentro do React

```
npm i polished
```

## Instalação REACT + REDUX

```
npm i redux react-redux
```

## Instalando o Reactotron REACT e REDUX

```
npm i reactotron-react-js reactotron-redux
```

## Instalando o Immer

Biblioteca que ajuda a trabalhar com arrays imutáveis dentro do React

```
npm install immer
```

## Instalando o Json Server

Biblioteca utilizada para simular uma api REST

```
npm install -g json-server
```

Rodando a api rest

```
json-server --watch db.json --port 3333
```

## Redux Saga

```
npm i redux-saga
```

Reactotron Redux Saga

```
npm i reactotron-redux-saga
```

## React Toastify

```
npm i react-toastify
```

## Controlador da history api

Controla as rotas do navegador

```
npm i history
```

## Permite a navegação pelas pastas de forma mais simples

Para fazer esta alteração precisa mudar a forma como o webpack funciona com o create-react-app e para isso é necessário instalar dois módulos para conseguir este tipo de customização.

```javascript
npm i customize-cra react-app-rewired --save-dev
```

Após instalar os módulos e criar o arquivo de configuração do overrides precisa instalar o plugin que eu quero inserir no projeto create-react-app

```javascript
npm i babel-plugin-root-import --save-dev
```

Com a instalação deste plugin é possível utilizar o **~** indicando que está na pasta src do projeto, e não precisa mais do **../**

Para funcionar é necessário alterar a forma de inicialização do projeto para:

```javascript
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  }
```

Para que o eslint entenda o ~ é necessário instalar um plugin:

```javascript
npm i eslint-import-resolver-babel-plugin-root-import --save-dev
```

E configurar o eslintrc

```javacript
plugins: ["babel-plugin-root-import"],
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src"
      },
    },
  },
```

Para voltar a funcionar o goto file ao segurar o ctrl + click é necessário criar um arquivo na raiz do projeto chamado **jsconfig.json**
Depois de criar este arquivo, devemos reiniciar o vscode para funcionar.

Conteúdo do arquivo:

```
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "~/*": ["*"],
    }
  }
}
```
