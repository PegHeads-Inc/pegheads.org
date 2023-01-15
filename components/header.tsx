
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Header() {
  const [navShow, setNavShow] = useState(false);

  const handleClick = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        document.body.style.overflow = 'hidden'
      }
      return !status
    });
  }

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <>
    <section className="flex py-2 text-xs items-center justify-center bg-black-900 text-white">
      <div className="flex text-center">
        {/* Icon by https://feathericons.com/ */}
        <div className="flex items-center underline">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <Link href="mailto:zippy@pegheads.ai">
            <a className="ml-1">zippy@pegheads.ai</a>
          </Link>
        </div>
      </div>
    </section>

    <div className="w-full relative sm:drop-shadow-sm bg-white dark:bg-black-800">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">PegHeads.org</span>
                <img className="h-8 w-auto" src="/static/images/logo.png" alt="PegHeads.org" />
              </a>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-7">
            <Link href="/">
              <a className="font-medium text-xs hover:underline hover:text-purple-200">Home</a>
            </Link>
            <Link href="/tutorials">
              <a className="font-medium text-xs hover:underline hover:text-purple-200">Tutorials</a>
            </Link>
            <Link href="/about">
                <a className="font-medium text-xs hover:underline hover:text-purple-200">About us</a>
            </Link>
            <Link href="/contact">
                <a className="font-medium text-xs hover:underline hover:text-purple-200">Contact us</a>
            </Link>

            <button aria-label="Toggle Dark Mode" type="button" onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" stroke="#00000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" className="justify-center rounded-full">
                {
                  mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (<path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />) : (<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />)
                }
              </svg>
            </button>
          </nav>

          <div className="sm:hidden">
            <button aria-label="Toggle Dark Mode" type="button" onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" stroke="#00000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" className="mr-1 pt-1 justify-center rounded-full">
                {
                  mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (<path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />) : (<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />)
                }
              </svg>
            </button>

            <button type="button" aria-label="Toggle Menu" onClick={handleClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>

            <div className={`fixed top-0 left-0 z-10 h-full w-full transform duration-300 bg-white dark:bg-black-800 ease-in-out ${navShow ? 'translate-y-0' : 'translate-y-full'}`}>
              <div className="flex flex-col h-full pt-3">
                <div className="flex items-center justify-between px-4 py-3 space-x-4">
                  <Link href="/">
                    <a>
                      <img src="/static/images/logo.png" alt="PegHeads.org" className="h-8 w-auto" />
                    </a>
                  </Link>
                  <button type="button" aria-label="Toggle Menu" onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>

                <nav className="fixed mt-8 h-full">
                  <div className="pt-5 pb-6 px-5">
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        <Link href="/">
                          <a className="pl-3 font-medium text-xs" onClick={handleClick}>
                            Home
                          </a>
                        </Link>
                        <Link href="/tutorials">
                          <a className="pl-3 font-medium text-xs" onClick={handleClick}>
                            Tutorials
                          </a>
                        </Link>
                        <Link href="/about">
                          <a className="pl-3 font-medium text-xs" onClick={handleClick}>
                            About us
                          </a>
                        </Link>
                        <Link href="/contact">
                          <a className="pl-3 font-medium text-xs"onClick={handleClick}>
                            Contact us
                          </a>
                        </Link>
                      </nav>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
