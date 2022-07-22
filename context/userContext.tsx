import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

type Props = {
  children?: ReactNode;
};

interface DataProps {
  name: string;
  email: string;
  password: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  localStorage: Storage | null;
  userId: number;
  setUserId: Dispatch<SetStateAction<number>>;
  setUserLogged: (isLogged: number) => void;
  userLogged: number;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  isLogged: boolean;
}

export const userContext = createContext({} as DataProps);

export function UserContextProvider({ children }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState(0);
  const [userLogged, setUserLogged] = useState(0);
  const [isLogged, setIsLogged] = useState(false);
  const localStorage =
    typeof window !== 'undefined' ? window.localStorage : null;

  useEffect(() => {
    if (localStorage) {
      setUserId(localStorage.length);
    }
  }, []);

  useEffect(() => {
    if (localStorage) {
      const userOn = localStorage.getItem('UserIsLogged');
      setUserLogged(userOn ? JSON.parse(userOn) : 0);
      setIsLogged(userOn ? true : false);
    }
  }, [isLogged]);

  const provider = {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    localStorage,
    userId,
    setUserId,
    setUserLogged,
    userLogged,
    setIsLogged,
    isLogged,
  };
  return (
    <userContext.Provider value={provider}>{children}</userContext.Provider>
  );
}
