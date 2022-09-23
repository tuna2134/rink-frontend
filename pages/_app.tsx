// localink frontend - App

import '../styles/globals.css'

import React from 'react'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

import en from "../locales/en";
import ja from "../locales/ja";


export const useLocale = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : ja;
  return t;
}


function MyApp({ Component, pageProps }: AppProps) {
  const t = useLocale();
  return (
    <>
      <Head>
        <title>{`localink by Rext - ${t.INDEX_TITLE}`}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp