import type { AppProps } from "next/app";

import "@/styles/global.css";
import 'keen-slider/keen-slider.min.css'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
