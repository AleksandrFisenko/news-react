import { useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

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

const routes = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/users/:id",
        element: <UserPage />,
      },
      {
        path: "*",
        element: <MainPage />,
      },
    ],
  },
]);

const App = () => {
  const modalType = useAppSelector(selectModalType);

  const isAuthenticated = useAppSelector(selectAuthData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthenticated && modalType) {
      dispatch(modalClose());
    }
  }, [isAuthenticated, modalType]);

  return (
    <>
      <RouterProvider router={routes} />
      {modalType === MODAL_TYPE_REGISTRATION && <ModalRegistration />}
      {modalType === MODAL_TYPE_LOGIN && <ModalLogin />}
    </>
  );
};

export default App;
