import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import clsx from 'clsx';
import { VisualEditing } from 'next-sanity';
import { Geist } from 'next/font/google';
import { draftMode } from 'next/headers';
import { DisableDraftMode } from '../../components/DisableDraftMode';
import { Navbar } from '../../components/Navbar';
import { WebVitals } from '../../components/web-vitals';
import { SanityLive } from '../../sanity/lib/live';
import '../../styles/globals.css';
import { Providers } from '../providers';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

// const inter = Inter({
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export default async function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      {/* <Head>
        <Script id='next'>
          async src={`https://www.googletagmanager.com/ns.html?id=GTM-5WLGCQQB`}
        </Script>
        <Script>
          {`window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'GTM-5WLGCQQB');`}
        </Script>
      </Head> */}
      <body className={clsx(`min-h-screen, ${geistSans.variable} antialiased`)}>
        <WebVitals />
        <Providers themeProps={{ attribute: 'class' }}>
          <div className='relative flex flex-col h-screen w-screen gap-3'>
            <Navbar />
            <main className='relative mx-auto w-full max-w-[1536px] px-l py-l flex-grow'>
              {children}
              <SanityLive />
              {(await draftMode()).isEnabled && (
                <>
                  <DisableDraftMode />
                  <VisualEditing />
                </>
              )}
            </main>
            <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
              <small>&copy; 2025 My Portfolio. All rights reserved.</small>
            </footer>
            {/* <ThemeSwitcher /> */}
          </div>
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
      <GoogleAnalytics gaId='G-TX8ZS8HD77' />
    </html>
  );
}
