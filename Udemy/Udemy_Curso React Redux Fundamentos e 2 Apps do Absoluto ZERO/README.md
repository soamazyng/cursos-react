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

<hr />

## Hooks

Antes da versão 16.8 do React não era possível alterar o estado do componente a partir de componentes funcionais, desta forma era necessário utilizar componentes baseado em classe.

Agora com a criação dos Hooks é possível um componentes funcional fazer alterações de estados utilizando o **useState**. 

Quando utilizar o useState você deve desestruturar o que está retornando no useState, pois a função useState retorna um array.

O primeiro índice deste array é a **variável** que será utilizada, já o **segundo é a função**.

O que colocar dentro do setState vai ser definido como default para a variável.

``` jsx
 const [contador, setContador] = useState(100)

<button 
    onClick={() => setContador(contador - 1)}>
    Dec
</button>
```

**useEffect**

Em uma componente funcional também não era possível saber quando o componente foi montado ou quando o componente foi alterado, mas agora podemos utilizar o **useEffect** para criar ganchos nestes momentos de vida do componente.

``` jsx
const [parOuImpar, setParOuImpar] = useState('Par')

useEffect(() => {
    contador % 2 === 0 ? setParOuImpar('Par') : 
        setParOuImpar('Impar')
})
```

O useEffect vai sempre ser chamado quando alterarmos a variável **contador**

## Chamando uma função no onClick do componente

Toda vez que eu quero chamar uma função no onClick do componente e **não queira** passar nada diferente do próprio evento, a sintaxe é esta:

``` jsx
<IconButton style='success' icon='check' hide={todo.done} onClick={props.handleMarkAsDone}></IconButton>
```

Agora, se eu quero passar algo diferente do evento eu preciso criar uma arrow function para passar o parâmetro

``` jsx
<IconButton style='success' icon='check' hide={todo.done} onClick={() => props.handleMarkAsDone(todo)}></IconButton>
```

**Obs.:** Os dois componentes acima estão invocando a função que está dentro do componente pai, o componente pai por sua vez envia via **props** a função que está sendo chamada no filho.

``` jsx

//componente pai

//função dentro do pai
handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
    .then(() => this.refresh(this.state.description))
}

//componente de list que contém os componentes iconButton
<TodoList           
    handleMarkAsDone={this.handleMarkAsDone}                    
/>
```

<hr>











