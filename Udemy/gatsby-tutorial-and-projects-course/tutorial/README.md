# Anotações

## Instalar o Gatsby Cli Globalmente.

```shell
  npm install -g gatsby-cli
```

## Projeto em branco para iniciar um novo projeto

```shell
  gatsby new <project-name> https://github.com/gatsbyjs/gatsby-starter-hello-world

```

[List of Start Projects](https://www.gatsbyjs.org/starters/?s=hello&v=2)

## Rodar o Gatsby como develop

```shell
  gatsby develop
```

## Criando link entre páginas

```javascript
import React from 'react';
import { Link } from 'gatsby';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
        <li>
          <Link to="/products/">Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
```

## Utilizando o Styled Components

Precisa instalar um plugin.

[**gatsby-plugin-styled-components**](https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/?=styled-)

Depois de instalar um plugin precisa restartar o projeto.
