import React, { useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { signUpApi } from "../../../api/user.js";
import "./Register.scss";
import {
  emailValidation,
  minLengthValidation,
} from "../../../validations/FormValidations";

export default function RegisterForm() {
  /* Validar valor - estado inicial de los campos input vacíos */
  const [inputs, setInputs] = useState({
    name_user:"",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });

  const [formValid, setFormValid] = useState({
    name_user: false,
    lastname: false,
    email: false,
    password: false,
    repeatPassword: false,
    privacyPolicy: false,
  });
  
/* Se valida si el usuario chekeo el privacyPolicy*/
  const changeForm = (e) => {
    if (e.target.name === "privacyPolicy") {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.checked,
      });
    } else {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
    }
  };

  const inputValidation = (e) => {
    console.log(formValid)
    const { type, name } = e.target;

    if (type === "text") {
      setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 3) });
    }
    if (type === "email") {
      setFormValid({ ...formValid, [name]: emailValidation(e.target) });
    }
    if (type === "password") {
      setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 6) });
    }
    if (type === "checkbox") {
      setFormValid({ ...formValid, [name]: e.target.checked });
    }
  };

  const register = async(e) =>{
    e.preventDefault();
    console.log("Estoy en register");
    const name_user = inputs.name_user;
    const lastname = inputs.lastname;
    const emailVal = inputs.email;
    const passwordVal = inputs.password;
    const repeatPasswordVal = inputs.repeatPassword;
    const privacyPolicyVal = inputs.privacyPolicy;

    if (!name_user || !lastname ||!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal) {
      notification["error"]({
       message: "Todos los campos son obligatorios",
     });
     console.log("Vacíos");
   } else {
     if (passwordVal !== repeatPasswordVal) {
        notification["error"]({
         message: "Las contraseñas tienen que ser iguales.",
       });
       console.log("Son diferentes");
     } else {
       const result = await signUpApi(inputs);
       console.log(result)
       if (!result.user_creado) {
           notification["error"]({
           message: result.message,
         });
       } else {
           notification["success"]({
           message: result.message,
         });
         resetForm();
       }
     }
   }
 };

 const resetForm = () => {
  const inputs = document.getElementsByTagName("input");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("success");
    inputs[i].classList.remove("error");
  }

  setInputs({
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });

  setFormValid({
    email: false,
    password: false,
    repeatPassword: false,
    privacyPolicy: false,
  });
};

  return (
    <Form className="register-form" onSubmit={register} onChange={changeForm}>
      {/* Nombre */}
      <Form.Item>
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          type="text"
          name="name_user"
          placeholder="Nombre(s)"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.name_user}
        />
      </Form.Item>
      {/* Apellidos */}
      <Form.Item>
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          type="text"
          name="lastname"
          placeholder="Apellido(s)"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.lastname}
        />
      </Form.Item>
      {/* Correo electrónico */}
      <Form.Item>
      <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="email"
          name="email"
          placeholder="Correo electronico"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.email}
        />
      </Form.Item>
      {/* Password */}
      <Form.Item>
      <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="password"
          placeholder="Contraseña"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.password}
        />
      </Form.Item>
      {/* Repeat password */}
      <Form.Item>
      <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="repeatPassword"
          placeholder="Repetir contraseña"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.repeatPassword}
        />
      </Form.Item>
      {/* Checkbox de confirmación */}
      <Form.Item>
        <Checkbox
          name="privacyPolicy"
          onChange={inputValidation}
          checked={inputs.privacyPolicy}
        >
          He leído y acepto la política de privacidad.
        </Checkbox>
      </Form.Item>
      <Form.Item>
      <Button onClick={register} className="register-form__button">
          Crear cuenta
        </Button>
      </Form.Item>
    </Form>
  );

}