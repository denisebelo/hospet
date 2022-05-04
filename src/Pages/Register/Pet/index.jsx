import {
  Form,
  ContainerRegisterPet,
  ContainerInfoPet,
  SendButton,
  ContainerMoreInfo,
  ContainerIllnessPet,
  ContainerAllergyPet,
  ContainerSickAndAllergyPet,
  ContainerCommentsPet,
  ContainerImage,
  ContainerError,
} from "./style";

import little_cat_logo from "../../../Assets/img/projeto.png";
import little_dog_logo from "../../../Assets/img/dog2.png";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import api from "../../../Services/index";
import toast from "react-hot-toast";
import { usePets } from "../../../Providers/PetsProviders";
import { useUserInfo } from "../../../Providers/infoProvider";
import { useEffect } from "react";

export const RegisterPet = () => {
  const { user } = useUserInfo();
  const { addPet, setId, setPets, pets } = usePets();
  const history = useHistory();

  const schema = yup.object().shape({
    petName: yup
      .string()
      .required("Campo Obrigatório!")
      .matches(
        /^[aA-zZ\s]+$/,
        "Apenas alfabetos são permitidos para este campo!"
      ),
    petBreed: yup
      .string()
      .required("Campo Obrigatório!")
      .matches(
        /^[aA-zZ\s]+$/,
        "Apenas alfabetos são permitidos para este campo!"
      ),
    petSpecies: yup
      .string()
      .required("Campo Obrigatório!")
      .matches(
        /^[aA-zZ\s]+$/,
        "Apenas alfabetos são permitidos para este campo!"
      ),
    petAge: yup
      .string()
      .matches(
        /[0-9]|[1-9][0-9]|[1-9][0-9][0-9]/,
        "Este campo aceita somente número!"
      )
      .required("Campo Obrigatório!"),
    petGender: yup.string().required("Campo Obrigatório!"),
    petFood: yup.string().required("Campo Obrigatório!"),
    petIsCastrated: yup.string().required("Campo obrigatório!"),
    petHaveToy: yup.string().required("Campo obrigatório!"),
    petTheFlu: yup.string().required("Campo obrigatório!"),
    petOtite: yup.string().required("Campo obrigatório!"),
    petDepression: yup.string().required("Campo obrigatório!"),
    petAllergyFood: yup.string().required("Campo obrigatório!"),
    petAllergyInsect: yup.string().required("Campo obrigatório!"),
    petAllergyChemistry: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const token = JSON.parse(localStorage.getItem("@capstone:token"));

  const userId = jwt_decode(token.accessToken);

  console.log(parseInt(userId.sub));

  useEffect(() => {
    setId(user.id);
    setPets(user.pets);
  }, []);

  const handleMyForm = (data) => {
    addPet(data);
  };

  return (
    <ContainerRegisterPet>
      <ContainerImage>
        <img alt="logo_little_cat" src={little_cat_logo} />
        <img alt="logo_little_dog" src={little_dog_logo} />
      </ContainerImage>
      <Form onSubmit={handleSubmit(handleMyForm)}>
        <h2>Cadastro de Pet</h2>
        <ContainerInfoPet>
          <ContainerError>
            <input
              className="input input-name"
              type="text"
              placeholder="Nome"
              {...register("petName")}
            />
            <span className="text-error">{errors.petName?.message}</span>
          </ContainerError>
          <ContainerError>
            <input
              className="input input-raca"
              type="text"
              placeholder="Raça"
              {...register("petBreed")}
            />
            <span className="text-error">{errors.petBreed?.message}</span>
          </ContainerError>
          <ContainerError>
            <input
              className="input input-age"
              type="text"
              placeholder="Idade"
              {...register("petAge")}
            />
            <span className="text-error">{errors.petAge?.message}</span>
          </ContainerError>
          <ContainerError>
            <input
              className="input input-especie"
              type="text"
              placeholder="Especie"
              {...register("petSpecies")}
            />
            <span className="text-error">{errors.petSpecies?.message}</span>
          </ContainerError>
        </ContainerInfoPet>
        <ContainerMoreInfo>
          <ContainerError>
            <select
              className="selected select-gender"
              name="gender-pet"
              {...register("petGender")}
            >
              <option value="">Gênero</option>
              <option value="Macho">Macho</option>
              <option value="Fêmea">Fêmea</option>
            </select>
            <span className="text-error">{errors.petGender?.message}</span>
          </ContainerError>
          <ContainerError>
            <select
              className="selected select-castrated"
              name="is-castrated"
              {...register("petIsCastrated")}
            >
              <option value="">Castrado</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
            <span className="text-error">{errors.petIsCastrated?.message}</span>
          </ContainerError>
          <ContainerError>
            <select
              className="selected select-food"
              name="food-pet"
              {...register("petFood")}
            >
              <option value="">Alimentação</option>
              <option value="Sim">Com restrição</option>
              <option value="Não">Sem restrição</option>
            </select>
            <span className="text-error">{errors.petFood?.message}</span>
          </ContainerError>
          <ContainerError>
            <select
              className="selected select-toy"
              name="toy-pet"
              {...register("petHaveToy")}
            >
              <option value="">Tem brinquedo</option>
              <option value="Sim">Sim</option>
              <option value="No">Não</option>
            </select>
            <span className="text-error">{errors.petAge?.message}</span>
          </ContainerError>
        </ContainerMoreInfo>

        <ContainerSickAndAllergyPet>
          <ContainerIllnessPet>
            <div>
              <h5>Doenças:</h5>
            </div>
            <ContainerError>
              <select
                className="selected select-disease"
                name="theflu-pet"
                {...register("petTheFlu")}
              >
                <option value="">Gripe</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
              <span className="text-error">{errors.petTheFlu?.message}</span>
            </ContainerError>
            <ContainerError>
              <select
                className="selected select-disease"
                name="otite-pet"
                {...register("petOtite")}
              >
                <option value="">Otite</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
              <span className="text-error">{errors.petOtite?.message}</span>
            </ContainerError>
            <ContainerError>
              <select
                className="selected select-disease"
                name="depression-pet"
                {...register("petDepression")}
              >
                <option value="">Depressão</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
              <span className="text-error">
                {errors.petDepression?.message}
              </span>
            </ContainerError>
          </ContainerIllnessPet>
          <ContainerAllergyPet>
            <div>
              <h5>Alergia:</h5>
            </div>
            <ContainerError>
              <select
                className="selected select-disease"
                name="tofeed-pet"
                {...register("petAllergyFood")}
              >
                <option value="">Alimentar</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
              <span className="text-error">
                {errors.petAllergyFood?.message}
              </span>
            </ContainerError>
            <ContainerError>
              <select
                className="selected select-disease"
                name="insect-pet"
                {...register("petAllergyInsect")}
              >
                <option value="">Inseto</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
              <span className="text-error">
                {errors.petAllergyInsect?.message}
              </span>
            </ContainerError>
            <ContainerError>
              <select
                className="selected select-disease"
                name="chemistry-pet"
                {...register("petAllergyChemistry")}
              >
                <option value="">Química</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
              <span className="text-error">
                {errors.petAllergyChemistry?.message}
              </span>
            </ContainerError>
          </ContainerAllergyPet>
        </ContainerSickAndAllergyPet>
        <ContainerCommentsPet>
          <h5>Observações:</h5>
          <textarea
            name="message"
            rows="10"
            cols="30"
            placeholder="Alguma observação que faltou no formulario, como manias do pet, gostos, mimos, entre outros.."
            {...register("petComments")}
          ></textarea>
          <input
            className="sozinho"
            value={parseInt(userId.sub)}
            {...register("userId")}
          />
        </ContainerCommentsPet>
        <SendButton type="submit">Enviar</SendButton>
      </Form>
    </ContainerRegisterPet>
  );
};
