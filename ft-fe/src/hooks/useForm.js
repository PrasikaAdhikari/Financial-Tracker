import { useState } from "react";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  return {
    form,
    setForm,
    handleOnChange: (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    },
  };
};

export default useForm;
