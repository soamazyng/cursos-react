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

## Rodando a aplicação com o webpack-dev-server

Se não estiver utilizando o react-create-app e quiser rodar o webpack direto.

```
yarn webpack-dev-server --mode development
```

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

## Instalação da lib que faz a persistencia dos dados para não perder caso o usuário dê refresh na tela

```
npm i redux-persist
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

---

## Trabalhando com Typescript

## Criando projetos utilizando o typescript

```shell
create-react-app nome-do-projeto --template=typescript
```

## Eslint import resolver

Pacote utilizado para o ESlint entender importações de arquivos typescript

```shell
yarn add eslint-import-resolver-typescript -D
```

## Prettier no projeto Typescript

```shell
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

## Estrutura para criar um componente de função utilizando o Typescript

```typescript
const Dashboard: React.FC = () => {};
```

O tipo da função sempre é React.FC pois é o tipo de Componente de Função.

---

## Double &&

Os dois & comercial é para trabalhar com condicionar que signfica que, se for true (ou false) faça o que vem depois dos dois &.

Exemplo

```javascript
{
  inputError && <Error>{inputError}</Error>;
}
```

Se a variável inputError retornar alguma coisa, você deve escrever o que está depois dos dois &&

## Double !!

Estes dois pontos de exclamação testa a variável duas vezes e retorna o resultado, exemplo

```javascript
inputError = true;
!!inputError; // vai retornar true
```

Ele vai retornar true pois o primeiro ! coloca a variável como negativo e o outro coloca a variável como true

Outro exemplo

```javascript
inputError = false;
!!inputError; // vai retornar false
```

Para melhor entendimento, os dois pontos de exclamação na verdade retorna o que a variável realmente é naquele momento.

---

## Trabalhando com rotas composta por barra

Se eu quiser receber como parâmetro uma barra / como parâmetro de uma rota eu preciso colocar o seguinte no arquivo de rotas:

```javascript
<Route path="/repository/:repository+" component={Repository} />
```

## Pegando os parâmetros da rota

Para pegar os parâmetros da rota é necessário utilizar o useRouteMatch

```javascript
import React from "react";
import { useRouteMatch } from "react-router-dom";

const Repository: React.FC = () => {
  const { params } = useRouteMatch();
  return <h1>Repository {params.repository}</h1>;
};

export default Repository;
```

---

## Extends do Typescript

Quando você quiser extender alguma coisa do React basta colocar extends na interface.
E quando você extende vem todos os atributos do jeito que eles são, isso é, se eles não são obrigatórios não serão na interface também, porém se você colocar o mesmo nome de atributo na interface sem o ponto de interrogação ele passará a ser obrigatório.
No caso abaixo o name não é obrigatório no InputHTMLAtrributes, porém no nosso caso ele se tornou obrigatório pois foi reescrito pela interface.

```typescript
import React, { InputHTMLAttributes } from "react";

import { Container } from "./input.style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC = () => (
  <Container>
    <input type="text" />
  </Container>
);

export default Input;
```

É possível também criar tipagens de objetos que extende outra classe, neste caso não é uma interface, pois **não podemos ter interface vazia**

```typescript
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
```

---

## Usecallback

Quando estamos trabalhando com o componente de função e dentro dele tem outra função, toda vez que ele é criado ou recriado a função interna é criada novamente na memória, causando assim lentidão na nossa aplicação,
para resolver este tipo de problema vamos utilizar um hook que se chama useCallBack, utilizando este hook a função de dentro não será recriada toda vez que o componente for renderizado novamente por conta de alterações de props etc.

A função para ser utilizada com o useCallBack tem que ser convertida para uma Arrow function e ao redor da função você coloca o useCallback.
No segundo parâmetro você precisa dizer o que deve ser alterado para essa função ser disparada novamente, se deixar vazio ela nunca mais vai ser recriada.

```javascript
const handleInputBlur = useCallback(() => {
  setIsFocused(false);
}, []);
```

## Trabalhando com animação no React

[https://www.react-spring.io](https://www.react-spring.io)
