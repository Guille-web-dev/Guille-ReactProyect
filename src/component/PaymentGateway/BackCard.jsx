import { useState,useEffect } from "react";

function BackCard({cvc}) {
  
  const [cvcData, setCvcData] = useState(cvc);
 
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
