module.exports = {
  presets: [
    "@babel/preset-env", // responsavel por alterar as propriedades do javascript
    "@babel/preset-react" // compila o jsx
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties' // utilizado para não precisar criar o state dentro do contructon
  ]
}