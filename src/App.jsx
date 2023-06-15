import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./styles/GlobalStyle"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import Provider from './contexts/Provider';
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Feed from "./pages/Feed";


function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        newestOnTop={false}
        hideProgressBar
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        theme="dark"
      />

    <Provider>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Provider>
    </BrowserRouter>
  )
}

export default App
