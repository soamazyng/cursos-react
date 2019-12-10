import React from 'react'
import Filho from './Filho'

export default props => {

    const notificarSaidaDoFilho = lugar => alert(`Lberado para ${lugar}`)

    return(
        <div>
            <Filho notificarSaida={notificarSaidaDoFilho} />
        </div>
    )
}