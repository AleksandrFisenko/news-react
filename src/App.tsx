import Header from "./components/Header";
import ModalRegistration from "./components/Modal/ModalRegistration";
import MainPage from "./pages/MainPage";
import ModalLogin from "./components/Modal/ModalLogin";
import { useAppSelector } from "./hooks/typedHooks";

const App = () => {
  const modalType = useAppSelector((state) => state.modals.modalType);

  return (
    <>
      <Header />
      <MainPage />
      {modalType === "register" && <ModalRegistration />}
      {modalType === "login" && <ModalLogin />}
    </>
  );
};

export default App;
