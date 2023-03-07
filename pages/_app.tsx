import type { AppProps } from "next/app";
import { DAppProvider } from "@usedapp/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
   <DAppProvider config={{}}>
    <Component {...pageProps} />
   </DAppProvider>)
}
