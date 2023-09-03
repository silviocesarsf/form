import Button from "../../components/Button";
import Input from "../../components/Input";
import Wrapper from "../../components/Wrapper";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Hero from "../../assets/hero.svg";

const Login = () => {
  return (
    <Wrapper className="flex items-center justify-between">
      <div className="flex items-center justify-center w-full">
        <img src={Hero} alt="Hero" />
      </div>
      {/* Register col */}
      <div className="flex flex-col items-center justify-between min-h-screen w-[40%] bg-white py-7 px-[5rem] shadow-md">
        <h1 className="text-2xl">{"</>"}</h1>
        <div className="flex flex-col justify-center items-center gap-1">
          <h1 className="font-bold text-2xl">Bem vindo de volta !</h1>
          <p className="text-sm">Logue-se abaixo.</p>
        </div>
        <div className="space-y-3 w-full">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Senha" type="password" />
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <label htmlFor="" className="text-xs font-thin">
                Lembrar por 30 dias
              </label>
            </div>
            <a href="#" className="text-xs text-[#606060]">
              Esqueceu a senha ?
            </a>
          </div>
        </div>
        <div className="w-full space-y-4">
          <Button background="#242424" color="#fff">
            Login
          </Button>
          <Button color="#000">
            <FcGoogle />
            Login com Google
          </Button>
        </div>
        <div className="w-full text-xs flex items-center justify-center">
          <p className="font-thin">
            Você não tem uma conta ?{" "}
            <Link to={"/"} className="font-bold cursor-pointer">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
