import { Form, ContainerForm } from "./style";
import dog from "../../Assets/img/dog.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import { useAuthentication } from "../../Providers/Authentication";
import { useUserInfo } from "../../Providers/infoProvider";
import api from "../../Services/index";

const Login = ({ authenticated }) => {
  const { setAuthenticated } = useAuthentication();
  const history = useHistory();
  const { updateInfo, user } = useUserInfo();

  if (authenticated && user.host === true) {
    history.push("/dashboardHost");
  }

  if (authenticated && user.host === false) {
    history.push("/dashboardClient");
  }

  const schema = yup.object().shape({
    email: yup.string().email("Email Inválido!").required("Campo Obrigatório!"),
    password: yup
      .string()
      .min(3, "Mínimo de 8 caracteres!")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial!"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const handleMyForm = (data) => {
    api.post("/login", data).then((response) => {
      localStorage.setItem("@capstone:token", JSON.stringify(response.data));

      setAuthenticated(true);
      updateInfo();

      const token = JSON.parse(localStorage.getItem("@capstone:token"));
      api
        .get(`/users?email=${data.email}`, {
          headers: { Authorization: `Bearer ${token.accessToken}` },
        })
        .then((res) => {
          toast.success("Seja bem vindo!");
          if (res.data[0].admin) {
            history.push("/dashboardAdmin");
          }
          if (res.data[0].host === true) {
            history.push("/dashboardHost");
          } else {
            history.push("/dashboardClient");
          }
          reset();
        });
    });
  };

  return (
    <ContainerForm>
      <img alt="dog_logo" src={dog} />
      <Form onSubmit={handleSubmit(handleMyForm)}>
        <div>
          <label>Email: </label>
          <input
            className="input"
            type="email"
            placeholder="Digite seu Email..."
            {...register("email")}
          />
          <span className="text-error">{errors.email?.message}</span>
        </div>
        <div>
          <label>Senha: </label>
          <input
            className="input"
            type="password"
            placeholder="DIgite sua Senha..."
            {...register("password")}
          />
          <span className="text-error">{errors.password?.message}</span>
        </div>
        <button type="submit">Login</button>
      </Form>
      <span>
        Não tenho uma conta <Link to="/register">Crie uma conta!</Link>
      </span>
    </ContainerForm>
  );
};

export default Login;
