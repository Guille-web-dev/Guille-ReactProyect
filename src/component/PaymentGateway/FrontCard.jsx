import { useState, useEffect } from "react";

function FrontCard({ data }) {
  const {cartNumber,name,month,year} = data;

// ESTADOS PARA IMPRIMIR INFORMACION DEL USUARIO AL FRENTE DE LA TARJETA 
  const [numberData, setNumberData] = useState("0000 0000 0000 0000");
  const [nameData, setNameData] = useState(name);
  const [monthData, setMonthData] = useState(month);
  const [yearData, setYearData] = useState(year);

// EFFECT PARA ACTUALIZAR INFORMACION DE USUARIO AL FRENTE DE LA TARJETA
  useEffect(() => {
    cartNumber.length === 0
      ? setNumberData("0000 0000 0000 0000")
      : setNumberData(cartNumber.replace(/(.{4})/g, "$1 "));
    name.length === 0 ? setNameData("FULL NAME") : setNameData(name);
    month.length === 0 ? setMonthData("MM") : setMonthData(month);
    year.length === 0 ? setYearData("YY") : setYearData(year);
  }, [cartNumber, name, month, year]);

  return (
    <div className="cardFront">
      <div className="cardLogo">
        <div className="bankCard-redCircle"></div>
        <div className="bankCard-yellowCircle"></div>
      </div>
      <div className="detailsCardFront">
        <div className="cardNumber-container">
          <p>{numberData}</p>
        </div>
        <div className="nameData">
          <p>{nameData}</p>
          <div className="cardFrontData">
            {monthData}/{yearData}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontCard;
