import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const useForm = (form, setForm, initialForm, setCartItem) => {
  const [error, setError] = useState({});

// FUNCION PARA VALIDAR FORMULARIO

  const validateForm = (form) => {
    let error = {};
    const regexNumber = /^[0-9]+$/;
    const regexLetters = /^[a-zA-Z]+$/;

    const {
      identificationDocument,
      cvc,
      year,
      cartNumber,
      name,
      city,
      state,
      month,
    } = form;

    if (name.length > 0 && !regexLetters.test(name.trim())) {
      error.name = "Este campo solo acepta letras mayusculas o minusculas";
    }
    if (city.length > 0 && !regexLetters.test(city.trim())) {
      error.city = "Este campo solo acepta letras mayusculas o minusculas";
    }
    if (state.length > 0 && !regexLetters.test(state.trim())) {
      error.state = "Este campo solo acepta letras mayusculas o minusculas";
    }
    if (
      identificationDocument.length > 0 &&
      !regexNumber.test(identificationDocument.trim())
    ) {
      error.identificationDocument = "Este campo solo acepta números";
    }
    if (year.length > 0 && !regexNumber.test(year.trim())) {
      error.year = "Este campo solo acepta números";
    }
    if (month.length > 0 && !regexNumber.test(month.trim())) {
      error.month = "Este campo solo acepta números";
    }
    if (cvc.length > 0 && !regexNumber.test(cvc.trim())) {
      error.cvc = "Este campo solo acepta números";
    }
    if (cartNumber.length > 0 && !regexNumber.test(cartNumber.trim())) {
      error.cartNumber = "Este campo solo acepta números";
    }

    return error;
  };

// FUNCION HANDLE CHANGE DEL FORMULARIO

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

// FUNCION HANDLE SUBMIT DEL FORMULARIO

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateForm(form));
    if (Object.keys(error).length === 0) {
      setForm(initialForm);
      localStorage.setItem("newProducts", JSON.stringify([]));
      setCartItem([]);
      Swal.fire({
        icon: "success",
        title: "¡GRACIAS!",
        text: "Su compra fue realizada con exito!",
      });
    }
  };

// FUNCION HANDLE BLUR DEL FORMULARIO

  const handleBlur = (e) => {
    handleChange(e);
    setError(validateForm(form));
  };

// FUNCION HANDLE ONKEYDOWN PARA PREVENIR ENTRADA DE NUMEROS DESDE TECLADO

  const handleOnKeyDownNumber = (e) => {
    const key = e.key;
    /\d/.test(key) && e.preventDefault();
  };

// FUNCION HANDLE ONKEYDOWN PARA PREVENIR ENTRADA DE LETRAS DESDE TECLADO

  const handleOnKeyDownLetter = (e) => {
    const keyCode = e.keyCode || e.which; 
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 106 && keyCode <= 122)) {
      e.preventDefault();
    }
  };

  return {
    error,
    handleSubmit,
    handleChange,
    handleBlur,
    handleOnKeyDownLetter,
    handleOnKeyDownNumber,
  };
};

export { useForm };
