import { useState } from "react";
import Swal from "sweetalert2";

const useForm = (form, setForm) => {
  const [error, setError] = useState({});

  const validateForm = (form) => {
    let error = {};
    let regex = /^[0-9]+$/;

    const { identificationDocument, cvc, month, year } = form;

    if (
      identificationDocument.length > 0 &&
      !regex.test(identificationDocument.trim())
    ) {
      error.identificationDocument = "Este campo solo acepta números";
    }
    if (month.length > 0 && !regex.test(month.trim())) {
      error.month = "Este campo solo acepta números";
    }
    if (year.length > 0 && !regex.test(year.trim())) {
      error.year = "Este campo solo acepta números";
    }
    if (cvc.length > 0 && !regex.test(cvc.trim())) {
      error.cvc = "Este campo solo acepta números";
    }
    return error;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "¡GRACIAS!",
      text: "Su compra fue realizada con exito!",
    });
  };
  const handleBlur = (e) => {
    handleChange(e);
    setError(validateForm(form));
  };

  return {
    error,
    handleSubmit,
    handleChange,
    handleBlur,
  };
};

export { useForm };
