import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const signin = (email, nome, comment) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.filter((user) => user.email === email);
        if (hasUser?.length) {
            const token = Math.random().toString(36).substring(2);
            localStorage.setItem("user_token", JSON.stringify({ email, token, nome, comment }));
            setUser({ email, nome, comment });         
        }
   
  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin}}
    >
      {children}
    </AuthContext.Provider>
  );
};
  }