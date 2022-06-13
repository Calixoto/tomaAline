import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className='container container_inicio'>
      <h1>Logo</h1>
      <div className='button_wrap'>
        <Link href='./login' className='button_link' prefetch>
          Ja tenho cadastro
        </Link>
        <Link href='./cadastro' className='button_link' prefetch>
          Quero me cadastrar
        </Link>
      </div>
    </div>
  );
};

export default Home;
