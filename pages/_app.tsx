import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import Layout from '@/components/layout';
import SEO from '@/components/SEO';

console.log(`%c
██████╗░███████╗░██████╗░██╗░░██╗███████╗░█████╗░██████╗░░██████╗░░░░█████╗░██████╗░░██████╗░
██╔══██╗██╔════╝██╔════╝░██║░░██║██╔════╝██╔══██╗██╔══██╗██╔════╝░░░██╔══██╗██╔══██╗██╔════╝░
██████╔╝█████╗░░██║░░██╗░███████║█████╗░░███████║██║░░██║╚█████╗░░░░██║░░██║██████╔╝██║░░██╗░
██╔═══╝░██╔══╝░░██║░░╚██╗██╔══██║██╔══╝░░██╔══██║██║░░██║░╚═══██╗░░░██║░░██║██╔══██╗██║░░╚██╗
██║░░░░░███████╗╚██████╔╝██║░░██║███████╗██║░░██║██████╔╝██████╔╝██╗╚█████╔╝██║░░██║╚██████╔╝
╚═╝░░░░░╚══════╝░╚═════╝░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═════╝░╚═════╝░╚═╝░╚════╝░╚═╝░░╚═╝░╚═════╝░
`, 'color: #fff; font-size: 15px; font-family: monospace;');

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <SEO />
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </>
  );
}
