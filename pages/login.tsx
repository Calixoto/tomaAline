import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useContext, useState } from 'react';
import { userContext } from '../context/userContext';

type Props = {
  email: string;
  name: string;
  password: string;
};

const Login: NextPage = () => {
  const route = useRouter();
  const { localStorage, setIsLogged } = useContext(userContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useCallback(
    (event: any) => {
      let dados: Props | null = null;
      let isUser = false;
      event.preventDefault();
      if (localStorage) {
        for (let i = 0; i < localStorage.length; i++) {
          const result = localStorage.getItem(`${i}`);
          dados = result ? JSON.parse(result) : null;
          if (dados?.email === email && dados?.password === password) {
            isUser = true;
            localStorage.setItem('UserIsLogged', JSON.stringify(i));
            setIsLogged(true);
            route.push('/projetos');
            break;
          }
        }
        !isUser
          ? alert('Usuário ou senha incorretos, tente novamente!!')
          : null;
      }
    },
    [email, password]
  );

  return (
    <div className='container'>
      <h1> Contri BI </h1>
      <h2>Entrar</h2>
      <div className='wrap'>
        <div className='form_wrap'>
          <form onSubmit={login}>
            <div className='form_group'>
              <label htmlFor='mail'>Email</label>
              <input
                type='text'
                id='mail'
                name='user'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className='form_group'>
              <label htmlFor='pass'>Senha</label>
              <input
                type='password'
                id='pass'
                name='pass'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div>
              <Link href='/'>Cancelar</Link>
              <button type='submit'>Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
