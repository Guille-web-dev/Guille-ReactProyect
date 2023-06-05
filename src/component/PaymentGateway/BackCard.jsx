import { useState,useEffect } from "react";

function BackCard({cvc}) {
  
  // ESTADO PARA IMPRIMIR EL CVC EN LA PARTE DE ATRAS DE LA TARJETA 
  const [cvcData, setCvcData] = useState(cvc);
 
  // EFFECT PARA ACTUALIZAR CVC DE LA TARJETA
  useEffect(() => {
    cvc.length === 0 ? setCvcData("000") : setCvcData(cvc);
  }, [cvc]);

  return (
    <div className="backCard">
      <div className="blackStripe"> </div>
      <div  className="containerCvc">
        <p>{cvcData}</p>
      </div>
      <div className="paddingLines">
        <p>--------------------</p>
        <p>----------------</p>
        <p>--------------------</p>
      </div>
    </div>
  );
}

export default BackCard;
