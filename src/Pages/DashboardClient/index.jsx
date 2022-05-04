import CardUserClient from "../../Components/CardUserClient";
import { MainDashboardClient } from "./style";
import dog from "../../Assets/img/dog.png";
import Header from "../../Components/Header";
import { States } from "./style";
import api from "../../Services/index";
import { useState, useEffect } from "react";
import { HostPlace, NoHosts } from "./style";
import { useHistory } from "react-router";
import { useUserInfo } from "../../Providers/infoProvider";
import { useServices } from "../../Providers/Services";

const DashboardClient = ({ authenticated }) => {
  const history = useHistory();
  const { user } = useUserInfo();
  const { setId } = useServices();

  if (authenticated === false) {
    history.push("/login");
  }

  if (user.host === true) {
    history.push("/dashboardHost");
  }

  const [hostByState, setHostByState] = useState([]);

  const list = [
    { value: "AC" },
    { value: "AL" },
    { value: "AP" },
    { value: "AM" },
    { value: "BA" },
    { value: "CE" },
    { value: "DF" },
    { value: "ES" },
    { value: "GO" },
    { value: "MA" },
    { value: "MT" },
    { value: "MS" },
    { value: "MG" },
    { value: "PA" },
    { value: "PB" },
    { value: "PR" },
    { value: "PE" },
    { value: "PI" },
    { value: "RJ" },
    { value: "RN" },
    { value: "RS" },
    { value: "RO" },
    { value: "RR" },
    { value: "SC" },
    { value: "SP" },
    { value: "SE" },
    { value: "TO" },
  ];

  useEffect(() => {
    setId(user.id);
  }, [user]);

  const getHostByState = (state) => {
    const token = JSON.parse(localStorage.getItem("@capstone:token"));

    api
      .get("/users", {
        headers: { Authorization: `Bearer ${token.accessToken}` },
      })
      .then((response) => {
        console.log(
          response.data.filter(
            (person) =>
              (person.state === state) &
              (person.host === true) &
              (person.accept === true)
          )
        );
        setHostByState(
          response.data.filter(
            (person) =>
              (person.state === state) &
              (person.host === true) &
              (person.accept === true)
          )
        );
      });
  };

  return (
    <>
      <Header />
      <MainDashboardClient>
        <img className="dog" src={dog} alt="dog" />
        <h2>para buscar anfitriões selecione um estado:</h2>

        <States>
          {list.map((state, index) => {
            return (
              <div key={index}>
                <button onClick={() => getHostByState(state.value)}>
                  {state.value}
                </button>
              </div>
            );
          })}
        </States>

        <h2>anfitriões disponíveis: </h2>

        <HostPlace>
          {hostByState.length > 0 ? (
            hostByState.map((person, id) => (
              <CardUserClient
                key={id}
                hostId={person.id}
                name={person.name}
                state={person.state}
                description={person.description}
                details={person.details}
              />
            ))
          ) : (
            <NoHosts>
              <h2>Sem anfitriões</h2>
            </NoHosts>
          )}
        </HostPlace>
      </MainDashboardClient>
    </>
  );
};

export default DashboardClient;
