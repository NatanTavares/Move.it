import { createContext, ReactNode, useEffect, useState } from "react";
import { LoginModal } from "../components/LoginModal";

interface UserContextData {
  username: string;
  inputUsernameValue: string;
  login: () => void;
  handleInputValue: (value: string) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [hasOpenModal, setHasOpenModal] = useState(true);
  
  const [inputUsernameValue, setInputUsernameValue] = useState('');
  const [username, setUsername] = useState('');
  
  function handleInputValue(value: string) {
    setInputUsernameValue(value);
  }

  function login() {
    setUsername(inputUsernameValue);
  }

  function closeLoginModal() {
    if (username.length >= 1 && username !== 'undefined') {
      setHasOpenModal(false);
    }
  }

  useEffect(() => {
    closeLoginModal()
  }, [username])

  return (
    <UserContext.Provider 
      value={{
        username,
        inputUsernameValue,
        login,
        handleInputValue,
      }}
    >
      {children}
      {hasOpenModal && <LoginModal />}
    </UserContext.Provider>
  );
}
