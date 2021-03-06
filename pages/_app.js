import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId="pDfxWxRxYSNVgEF6ZPYCjymHcDoDytahTeXnORrZ" serverUrl="https://gih1wmjdjeqs.usemoralis.com:2053/server">
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
