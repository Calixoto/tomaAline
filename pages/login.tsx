import { query as q } from 'faunadb';
import { NextPage } from 'next';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { fauna } from '../services/fauna';

const Login: NextPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [dados, setDados] = useState<any>();

  const login = useCallback(async (event: any) => {
    event.preventDefault();
    try {
      const data = await fauna.query(q.Get(q.Collection('user_empreendedor')));
      setDados(data);
      return data;
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    document.title = 'Login';
    console.log(dados);
  }, [dados]);

  return (
    <div className='container'>
      <h1> Contri BI </h1>
      <h2>Entrar</h2>
      <div className='wrap'>
        <div className='form_wrap'>
          <form onSubmit={login}>
            <div className='form_group'>
              <label htmlFor='mail'>Email</label>
              <input type='text' id='mail' name='user' />
            </div>
            <div className='form_group'>
              <label htmlFor='pass'>Senha</label>
              <input type='password' id='pass' name='pass' />
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
