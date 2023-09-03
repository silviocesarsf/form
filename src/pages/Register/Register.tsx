import Wrapper from "../../components/Wrapper";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Hero from "../../assets/hero.svg";

import { useForm } from "react-hook-form";

type GetValuesProps = (value: {
  target: {
    name: string;
    value: string;
  };
}) => void;

type ValuesProps = {
  email: string;
  nome: string;
  data: Date;
  senha: string | number;
};

const Register = ({}) => {
  const [values, setValues] = useState<ValuesProps>();

  const getValues: GetValuesProps = (value) => {
    setValues((prevValue: any) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const postValues = () => {
    axios
      .post("http://localhost:3001/post", {
        email: values.email,
        nome: values.nome,
        data: values.data,
        senha: values.senha,
      })
      .then((err) => {
        console.log(err);
      });
  };

  console.log(values);

  return (
    <Wrapper className="flex items-center justify-between">
      {/* Hero */}
      <div className="flex items-center justify-center w-full">
        <img src={Hero} alt="Hero" />
      </div>
      {/* Register col */}
      <div className="flex flex-col items-center justify-between min-h-screen w-[40%] bg-white py-7 px-[5rem] shadow-md">
        <h1 className="text-2xl">{"</>"}</h1>
        <div className="flex flex-col justify-center items-center gap-1">
          <h1 className="font-bold text-2xl">Bem vindo !</h1>
          <p className="text-sm">Registre-se abaixo.</p>
        </div>
        <form className="space-y-3 w-full">
          <Input
            onChange={getValues}
            name="email"
            placeholder="Email"
            type="email"
          />
          <Input
            onChange={getValues}
            name="nome"
            placeholder="Nome completo"
            type="text"
          />
          <Input onChange={getValues} name="data" type="date" />
          <Input
            onChange={getValues}
            name="senha"
            placeholder="Senha"
            type="password"
          />
        </form>
        <div className="w-full space-y-4">
          <Button onClick={postValues} background="#242424" color="#fff">
            Registrar
          </Button>
          <Button color="#000">
            <FcGoogle />
            Registro com Google
          </Button>
        </div>
        <div className="w-full text-xs flex items-center justify-center">
          <p className="font-thin">
            Você já tem uma conta ?{" "}
            <Link to={"/login"} className="font-bold cursor-pointer">
              Logue
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;
