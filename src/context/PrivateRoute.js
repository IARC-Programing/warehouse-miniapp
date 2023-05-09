import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router";

import { getUser } from "../functions/user";
import Auth from "../views/Auth";

export const PrivateRoute = createContext(null);

function PrivateRouteProvider({ children }) {
  const userRemember = window.localStorage.getItem("warehouse_remember");
  const token = window.localStorage.getItem("token");

  const [userState, setUserState] = useState();

  useEffect(() => {
    if (token) {
      getUser(userRemember)
        .then((data) => setUserState(data))
        .catch((err) => {
          alert(err);
          setUserState();
        });
    }

    return () => {};
  }, [userRemember, token]);

  return (
    <PrivateRoute.Provider value={{ me: userState }}>
      {userState ? (
        children
      ) : (
        <Routes>
          <Route path='/' index element={<Auth />} />
        </Routes>
      )}
    </PrivateRoute.Provider>
  );
}

export default PrivateRouteProvider;
