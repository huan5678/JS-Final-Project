import { useState } from "react";
import Modal from "react-modal";

import AOS from "aos";
import "aos/dist/aos.css";

const ModalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 99999,
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 99999,
  },
};

Modal.setAppElement("#app");

const icon = (target) => {
  switch (target) {
    case "productList":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-primary-md"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
      break;
    case "cartsList":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-red"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
        </svg>
      );
      break;
    case "cartEdit":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-primary-md"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
            clipRule="evenodd"
          />
        </svg>
      );
      break;
    case "orderForm":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="h-12 w-12 text-primary"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
          />
        </svg>
      );
      break;
    case "removeItem":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-red"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      );
      break;
    case "exp":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-red"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      );
      break;
  }
};

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserAuthContextProvider } from "./context/UserAuthContext";
import Header from "./components/Header";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFind from "./pages/NotFind";
import AuthPage from "./pages/AuthPage";
import GateRoute from "./components/GateRoute.jsx";

const App = () => {
  const [target, setTarget] = useState(null);

  AOS.init({
    duration: 500,
    easing: "ease-in-out",
    once: true,
    throttleDelay: 500,
  });

  // Modal使用狀態
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <UserAuthContextProvider>
        <Header target={target} setTarget={setTarget} />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Index
                  setTarget={setTarget}
                  setModalData={setModalData}
                  handleModal={handleModal}
                  setModalIsOpen={setModalIsOpen}
                />
              }
              exact
            />
            <Route
              path="/dashboard"
              element={
                <GateRoute>
                  <Dashboard
                    setTarget={setTarget}
                    setModalData={setModalData}
                    handleModal={handleModal}
                    setModalIsOpen={setModalIsOpen}
                  />
                </GateRoute>
              }
            />
            <Route path="/login" element={<AuthPage setTarget={setTarget} />} />
            <Route path="*" element={<NotFind />} />
          </Routes>
        </BrowserRouter>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleModal}
          style={ModalStyle}
          closeTimeoutMS={200}
        >
          <div className="flex flex-col items-center justify-center py-4 px-6 space-y-4">
            {icon(modalData.icon)}
            <h2 className="text-xl text-center">{modalData.title}</h2>
            <p className="text-center text-primary-md">{modalData.content}</p>
            {modalData?.action}
            {modalData.action ? null : (
              <button
                type="button"
                className="btn-cancel"
                onClick={handleModal}
              >
                關閉
              </button>
            )}
          </div>
        </Modal>
      </UserAuthContextProvider>
    </>
  );
};

export default App;
