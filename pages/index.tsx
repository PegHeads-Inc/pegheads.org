import Link from "next/link";

export default function Home() {
  return <>
  <div className="bg-slate-100 dark:bg-black-900">
    <div className="container mx-auto px-6 py-5">
      <div className="flex flex-wrap justify-between items-center">
        <div className="mt-10 w-full md:w-6/12 lg:w-6/12 xl:w-6/12 mb-6 md:mb-0 order-2 lg:pl-10">
          <iframe 
            src="https://player.vimeo.com/video/661018557?h=bf4c6ff739&badge=0&autopause=0&player_id=0&app_id=58479" 
            allow="autoplay; fullscreen; picture-in-picture" 
            title="AI Is Here To Stay"
            className="lg:w-11/12 lg:h-96 w-full h-60"
          >
          </iframe>
        </div>

        <div className="w-5/12 lg:w-1/2 dsffdsfds order-1">
          <h2 className="text-center mb-4 text-4xl font-extrabold tracking-tight dark:text-white text-black-700">LEARN AI WITH AI</h2>
          <p className="text-center font-sans text-sm mb-4 dark:text-gray-500 text-gray-900">
            PegHeads.org is a free coding platform for developers to build AI & ML models for 3D animation. Experienced developers wanted <Link href="/contact" className="text-purple-600"> Contact us</Link>.
          </p>

          <div className="justify-center flex flex-wrap">
            <div>
              <button className="py-2 px-4 rounded font-bold bg-purple-200 hover:opacity-75 text-xs text-white">
                <Link href="/tutorials">Get Started</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  </>;
}
