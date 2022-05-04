import CardHostAdmin from "../CardHostAdmin";
import { useEffect, useState } from "react";
import api from "../../Services";

const WaitingList = () => {
  const [waitingHost, setWaitingHost] = useState([]);

  const token = JSON.parse(localStorage.getItem("@capstone:token"));
  useEffect(() => {
    api
      .get(`/users?host=true&accept=false`, {
        headers: { Authorization: `Bearer ${token.accessToken}` },
      })
      .then((response) => setWaitingHost(response.data));
  }, []);

  return (
    <div>
      <h1>Lista a ser aprovada</h1>
      <ul>
        {waitingHost.map((host, index) => (
          <CardHostAdmin
            key={index}
            username={host.name}
            description={host.description}
            user={waitingHost}
            id={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default WaitingList;
