import Link from 'next/link';
import SEO from '@/components/SEO';

export default function PageNotFound() {
  return <>
  <SEO title="Page Not Found | PegHeads.org" />

  <div className="mx-auto px-5 sm:px-10 md:px-10 lg:px-30 bg-slate-100 dark:bg-black-900">
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <div className="text-center text-black-800 dark:text-white">
        <h1 className="text-2xl leading-9 font-extrabold sm:text-4xl sm:leading-10 md:text-3xl md:leading-10 font-poppins text-center">Page Not Found</h1>
        <p className="my-4 max-w text-sm text-center dark:text-gray-500 text-gray-900">The page you are looking for does not exist.</p>
      
        <div className="flex flex-wrap">
          <div className="mx-auto">
            <button className="py-2 px-4 rounded font-bold text-xs bg-purple-200 text-gray-200">
              <Link href="/">Go Home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>;
}
