import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register/User";
import DashboardClient from "../Pages/DashboardClient";
import DashboardAdmin from "../Pages/DashboardAdmin";
import DashboardHost from "../Pages/DashboardHost/";
import PerfilPage from "../Pages/PerfilPage";
import PetsPage from "../Pages/MyPets";
import { RegisterPet } from "../Pages/Register/Pet";
import { useUserInfo } from "../Providers/infoProvider";
import { useToken } from "../Providers/Token";
import { useState } from "react";
import { useHost } from "../Providers/Host";
import { useAuthentication } from "../Providers/Authentication";

const Routes = () => {
  const { host, setHost } = useHost();

  const { token } = useToken();

  const { user } = useUserInfo();
  

  const { authenticated } = useAuthentication();

  if (token === "") {
    if (user.host === true && user.accept === "true") {
      setHost(true);
    }

    if (user.host === false) {
      setHost(false);
    }

    if (user.host === true && user.accept === "false") {
      setHost(true);
    }
  } else {
    <Redirect to="/register" />;
  }

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login authenticated={ authenticated } />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/register-pets">
        <RegisterPet />
      </Route>
      <Route exact path="/dashboardClient">
        <DashboardClient authenticated={authenticated} />
      </Route>
      <Route exact path="/dashboardHost">
        <DashboardHost authenticated={authenticated} />
      </Route>
      <Route exact path="/dashboardAdmin">
        <DashboardAdmin authenticated={authenticated} />
      </Route>
      <Route exact path="/PerfilPage">
        <PerfilPage />
      </Route>
      <Route exact path="/MyPets">
        <PetsPage authenticated={authenticated} />
      </Route>
    </Switch>
  );
};

export default Routes;
