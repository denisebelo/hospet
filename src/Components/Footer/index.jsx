import { FooterMain } from "./style";
import ModalComponent from "../Modal";
import ContactUs from "../../Components/ContactUs";
import { useState } from "react";
import logo from "../../Assets/img/Hospetpt.png";

const Footer = () => {
  const [openContactUsModal, setOpenContactUsModal] = useState(false);
  return (
    <FooterMain>
      <div className="ContainerLogo">
        <figure>
          <img className="logo" alt="Logo" src={logo}></img>
          <span>2021 copyright</span>
        </figure>
      </div>

      <div className="FooterLink">
        <ModalComponent
          openModal={openContactUsModal}
          setOpenModal={setOpenContactUsModal}
        >
          <ContactUs />
        </ModalComponent>
        <p onClick={() => setOpenContactUsModal(true)}> Fale Conosco </p>
      </div>
    </FooterMain>
  );
};

export default Footer;
