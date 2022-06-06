import React, { useState } from "react";
import { Form, Button, Input, notification } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { signIn } from "../../../api/user.js";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../api/constants";

import "./Login.scss"

export default function Login() {

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  
}

  const login = async(e) =>{
    e.preventDefault();
    console.log(inputs);
    const result = await signIn(inputs);

    if (result.message) {
      notification["error"]({
        message: result.message
      });
    } else {
      const {accessToken, refreshToken} = result;
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);

      notification["success"]({
        message: "Login correcto"
      });

      window.location.href = "/admin";
   }
   console.log(result);
  };

  return (
        <Form className="login-form" onSubmit={login} onChange={changeForm}>
          <Form.Item>
            <Input
             prefix={
              <UserOutlined />
            }
              type="email"
              name="email"
              placeholder="Correo electronico"
              className="login-form__input"
              value={inputs.email}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={
                <UserOutlined />
              }
              type="password"
              name="password"
              placeholder="Contraseña"
              className="login-form__input"
              value={inputs.password}
            />
          </Form.Item>
          <Form.Item>
            <Button onClick={login} htmlType="submit" className="login-form__button"  >
              Entrar 
            </Button>
            
          </Form.Item>
        </Form>
      );
};