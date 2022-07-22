import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { userContext } from '../context/userContext';

const Home: NextPage = () => {
  const route = useRouter();
  const { isLogged } = useContext(userContext);
  useEffect(() => {
    isLogged ? route.push('/projetos') : null;
  }, [isLogged]);
  return (
    <div className='container container_inicio'>
      <h1>Logo</h1>
      <div className='button_wrap'>
        <Link href='./login' className='button_link'>
          Ja tenho cadastro
        </Link>
        <Link href='./cadastro' className='button_link'>
          Quero me cadastrar
        </Link>
      </div>
    </div>
  );
};

export default Home;
