import React from "react";
import Input1 from "../components/input/Input";
import Button from "../components/button/Button";

interface LoginProps {
  title: string;
}

const Login: React.FC<LoginProps> = ({ title }) => {
  return (
    <React.Fragment>
      <div className="caixa">
        <h1>{title}</h1>
        <div>
          <Input1 placeholder="Email" type="email" />
        </div>
        <div>
          <Input1 placeholder="Senha" type="password" />
        </div>
        <div>
          <Button text="Login" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
