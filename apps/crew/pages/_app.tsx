import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

// some global vars from different files
GLOBAL_APP_VAR;
GLOBAL_NEXT_VAR;
GLOBAL_ANOTHER_APP_VAR;

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to crew!</title>
      </Head>
      <div className="app">
        <header className="flex">
          <h1>Welcome to crew!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
