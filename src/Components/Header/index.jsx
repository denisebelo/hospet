import LogoBranca from "../../Assets/img/Hospetbr.png";
import { useHistory, Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";
import { useUserInfo } from "../../Providers/infoProvider";
import { useAuthentication } from "../../Providers/Authentication";
import { HeaderContainer, HeaderContent, NavContainer } from "./style";
import { useEffect } from "react";

const Header = () => {
  const { user, updateInfo } = useUserInfo();
  const { authenticated, setAuthenticated } = useAuthentication();
  const [path, setPath] = useState();

  const [update, setUpdate] = useState(0);

  const history = useHistory();

  const sendToRegister = () => {
    history.push("/register");
  };

  const sendToLogin = () => {
    history.push("/login");
  };

  const handleLogout = () => {
    localStorage.clear();
    setAuthenticated(false);
    history.push("/");
  };

  useEffect(() => {
    if (user.host === true) {
      setPath("/dashboardHost");
    } else {
      setPath("/dashboardClient");
    }
    updateInfo();
    setUpdate(update + 1);
    if (user.host === true) {
      setPath("/dashboardHost");
    } else {
      setPath("/dashboardClient");
    }
  }, [authenticated]);

  useEffect(() => {
    setUpdate(update + 1);
  }, [user]);

  return (
    <HeaderContainer>
      <HeaderContent>
        <div className="ContainerLogo">
          <Link to="/">
            <figure>
              <img alt="Logo" src={LogoBranca}></img>
            </figure>
          </Link>
        </div>

        {authenticated ? (
          <NavContainer>
            <ul className="container">
              <li>
                <p>
                  Ola {user.name} <AiFillCaretDown />
                </p>
                <ul className="itemsContainer">
                  <li className="item">
                    <Link to="/MyPets" className="navMenuOption">
                      Meus pets
                    </Link>
                  </li>
                  <li className="item">
                    <Link to="/PerfilPage" className="navMenuOption">
                      Minha conta
                    </Link>
                  </li>
                  <li className="item">
                    <Link to={path} className="navMenuOption">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <hr />
                    <button onClick={handleLogout} className="logOutButton">
                      Log-out
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </NavContainer>
        ) : (
          <div className="ContainerButtons">
            <button onClick={sendToRegister}>Registrar-se</button>
            <button onClick={sendToLogin}>Login</button>
          </div>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
