import './styles.scss';
import { Noto_Sans } from 'next/font/google';
import { AppProps } from "next/app";

const notoSans = Noto_Sans({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700'] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={notoSans.className}>
      <Component {...pageProps} />
    </main>
  )
}