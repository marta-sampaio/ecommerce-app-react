import { createContext, useContext } from 'react';

export const UserContext = createContext();

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('UserContext used outside of UserContext.Provider')
  }
  return context;
};