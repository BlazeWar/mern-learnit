import "./App.css";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Auth from "./views/Auth";
import Dashboard from "./views/Dashboard";
import AuthContextProvider from "./contexts/AuthContext";
import ProtectedRoutes from "./components/routing/ProtectedRoutes";
import NavbarMenu from "./components/layout/NavbarMenu";
import About from "./views/About";
import PostContextProvider from "./contexts/PostContext";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/login" element={<Auth authRoute={"Login"} />} />

            <Route exact path="/" element={<Landing />} />

            <Route
              exact
              path="/register"
              element={<Auth authRoute={"Register"} />}
            />
            <Route element={<ProtectedRoutes />}>
              <Route
                path="/dashboard"
                element={
                  <Fragment>
                    <NavbarMenu /> <Dashboard />{" "}
                  </Fragment>
                }
              />
              <Route
                path="/about"
                element={
                  <Fragment>
                    <NavbarMenu /> <About />{" "}
                  </Fragment>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </PostContextProvider>
    </AuthContextProvider>
  );
}

export default App;
