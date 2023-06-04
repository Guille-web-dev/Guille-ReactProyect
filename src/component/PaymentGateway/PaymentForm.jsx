import { useState } from "react";
import BankCard from "./BankCard";
import PaymentFormContent from "./PaymentFormContent";
import "./paymentForm.css";

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
