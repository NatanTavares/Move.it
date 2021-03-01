import { createContext, ReactNode, useEffect, useState } from "react";
import { LoginModal } from "../components/LoginModal";

interface GithubUserContextData {
  user: string;
  inputUsernameValue: string;
  closeLoginModal: () => void;
  handleInputValue: (value: string) => void;
}

interface GithubUserProviderProps {
  children: ReactNode;
}

export const GithubUserContext = createContext({} as GithubUserContextData);

export function GithubUserProvider({ children }: GithubUserProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('anonymous');
  const [inputUsernameValue, setInputUsernameValue] = useState('');

  function loginWithGithub() {
    // implement this feature on future
    setUser(inputUsernameValue);
  }

  function closeLoginModal() {
    setIsLoggedIn(true);
    console.log(`>[inputUsernameValue]: ${inputUsernameValue}`);
  }

  function handleInputValue(value: string) {
    setInputUsernameValue(value);
  }

  useEffect(() => {
    loginWithGithub();
  }, [isLoggedIn]);

  return (
    <GithubUserContext.Provider value={{
      user,
      inputUsernameValue,
      closeLoginModal,
      handleInputValue,
    }}>
      {children}
      { !isLoggedIn && <LoginModal /> }
    </GithubUserContext.Provider>
  );
}
