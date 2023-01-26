/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-xs dark:text-gray-500 text-gray-900 bg-white dark:bg-black-800 ">
      <div className="mx-auto px-5 sm:px-10 md:px-10 lg:px-30 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <img src="/static/images/logo.png" alt="logo" className="w-48 h-auto -ml-2" />

            <p className="max-w-xs mt-4">
              PegHeads.org is a free coding platform for developers who want to build awesome AI & ML models. If you are an experienced developer interested in helping us with our mission of training artificial intelligence to automate 3D animation then please click <Link
              href="https://github.com/PegHeads-Inc"
              target='_blank'
              className="text-purple-200">here</Link> for our GitHub account.
            </p>

            <div className="mt-6">
              <div className="flex items-center">
                <svg className="flex-shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:zippy@pegheads.ai" className="ml-2">
                  zippy@pegheads.ai
                </a>
              </div>
            </div>
          </div>

          <div className="grid sm:gap-0 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h4 className="text-base font-bold text-black-900 dark:text-white">Useful Links</h4>
              <nav className="flex flex-col mt-4 space-y-2">
                <Link href="/" className="hover:opacity-75">
                  Home
                </Link>
                <Link href="/tutorials" className="hover:opacity-75">
                  Tutorials
                </Link>
                <Link href="/about" className="hover:opacity-75">
                  About us
                </Link>
                <Link href="/contact" className="hover:opacity-75">
                  Contact us
                </Link>
              </nav>
            </div>

            <div>
              <h4 className="text-base font-bold text-black-900 dark:text-white">Other Links</h4>
              <nav className="flex flex-col mt-4 space-y-2">
                <Link
                  href="https://github.com/PegHeads-Inc"
                  target="_blank"
                  className="hover:opacity-75">
                  GitHub
                </Link>
                <Link
                  href="https://solsea.io/collection/61beda3797bcc637ba907d89"
                  target="_blank"
                  className="hover:opacity-75">
                  SolSea
                </Link>
                <Link
                  href="https://pegheads.ai/PHCwhitepaper.pdf"
                  target="_blank"
                  className="hover:opacity-75">
                  WhitePaper
                </Link>
                <Link href="https://pegheads.ai/" target="_blank" className="hover:opacity-75">
                  PegHeads.ai
                </Link>
                <Link
                  href="https://guitarfling.com/"
                  target="_blank"
                  className="hover:opacity-75">
                  GuitarFling.com
                </Link>
                <Link
                  href="https://inftgenerator.com/"
                  target="_blank"
                  className="hover:opacity-75">
                    INFTgenerator.com
                </Link>
              </nav>
            </div>

            <div>
              <h4 className="text-base pb-3 font-bold text-black-900 dark:text-white">Social Networks</h4>
              <p className="text-xs">
                Make sure you follow us on our social networks!
              </p>

              {/* icons by: https://simpleicons.org/ */}
              <nav className="flex flex-col mt-4">
                <div className="flex space-x-4">
                  <Link
                    href="https://twitter.com/pegheads1"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-75">

                    <svg className="w-4 h-4" fill="#7e5bf6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>Twitter</title>
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>

                  </Link>
                  <Link
                    href="https://instagram.com/pegheads"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-75">

                    <svg className="w-4 h-4" fill="#7e5bf6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>Instagram</title>
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>

                  </Link>
                  <Link
                    href="https://github.com/PegHeads-Inc"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-75">

                    <svg className="w-4 h-4" fill="#7e5bf6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>

                  </Link>
                  <Link
                    href="https://www.tiktok.com/@pegheads"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-75">

                    <svg className="w-4 h-4" fill="#7e5bf6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>TikTok</title>
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>

                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-slate-100 dark:bg-black-900">
        <div className="mx-auto px-5 sm:px-10 md:px-10 lg:px-30 py-4">
          <p className="text-xs dark:text-gray-500 text-gray-900">
            &copy; Copyright {year} <strong className="text-black-900 dark:text-white">PegHeads Inc</strong>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
