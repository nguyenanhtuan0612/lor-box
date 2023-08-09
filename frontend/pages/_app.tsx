import '@/public/css/index.css';
import '@/public/css/custom.css';
import type { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Tooltip } from 'react-tooltip';
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Tooltip id="tooltip" style={{ backgroundColor: 'rgb(75 85 99)', color: 'white', padding: '4px 8px', fontSize: '14px' }} />
    </>
  );
}
