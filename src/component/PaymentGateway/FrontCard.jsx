import { useState, useEffect } from "react";

function FrontCard({ data }) {
  const {cartNumber,name,month,year} = data;

  const [numberData, setNumberData] = useState("0000 0000 0000 0000");
  const [nameData, setNameData] = useState(name);
  const [monthData, setMonthData] = useState(month);
  const [yearData, setYearData] = useState(year);

  useEffect(() => {
    cartNumber[0] === ""
      ? setNumberData("0000 0000 0000 0000")
      : setNumberData(cartNumber);
    name[0] === "" ? setNameData("Full name") : setNameData(name);
    month[0] === "" ? setMonthData("MM") : setMonthData(month);
    year[0] === "" ? setYearData("YY") : setYearData(year);
  }, [cartNumber, name, month, year]);

  return (
    <div className="cardFront">
      <div className="cardLogo">
        <div className="bankCard-redCircle"></div>
        <div className="bankCard-yellowCircle"></div>
      </div>
      <div className="detailsCardFront">
        <div className="cardNumber-container">
          <p>{numberData || "0000 0000 0000 0000"}</p>
        </div>
        <div className="nameData">
          <p>{nameData || "Full name"}</p>
          <div className="cardFrontData">
            {monthData || "MM"}/{yearData || "YY"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontCard;
