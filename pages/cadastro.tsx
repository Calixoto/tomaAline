import { query as q } from 'faunadb';

import type { NextPage } from 'next';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { fauna } from '../services/fauna';

const Cadastro: NextPage = () => {
  useEffect(() => {
    document.title = 'Cadastro';
  }, []);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // fauna.query(
  //   q.Get(
  //     q.Match(
  //       q.Index('email'),
  //       q.Casefold(name)
  //     ),
  //     q.Match(
  //       q.Index('password'),
  //       q.Casefold(password)
  //     )
  //   )
  // )
  const subscribe = useCallback(
    (event: any) => {
      event.preventDefault();
      fauna.query(
        q.Create(q.Collection('user_empreendedor'), {
          data: {
            name: name,
            password: password,
            email: email,
          },
        })
      );
    },
    [email, name, password]
  );

  return (
    <div className='container'>
      <h1>Contri BI</h1>
      <p>App de BI coletivos</p>
      <h2>Cadastre-se</h2>

      <div className='wrap'>
        <form onSubmit={subscribe}>
          <div className='form_group'>
            <label htmlFor='name'>Usuário</label>
            <input
              id='name'
              type='text'
              name='user'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='form_group'>
            <label htmlFor='name'>Email</label>
            <input
              id='email'
              type='text'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='form_group'>
            <label htmlFor='name'>Senha</label>
            <input
              id='senha'
              type='password'
              name='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Link href='/'>Cancelar</Link>
            <button type='submit'>Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
