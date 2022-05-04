import ModalContainer from "./style";

const ModalComponent = ({ children, openModal, setOpenModal }) => {
  const closeModal = (e) => {
    if (typeof e.target.className === "string") {
      if (e.target.className.includes("container")) {
        setOpenModal(false);
      }
    }
  };

  return openModal ? (
    <ModalContainer onClick={(e) => closeModal(e)} className="container">
      {children}
    </ModalContainer>
  ) : (
    <> </>
  );
};

export default ModalComponent;
