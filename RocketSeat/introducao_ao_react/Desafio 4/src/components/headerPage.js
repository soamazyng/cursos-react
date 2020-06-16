import React from 'react'

import logoFacebook from '../assets/logo-facebook.svg'

function HeaderPage(){
  return (
    <div class="header">
      <div class="logo-facebook">
        <img src={logoFacebook} />
      </div>
      <div class="meu-perfil">
        Meu Perfil
      </div>
    </div>  
  )
}

export default HeaderPage;