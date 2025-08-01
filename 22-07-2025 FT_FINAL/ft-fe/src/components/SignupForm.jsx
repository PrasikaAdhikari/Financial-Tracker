import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "./CustomInput";
import axios from "axios";
import { postUser } from "../utils/axiosHelper";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";

const SignupForm = () => {
  const navigate = useNavigate();
  let initialState = {
    username: "",
    email: "",
    password: "",
  };

  console.log(useState(0));

  const { form, setForm, handleOnChange } = useForm(initialState);

  // const [form, setForm] = useState(initialState);

  // const handleOnChange = (event) => {
  //   let tempForm = { ...form };
  //   tempForm[event.target.name] = event.target.value;

  //   setForm(tempForm);

  //   setForm({
  //     ...form,
  //     [event.target.name]: event.target.value,
  //   });
  // };
  // const [customValue, setCustomValue] = useState("");

  let inputFields = [
    {
      id: "name",
      label: "Name",
      name: "username",
      type: "text",
      placeholder: "Enter Name",
      value: form.username,
    },
    {
      id: "email",
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      value: form.email,
    },
    {
      id: "password",
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      value: form.password,
    },

    {
      id: "cpassword",
      label: "Confirm",
      name: "cpassword",
      type: "password",
      placeholder: "Confirm Password",
    },
  ];

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    alert("Form submitted");

    // make a create user post request
    // axios call
    // {username, email, password}

    if (form.password != form.cpassword) {
      toast.error("PASSWORD MISMATCH", {
        position: "bottom-center",
        theme: "dark",
      });
    } else {
      let data = await postUser(form);

      console.log("response from post user", data);

      // if success go to login form
      // else do nothing
      if (data.status) {
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    }
  };

  return (
    <div className="border border-white border-lg p-5 rounded rounded-5">
      <h1>Signup Form</h1>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        {inputFields.map((item) => {
          return <CustomInput {...item} onChange={handleOnChange} />;
        })}

        {/* <input
          type="text"
          name="custom"
          value={customValue}
          onChange={handleOnChange}
        /> */}

        {/* <CustomInput
          id="test"
          label={"CUSTOM LABEL"}
          name="custom"
          type={"date"}
          placeholder={"Custo placeholder"}
        /> */}

        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
 */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignupForm;
