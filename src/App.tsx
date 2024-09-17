import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import ModalRegistration from "./components/Modal/ModalRegistration";
import MainPage from "./pages/MainPage";
import ModalLogin from "./components/Modal/ModalLogin";
import { useAppDispatch, useAppSelector } from "./hooks/typedHooks";
import { modalClose } from "./redux/actions/creators/modal";
import { selectModalType } from "./redux/selectors/modal";
import {
  MODAL_TYPE_LOGIN,
  MODAL_TYPE_REGISTRATION,
} from "./redux/actions/constants";
import { selectAuthData } from "./redux/selectors/auth";
import UserPage from "./pages/UserPage";

const App = () => {
  const modalType = useAppSelector(selectModalType);

  const isAuthenticated = useAppSelector(selectAuthData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(modalClose());
    }
  }, [isAuthenticated]);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/users/:id",
      element: <UserPage />,
    },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={routes} />
      {modalType === MODAL_TYPE_REGISTRATION && <ModalRegistration />}
      {modalType === MODAL_TYPE_LOGIN && <ModalLogin />}
    </>
  );
};

export default App;
