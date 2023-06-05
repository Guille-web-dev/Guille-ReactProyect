import { useContext, useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { context } from "../provider";

function PaymentFormContent({ form, setForm, initialForm }) {
  // FUNCION DE ACTUALIZACION DE PRODUCTOS EN CARRITO EN CONTEXT
  const { setCartItem } = useContext(context);

  // HOOK PERSONALIZADO QUE CONTIENE FUNCIONES Y ESTADOS PARA LA GESTION DE FORMULARIO
  const { handleChange, handleBlur, handleSubmit,handleOnKeyDownLetter,handleOnKeyDownNumber, isChecked, error } = useForm(
    form,
    setForm,
    initialForm,
    setCartItem
  );

  const {
    cvc,
    cartNumber,
    name,
    month,
    year,
    identificationDocument,
    city,
    state,
    address,
  } = form;

  // ARRAY DE 12 NUMEROS PARA CREAR DE MANERA DINAMICA LAS OPTIONS DEL INPUT MONTH
  const arrayMonth = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div className="formContainer">
      <form className="row g-3" onSubmit={(e) => handleSubmit(e)}>
        <div className="col-md-6">
          <label htmlFor="inputName4" className="form-label">
            Nombre
          </label>
          <input
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            onKeyDown={(e) => handleOnKeyDownNumber(e)}
            name="name"
            value={name}
            type="text"
            className="form-control"
            id="inputName4"
            required
          />
          {error.name && <p className="errorText">{error.name}</p>}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputID" className="form-label">
            C.I
          </label>
          <input
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            onKeyDown={(e) => handleOnKeyDownLetter(e)}
            name="identificationDocument"
            value={identificationDocument}
            type="text"
            className="form-control"
            id="inputID"
            required
          />
          {error.identificationDocument && (
            <p className="errorText">{error.identificationDocument}</p>
          )}
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Direccion
          </label>
          <input
            name="address"
            onChange={(e) => handleChange(e)}
            value={address}
            type="text"
            className="form-control"
            id="inputAddress"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            Ciudad
          </label>
          <input
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            onKeyDown={(e) => handleOnKeyDownNumber(e)}
            type="text"
            name="city"
            value={city}
            className="form-control"
            id="inputCity"
            required
          />
          {error.city && <p className="errorText">{error.city}</p>}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputState" className="form-label">
            Estado
          </label>
          <input
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            onKeyDown={(e) => handleOnKeyDownNumber(e)}
            name="state"
            value={state}
            type="text"
            className="form-control"
            id="inputState"
            required
          />
          {error.state && <p className="errorText">{error.state}</p>}
        </div>
        <div className="col-12">
          <label htmlFor="inputCardNumber" className="form-label">
            Numero de tarjeta
          </label>
          <input
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            onKeyDown={(e) => handleOnKeyDownLetter(e)}
            name="cartNumber"
            value={cartNumber}
            type="text"
            className="form-control"
            id="inputCardNumber"
            placeholder="**** **** **** ****"
            maxLength={16}
            required
          />
          {error.cartNumber && <p className="errorText">{error.cartNumber}</p>}
        </div>
        <div className="dateForm">
          <div className="col-md-6">
            <div className="inputDateForm">
              <div>
                <label htmlFor="inputMonth" className="form-label">
                  MES
                </label>
                <input
                  onChange={(e) => handleChange(e)}
                  onBlur={(e) => handleBlur(e)}
                  onKeyDown={(e) => handleOnKeyDownLetter(e)}
                  value={month}
                  name="month"
                  className="form-control monthForm"
                  list="datalistOptions"
                  id="inputMonth"
                  placeholder="MM"
                  maxLength={2}
                  required
                />
                <datalist id="datalistOptions">
                  {arrayMonth.map((el) => (
                    <option key={el} value={el} />
                  ))}
                </datalist>
              </div>
              <div>
                <label htmlFor="inputMonth" className="form-label">
                  AÑO
                </label>
                <input
                  onChange={(e) => handleChange(e)}
                  onBlur={(e) => handleBlur(e)}
                  onKeyDown={(e) => handleOnKeyDownLetter(e)}
                  name="year"
                  value={year}
                  type="text"
                  className="form-control yearForm"
                  id="inputYear"
                  placeholder="YY"
                  maxLength={2}
                  required
                />
              </div>
              <p className="errorText">{error.year || error.month}</p>
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCVC" className="form-label">
              CVC
            </label>
            <input
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              onKeyDown={(e) => handleOnKeyDownLetter(e)}
              name="cvc"
              value={cvc}
              type="text"
              className="form-control cvcForm"
              id="inputCVC"
              placeholder="000"
              maxLength={3}
              required
            />
          {error.cvc && <p className="errorText">{error.cvc}</p>}
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
              onChange={(e) => handleChange(e)}
              required
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Acepto terminos y condiciones
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Pagar
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentFormContent;
