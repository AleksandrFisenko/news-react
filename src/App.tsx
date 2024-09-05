import { useEffect } from "react";

import Header from "./components/Header";
import ModalRegistration from "./components/Modal/ModalRegistration";
import MainPage from "./pages/MainPage";
import ModalLogin from "./components/Modal/ModalLogin";
import { useAppDispatch, useAppSelector } from "./hooks/typedHooks";
import { modalClose } from "./redux/actions/creators/modal";

const App = () => {
  const modalType = useAppSelector((state) => state.modals.modalType);

  const isAuthenticated = useAppSelector(
    (state) => state.auth.userData !== null
  );

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(modalClose());
    }
  }, [isAuthenticated]);

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
