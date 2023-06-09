import { useContext, useEffect, useState } from "react";
import { context } from "../provider";
import { Link } from "react-router-dom";

function TotalToPay() {

  // EXTRAYENDO DEL CONTEXT FUNCIONES Y ESTADOS PARA GESTIONAR EL CAMBIO DE MONEDA
  const { currencyConverter, converter, handleConverter } = useContext(context);

  return (
    <div className="totalPayInfoContainer">
      <p>$ Total </p>
      <div className="paymentTypeDetails">
        <p>¿En que moneda quieres pagar?</p>
        <div className="paymentButtonsContainer">
          <button
            onClick={() => handleConverter(false)}
            className={!converter ? "buttonPesos" : "buttonPending"}
          >
            $ - Pesos
          </button>
          <button
            onClick={() => handleConverter(true)}
            className={converter ? "buttonPesos" : "buttonPending"}
          >
            USD - Dólares
          </button>
        </div>
        <div className="textOfTheTotalToPay">
          {converter ? `USD ${currencyConverter}` : `$${currencyConverter}`}
        </div>
        <div className="freeShippingText">¡Tienes ENVIO GRATIS!</div>
      </div>
      <Link to="/Pago" className="paymentButtonContainer link">
        <button className="paymentButton">
          Pagar
          <img src="arrow-right-circle.svg" alt="flecha" />
        </button>
      </Link>
    </div>
  );
}

export default TotalToPay;
