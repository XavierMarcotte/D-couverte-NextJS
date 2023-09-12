import React from "react";

const Puissance = ({ calculPuissance }) => {
    console.log('rendu puissance');
    return(
        <button onClick={calculPuissance}>Calcul la puissance</button>
    )
}

//ici composant "pur"
export default React.memo(Puissance)