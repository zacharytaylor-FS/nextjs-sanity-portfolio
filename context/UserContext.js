'use client';
import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

function UserProvider({children}) {
const [user, setUser] = useState(null);

return (
  <UserContext.Provider value={{user, setUser}}>
    {children}
  </UserContext.Provider>
);
}

// Custom hook
const useUserContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider, useUserContext };
