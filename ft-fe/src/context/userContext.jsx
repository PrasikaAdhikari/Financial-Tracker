import { createContext, useContext, useState } from "react";
import { getUserDetail } from "../utils/axiosHelper";

// create context
const UserContext = createContext();

// define provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const autoLogin = async () => {
    console.log("AUTO LOGIN");

    let data = await getUserDetail();

    if (data.status) {
      setUser(data.user);
    }
  };

  const testFunction = () => {
    return "TEST FUNCTION";
  };

  const testFunction2 = () => {
    return "TEST FUNCTION 2";
  };

  let sharedData = {
    user,
    setUser,
    testFunction,
    testFunction2,
    autoLogin,
  };

  //   return what needs to be shared
  return (
    <UserContext.Provider value={sharedData}>{children}</UserContext.Provider>
  );
};

// function to use the context
export const useUser = () => useContext(UserContext);
//Implemented context API to avoid props drilling. It's a part of React.
