import { useForm } from "../hooks/useForm";

function PaymentFormContent({ form, setForm }) {
  const { handleChange, handleSubmit, handleBlur, error } = useForm(
    form,
    setForm
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

  const arrayMonth = Array.from({ length: 12 }, (_, index) => index + 1);
  
  return (
    <div className="formContainer">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputName4" className="form-label">
            Nombre
          </label>
          <input
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            name="name"
            value={name}
            type="text"
            className="form-control"
            id="inputName4"
            required
          />
          {error.name && <p>{error.name}</p>}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputID" className="form-label">
            Documento de identificacion
          </label>
          <input
            type="text"
            name="identificationDocument"
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            value={identificationDocument}
            className="form-control"
            id="inputID"
            required
          />
          {error.identificationDocument && (
            <p>{error.identificationDocument}</p>
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
            type="text"
            name="city"
            value={city}
            className="form-control"
            id="inputCity"
            required
          />
          {error.city && <p>{error.city}</p>}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputState" className="form-label">
            Estado
          </label>
          <input
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            name="state"
            value={state}
            type="text"
            className="form-control"
            id="inputState"
            required
          />
          {error.state && <p>{error.state}</p>}
        </div>
        <div className="col-12">
          <label htmlFor="inputCardNumber" className="form-label">
            Numero de tarjeta
          </label>
          <input
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
            name="cartNumber"
            value={cartNumber}
            type="text"
            className="form-control"
            id="inputCardNumber"
            placeholder="**** **** **** ****"
            maxLength={16}
            required
          />
          {error.cartNumber && <p>{error.cartNumber}</p>}
        </div>
        <div className="row col-12 dateForm">
          <div className="col-md-6">
            <label htmlFor="inputMonth" className="form-label">
              EXP
            </label>
            <div className="inputDateForm col-md-6">
              <label htmlFor="inputMonth"></label>
              <input
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
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
              <p>/</p>
              <input
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
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
            <p>{error.year || error.month}</p>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCVC" className="form-label">
              CVC
            </label>
            <input
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              name="cvc"
              value={cvc}
              type="text"
              className="form-control cvcForm"
              id="inputCVC"
              placeholder="000"
              maxLength={3}
              required
            />
            {error.cvc && <p>{error.cvc}</p>}
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
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
