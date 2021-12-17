import Head from 'next/head';
import Login from '../components/Login';
import { useMoralis } from 'react-moralis';
import Header from '../components/Header';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to bg-fuchsia-900 overflow-hidden">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-2xl mx-auto">
        <Header />
        {/* header */}
        {/* Messages */}
        {/* Footer */}
      </div>

      <button onClick={logout}>logout</button>
    </div>
  );
}
