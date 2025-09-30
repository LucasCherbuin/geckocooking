import { SessionProvider } from "next-auth/react";
import '../sass/main.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}