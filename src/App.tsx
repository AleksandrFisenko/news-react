import { useState } from "react";

import Header from "./components/Header";
import ModalRegistration from "./components/Modal/ModalRegistration";
import MainPage from "./pages/MainPage";
import ModalLogin from "./components/Modal/ModalLogin";

const App = () => {
  const [modalRegistrationActive, setModalRegistrationActive] = useState(true);
  const [modalLoginActive, setModalLoginActive] = useState(false);

  return (
    <>
      <Header
        openRegistration={setModalRegistrationActive}
        openLogin={setModalLoginActive}
      />
      <MainPage />
      <ModalRegistration
        active={modalRegistrationActive}
        setActive={setModalRegistrationActive}
      />
      <ModalLogin active={modalLoginActive} setActive={setModalLoginActive} />
    </>
  );
};

export default App;
