import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import api from "../../../Services/index";
import { useUserInfo } from "../../../Providers/infoProvider";
import { ContainerForm } from "./style";
import { MaskMoney } from "../../../Utils/masks";
import { useState } from "react";

const RegisterHostInfo = () => {
  const [maskMoney, setMaskMoney] = useState("");
  const { user, setUser } = useUserInfo();
  const token = JSON.parse(localStorage.getItem("@capstone:token"));
  const schema = yup.object().shape({
    price: yup.string().required("Campo Obrigatório"),
    sleepInBedAllowed: yup.string().required("Campo Obrigatorio"),
    howManyPets: yup
      .string()
      .required("Campo Obrigatorio")
      .matches(
        /[0-9]|[1-9][0-9]|[1-9][0-9][0-9]/,
        "Este campo aceita somente número!"
      ),
    haveDogs: yup.string().required("Campo Obrigatorio"),
    haveCats: yup.string().required("Campo Obrigatorio"),
    haveChildren: yup.string().required("Campo Obrigatorio"),
    smokers: yup.string().required("Campo Obrigatorio"),
    typeHouse: yup.string().required("Campo Obrigatório"),
    yard: yup.string().required("Campo Obrigatório"),
    yardSize: yup.string().required("Campo Obrigatorio"),
    videoCall: yup.string().required("Campo Obrigarório"),
    petSizeAllowed: yup.string().required("Campo Obrigatorio"),
    castratedPetsAllowed: yup.string().required("Campo Obrigatorio"),
    especialPetsAllowed: yup.string().required("Campo Obrigatorio"),
    oralPills: yup.string().required("Campo Obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const handleHostInfoForm = (data) => {
    api
      .patch(
        `/users/${user.id}`,
        { details: data },
        {
          headers: { Authorization: `Bearer ${token.accessToken}` },
        }
      )

      .then((response) => {
        toast.success(`Informações salvas com sucesso!`);
        reset();
      })
      .catch((err) => {
        toast.error(`Erro ao salvar as informações!`);
      });
  };
  return (
    <>
      <ContainerForm onSubmit={handleSubmit(handleHostInfoForm)}>
        <h2>Informações Adicionais:</h2>
        <div>
          <label className="price">Valor da hospedagem (diária):</label>
          <input
            className="price"
            type="text"
            placeholder="R$ 0,00"
            {...register("price")}
            value={MaskMoney(maskMoney)}
            onChange={(e) => setMaskMoney(e.target.value)}
          />
          <span className="text-error">{errors.price?.message}</span>
        </div>
        <div>
          <label className="select-allowed-in-bed">
            O pet pode dormir na cama?
          </label>
          <select className="allowed-in-bed" {...register("sleepInBedAllowed")}>
            <option value="">Selecionar</option>
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
          <span className="text-error">
            {errors.sleepInBedAllowed?.message}
          </span>
        </div>
        <div>
          <label className="howManyPets">Já possui quantos hóspedes?</label>
          <select className="howManyPets" {...register("howManyPets")}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>

          <span className="text-error">{errors.howManyPets?.message}</span>
        </div>
        <div>
          <label className="haveDogs">Possui cachorros próprios?</label>
          <select className="haveDogs" {...register("haveDogs")}>
            <option value="">Selecionar</option>
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
          <span className="text-error">{errors.haveDogs?.message}</span>
        </div>
        <div>
          <label className="haveCats">Possui gatos próprios?</label>
          <select className="haveCats" {...register("haveCats")}>
            <option value="">Selecionar</option>
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
          <span className="text-error">{errors.haveCats?.message}</span>
        </div>
        <div>
          <label className="haveChildren">Crianças com menos de 15 anos?</label>
          <select className="haveChildren" {...register("haveChildren")}>
            <option value="">Selecionar</option>
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
          <span className="text-error">{errors.haveChildren?.message}</span>
        </div>
        <div>
          <label className="smokers">Fumantes no local?</label>
          <select className="smokers" {...register("smokers")}>
            <option value="">Selecionar</option>
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
          <span className="text-error">{errors.smokers?.message}</span>
        </div>
        <div>
          <label className="typeHouse">Qual o tipo da sua residência?</label>
          <select className="typeHouse" {...register("typeHouse")}>
            <option value="">Selecionar</option>
            <option value="apartment">Apartamento</option>
            <option value="house">Casa</option>
          </select>
          <span className="text-error">{errors.typeHouse?.message}</span>
        </div>
        <div>
          <label className="yard">Possui quintal/patio?</label>
          <select className="yard" {...register("yard")}>
            <option value="">Selecionar</option>
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
          <span className="text-error">{errors.yard?.message}</span>
        </div>
        <div>
          <label className="yardSize">Qual o tamanho do quintal/patio?</label>
          <select className="yardSize" {...register("yardSize")}>
            <option value="">Selecionar</option>
            <option value="small">Pequeno</option>
            <option value="medium">Médio</option>
            <option value="large">Grande</option>
          </select>
          <span className="text-error">{errors.yardSize?.message}</span>
        </div>
        <div>
          <label className="videoCall">
            Realiza videochamadas para o dono acompanhar o pet?
          </label>
          <select className="videoCall" {...register("videoCall")}>
            <option value="">Selecionar</option>
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
          <span className="text-error">{errors.videoCall?.message}</span>
        </div>
        <div>
          <label className="petSizeAllowed">
            Qual o tamanho de pet aceito?
          </label>
          <select className="petSizeAllowed" {...register("petSizeAllowed")}>
            <option value="">Selecionar</option>
            <option value="small">Pequeno</option>
            <option value="medium">Médio</option>
            <option value="large">Grande</option>
            <option value="all">Todos</option>
          </select>
          <span className="text-error">{errors.petSizeAllowed?.message}</span>
        </div>
        <div>
          <label className="castratedPetsAllowed">
            Aceita pet não castrado?
          </label>
          <select
            className="castratedPetsAllowed"
            {...register("castratedPetsAllowed")}
          >
            <option value="">Selecionar</option>
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
          <span className="text-error">
            {errors.castratedPetsAllowed?.message}
          </span>
        </div>
        <div>
          <label className="especialPetsAllowed">Aceita pet especial?</label>
          <select
            className="especialPetsAllowed"
            {...register("especialPetsAllowed")}
          >
            <option value="">Selecionar</option>
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
          <span className="text-error">
            {errors.especialPetsAllowed?.message}
          </span>
        </div>
        <div>
          <label className="oralPills">Administra medicação oral?</label>
          <select className="oralPills" {...register("oralPills")}>
            <option value="">Selecionar</option>
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
          <span className="text-error">{errors.oralPills?.message}</span>
        </div>

        <div className="button">
          <button type="submit">Enviar</button>
        </div>
      </ContainerForm>
    </>
  );
};

export default RegisterHostInfo;
