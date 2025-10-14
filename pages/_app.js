import { SessionProvider } from "next-auth/react";
import '../sass/main.scss';
import  Link  from "next/link";
import { House, User } from "@phosphor-icons/react";
import { footer } from "../pages/layout/footer";



export default function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}