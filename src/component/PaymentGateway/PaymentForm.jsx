import { useState } from "react";
import BankCard from "./BankCard";
import PaymentFormContent from "./PaymentFormContent";
import "./paymentForm.css";

// OBJETO PARA EL ESTADO INICIAL DEL FORMULARIO
const initialForm = {
  cartNumber: "",
  name: "",
  month: "",
  year: "",
  cvc: "",
  identificationDocument:"",
  city:"",
  state:"",
  address:"",
};

function PaymentForm() {
  
  // ESTADO DE FORMULARIO
  const [form, setForm] = useState(initialForm);

  document.title = "GuilleDev - pasarela de pago";
  return (
    <div className="paymentForm">
      <div className="paymentFormContent-container">
        <PaymentFormContent form ={form} setForm={setForm} initialForm={initialForm}/>
      </div>
      <div className="bankCardContainer">
        <BankCard form ={form}/>
      </div>
    </div>
  );
}

export default PaymentForm;
