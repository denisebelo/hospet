import Switch from "@material-ui/core/Switch";
import {
  Form,
  ContainerForm,
  ContainerPessoais,
  ContainerContato,
  ContainerEndereco,
  ContainerHost,
  SendButton,
} from "./style";

import little_cat_logo from "../../../Assets/img/projeto.png";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useHistory, Redirect, Link } from "react-router-dom";

import { useState, useEffect } from "react";

import api from "../../../Services/index";
import { MaskCellphone, MaskCep, MaskCPF } from "../../../Utils/masks";

const Register = () => {
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [cellphone, setCellphone] = useState("");

  const schema = yup.object().shape({
    email: yup.string().email("Email Inválido!").required("Campo Obrigatório!"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 caracteres!")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial!"
      )
      .required("Campo Obrigatório!"),
    name: yup
      .string()
      .required("Campo Obrigatório!")
      .matches(
        /^[aA-zZ\s]+$/,
        "Apenas alfabetos são permitidos para este campo!"
      ),
    cellPhone: yup
      .string()
      .max(15)
      .matches(
        /[0-9]|[1-9][0-9]|[1-9][0-9][0-9]/,
        "Este campo aceita somente número!"
      )
      .required("Campo Obrigatório!"),
    numberHouse: yup
      .string()
      .matches(
        /[0-9]|[1-9][0-9]|[1-9][0-9][0-9]/,
        "Este campo aceita somente número!"
      )
      .required("Campo Obrigatório!"),
    cep: yup
      .string()
      .matches(
        /[0-9]|[1-9][0-9]|[1-9][0-9][0-9]/,
        "Este campo aceita somente número!"
      )
      .required("Campo Obrigatório!"),
    streetName: yup.string().required("Campo Obrigatório!"),
    age: yup
      .string()
      .matches(
        /[0-9]|[1-9][0-9]|[1-9][0-9][0-9]/,
        "Este campo aceita somente número!"
      )
      .required("Campo Obrigatório!"),
    city: yup.string().required("Campo Obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const handleMyForm = (data) => {
    // aprovado pelo Ivan
    if (data.host === "false") {
      data.host = false;
    }

    if (data.host === "true") {
      data.host = true;
    }

    api
      .post("/register", data)
      .then((response) => {
        localStorage.setItem("@capstone:token", JSON.stringify(response.data));
        reset();
        history.push("/login");
        toast.success(`Cadastro realizado com sucesso!`);
      })
      .catch((e) => {
        toast.error(`Erro a o se cadastrar`);
      });
  };

  return (
    <>
      <ContainerForm>
        <img alt="logo_little_cat" src={little_cat_logo} />
        <Form onSubmit={handleSubmit(handleMyForm)}>
          <h2>Dados Pessoais</h2>
          <ContainerPessoais>
            <input
              className="input input-name"
              type="text"
              placeholder="Nome"
              {...register("name")}
            />
            <span className="text-error">{errors.name?.message}</span>
            <div>
              <input
                className="input input-cpf"
                type="text"
                placeholder="CPF"
                {...register("cpf")}
                value={MaskCPF(cpf)}
                onChange={(e) => setCpf(e.target.value)}
              />
              <input
                className="input input-age"
                type="text"
                placeholder="Idade"
                {...register("age")}
              />
              <span className="text-error">{errors.cpf?.message}</span>
            </div>
            <span className="text-error">{errors.age?.message}</span>
          </ContainerPessoais>

          <h2>Cadastro</h2>
          <ContainerContato>
            <input
              className="input"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            <span className="text-error">{errors.email?.message}</span>
            <input
              className="input"
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            <span className="text-error">{errors.password?.message}</span>
            <input
              className="input"
              type="text"
              placeholder="Telefone com o DDD"
              {...register("cellPhone")}
              value={MaskCellphone(cellphone)}
              onChange={(e) => setCellphone(e.target.value)}
            />
            <span className="text-error">{errors.cellPhone?.message}</span>
          </ContainerContato>

          <h2>Endereço</h2>
          <ContainerEndereco>
            <div className="container-street">
              <input
                className="input input-street"
                type="text"
                placeholder="Nome da Rua"
                {...register("streetName")}
              />
              <span className="text-error">{errors.cellPhone?.message}</span>
              <input
                type="text"
                id="phone"
                className="input input-number"
                placeholder="N°"
                {...register("numberHouse")}
              />
              <span className="text-error">{errors.numberHouse?.message}</span>
            </div>
            <div className="container-state">
              <input
                className="input input-cep"
                type="text"
                placeholder="Cep"
                {...register("cep")}
                value={MaskCep(cep)}
                onChange={(e) => setCep(e.target.value)}
              />
              <span className="text-error">{errors.cep?.message}</span>
              <select
                className="selected input-state"
                name="estados-brasil"
                {...register("state")}
              >
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
              <input
                className="input input-city"
                type="text"
                placeholder="Cidade"
                {...register("city")}
              />
            </div>
          </ContainerEndereco>

          <h2>Anfitrião</h2>
          <ContainerHost>
            <div>
              <span>Deseja ser tornar um anfitrião??</span>
              <select className="selected" {...register("host")}>
                <option value={false}>Não</option>
                <option value={true}> Sim </option>
              </select>
            </div>
            <label className="host">Aceito Pets</label>
            <select className="selected host" {...register("acceptPets")}>
              <option value="5">Até 5kg</option>
              <option value="10">Até 10kg</option>
              <option value="25">Até 25kg</option>
              <option value="30">Até 30kg</option>
            </select>
            <h3 className="host">Descrição</h3>

            <textarea
              className="host"
              name="message"
              rows="10"
              cols="30"
              placeholder="Por que gostaria de ser um host???"
              {...register("description")}
            ></textarea>

            <input className="sozinho" value={false} {...register("accept")} />
            <input className="sozinho" value={[]} {...register("pets")} />
            <input className="sozinho" value={[]} {...register("services")} />
          </ContainerHost>
          <SendButton type="submit">Enviar</SendButton>
          <span className="sub-text">
            Já possui conta? Então faça o <Link to="/login">Login!</Link>
          </span>
        </Form>
      </ContainerForm>
    </>
  );
};

export default Register;
