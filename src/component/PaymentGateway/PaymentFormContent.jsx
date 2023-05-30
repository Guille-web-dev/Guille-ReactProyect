import { useForm } from "../hooks/useForm";

function PaymentFormContent({form,setForm}) {
  const { handleChange, handleSubmit, handleBlur, error } = useForm(form,setForm);
  const { cvc, cartNumber, name, month, year, identificationDocument } = form;
  
  return (
    <div className="formContainer">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputName4" className="form-label">
            Nombre
          </label>
          <input
            onChange={(e) => handleChange(e)}
            name="name"
            value={name}
            type="text"
            className="form-control"
            id="inputName4"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputID" className="form-label">
            Documento de identificacion
          </label>
          <input
            type="text"
            name="identificationDocument"
            onChange={handleChange}
            value={identificationDocument}
            className="form-control"
            id="inputID"
            onBlur={(e) => handleBlur(e)}
            required
          />
          {error.identificationDocument && <p>{error.identificationDocument}</p> }
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Direccion
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Apartment, studio, or floor"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            Ciudad
          </label>
          <input type="text" className="form-control" id="inputCity" required />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputState" className="form-label">
            Estado
          </label>
          <input
            type="text"
            className="form-control"
            id="inputState"
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputCardNumber" className="form-label">
            Numero de tarjeta
          </label>
          <input
            onChange={(e) => handleChange(e)}
            name="cartNumber"
            value={cartNumber}
            type="text"
            className="form-control"
            id="inputCardNumber"
            placeholder="**** **** **** ****"
            required
          />
        </div>
        <div className="row col-12 dateForm">
          <div className="col-md-6">
            <label htmlFor="inputMonth" className="form-label">
              EXP
            </label>
            <div className="inputDateForm col-md-6">
              <input
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                name="month"
                value={month}
                type="text"
                className="form-control monthForm"
                id="inputMonth"
                placeholder="MM"
                maxLength={2}
                required
              />
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
              {error.year || error.month }
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCVC" className="form-label">
              CVC
            </label>
            <input
              onChange={(e) => handleChange(e)}
              name="cvc"
              value={cvc}
              type="text"
              className="form-control cvcForm"
              id="inputCVC"
              placeholder="000"
              maxLength={3}
              required
            />
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
