/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import SEO from '@/components/SEO';

export default function thankyou() {
  return (
    <>
      <SEO title="Thank You | PegHeads.org" />
      <div className="bg-slate-100 dark:bg-black-900 mx-auto px-5 sm:px-10 md:px-10 lg:px-30">
        <div className="flex flex-col items-center justify-center h-[70vh]">
          <div className="mb-4 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="60"  height="60"  fill="currentColor"  className="mx-auto text-center text-green-500" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
            </svg>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-black-700 dark:text-white sm:text-4xl sm:leading-10 md:text-4xl md:leading-10">
              Thank You!
            </h1>
            <p className="my-4 max-w text-center text-gray-900 dark:text-gray-400">We will get back to you shortly.</p>
            <div className="flex flex-wrap">
              <div className="mx-auto">
                <button className="py-2 px-4 rounded font-bold bg-purple-200 text-xs text-gray-200 ">
                  <Link href="/">Go Home</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}