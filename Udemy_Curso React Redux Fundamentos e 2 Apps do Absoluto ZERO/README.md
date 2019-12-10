# Curso React anotações

[Link para apostila](http://files.cod3r.com.br/apostila-react-redux.pdf)

[Repositório](https://github.com/cod3rcursos/curso-react-redux)

## Fundamentos React

```
npm install -g create-react-app 
```

Este comando vai instalar uma forma mais simples que podemos utilizar para criar nossos projetos React.

<hr />

Para criar um novo projeto react basta digitar no terminal:

```
create-react-app <NOME DO PROJETO>
```

<hr/>

Ao rodar o comando devemos limpar a pasta SRC e verificando o **package.json** podemos notar que o comando instalou três dependências no nosso projeto.

A primeira depêndencia é o **React** que é o framework em si, a segunda é a ** react-dom** essa é a dependência que vamos utilizar para acessar ao DOM da aplicação, foi instalado também o **react-script** essa depenência não será utilizada pois ela é utilizada para gerar os scripts de build da aplicação, ele simplesmente é chamado nos scripts.

<hr/>

Necessariamente no início do arquivo precisamos importar o React para que possamos jogar os componentes na página.

<hr/>

## JSX

O JSX é uma sintaxe que parece HTML porém é Javascript, mas com o React este tipo de arquivo é convertido para HTML, sendo assim, com JSX é possível criar a possibilidade de trabalhar com HTML dentro dos componentes.

No build da aplicação este formato é transformado em Javascript, para você utilizar o JSX você precisa importar o React no topo do seu arquivo.


