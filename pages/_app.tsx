import "../styles/globals.css";
import type { AppProps } from "next/app";
import PrimaryLayout from "../layouts/primaryLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrimaryLayout>
      <Component {...pageProps} />
    </PrimaryLayout>
  );
}

export default MyApp;
