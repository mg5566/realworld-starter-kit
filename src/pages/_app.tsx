import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* head 를 여기서 사용하지 말라고 나옵니다. */}
      <Head>
        <meta charSet="utf-8" />
        <title>Conduit | Mike Realworld project</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
