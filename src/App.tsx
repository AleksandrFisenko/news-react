import { useState } from "react";

import Header from "./components/Header";
import ModalRegistration from "./components/Modal/ModalRegistration";
import MainPage from "./pages/MainPage";
import ModalLogin from "./components/Modal/ModalLogin";

const App = () => {
  const [isModalRegistrationActive, setModalRegistrationActive] = useState(false);
  const [isModalLoginActive, setModalLoginActive] = useState(false);

  return (
    <>
      <Header
        openRegistration={setModalRegistrationActive}
        openLogin={setModalLoginActive}
      />
      <MainPage />
      <ModalRegistration
        isActive={isModalRegistrationActive}
        setActive={setModalRegistrationActive}
      />
      <ModalLogin isActive={isModalLoginActive} setActive={setModalLoginActive} />
    </>
  );
};

export default App;
