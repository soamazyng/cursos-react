import React from 'react';
import PropTypes from 'prop-types';

function TechItem(props){
  return(
    <li>
    {props.tech} 
      <button 
      onClick={props.onDelete} 
      type="button">
        X
      </button>
  </li>
  )
}

// Default props é 
// definida para você setar um 
// conteúdo default para o seu componente.
TechItem.defaultProps = {
  tech: 'Padrão'
}

// podemos validar o tipo de props que estamos recebendo
// também conseguimos marcar se a prop é obrigatória
TechItem.propTypes = {
  tech: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default TechItem;