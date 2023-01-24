/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Home() {
  return <>
  <div className="bg-slate-100 dark:bg-black-900">
    <div className="container mx-auto px-6 py-5">
      <div className="flex flex-wrap justify-between items-center">
        <div className="mt-10 w-full md:w-6/12 lg:w-6/12 xl:w-6/12 mb-6 md:mb-0 order-2 lg:pl-10">
          <iframe 
            src="https://player.vimeo.com/video/661018557?h=bf4c6ff739&badge=0&autopause=0&player_id=0&app_id=58479&transparent=0" 
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

  <div className="mx-auto px-5 sm:px-10 md:px-10 lg:px-30 py-20 bg-white dark:bg-black-800">
    <div className="flex flex-col items-center justify-center">
      <div className="text-gray-900 dark:text-gray-400">
        <h1 className="text-center text-3xl uppercase font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-3xl md:leading-10 text-black-700 dark:text-white">New Tutorials</h1>
        <p className="my-4 max-w text-sm text-center">Brand new tutorials are coming soon.</p>
        
        <div className="py-10 flex flex-wrap justify-center pt-5">
          <div className="w-full md:w-1/3 sm:w-1/2 xl:w-1/3 xxl:w-1/4 p-2">
            <div className="bg-white dark:bg-black-700 rounded-lg shadow-lg">
              <div className="flex flex-col ">
                <img
                  className="object-cover md:w-full rounded-t-xl"
                  src="/static/tutorials/PegHeadsTutorial5.png"
                  alt="Tutorial #5"
                />
                    
                <div className="p-5 pt-2 space-y-2">  
                  <h2 className="text-lg font-extrabold font-sans tracking-wide text-black-700 dark:text-white">
                    Tutorial #5
                  </h2>
                  <p className="text-xs tracking-wide font-semibold">
                    Training and testing of Glide by OpenAI
                  </p>

                  <div className="flex flex-wrap">
                    <div className="mx-auto w-full">
                      <Link href="/static/pdfs/PegHeadsTutorial5.pdf" target="_blank">
                        <button className="py-2 w-full rounded font-bold bg-purple-200 text-xs text-gray-200 hover:opacity-75">
                          Start
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 sm:w-1/2 xl:w-1/3 xxl:w-1/4 p-2">
            <div className="bg-white dark:bg-black-700 rounded-lg shadow-lg">
              <div className="flex flex-col ">
                <img
                  className="object-cover md:w-full rounded-t-xl"
                  src="/static/tutorials/PegHeadsTutorial4.png"
                  alt="Tutorial #4"
                />
                    
                <div className="p-5 pt-2 space-y-2">  
                  <h2 className="text-lg font-extrabold font-sans tracking-wide text-black-700 dark:text-white">
                    Tutorial #4
                  </h2>
                  <p className="text-xs tracking-wide font-semibold">
                    Transfer Learning to create Pre-Trained Models
                  </p>

                  <div className="flex flex-wrap">
                    <div className="mx-auto w-full">
                      <Link href="/static/pdfs/PegHeadsTutorial4.pdf" target="_blank">
                        <button className="py-2 w-full rounded font-bold bg-purple-200 text-xs text-gray-200 hover:opacity-75">
                          Start
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="mx-auto px-5 sm:px-10 md:px-10 lg:px-30 py-20 bg-slate-100 dark:bg-black-900">
    <div className="flex flex-col items-center justify-center">
      <div className="text-gray-900 dark:text-gray-400">
        <h1 className="text-2xl leading-9 font-extrabold sm:text-4xl sm:leading-10 md:text-3xl md:leading-10 font-sans text-center text-black-700 dark:text-white">3D PRINTING TUTORIAL</h1>
        <p className="my-4 max-w text-sm text-center">Get started in the exciting world of 3D printing with this easy-to-follow tutorial</p>
        
        <div className="py-10 flex flex-wrap justify-center pt-5">
          <div className="w-full md:w-1/2 sm:w-1/2 xl:w-1/1 xxl:w-1/1 p-2">
            <div className="bg-white dark:bg-black-700 rounded-lg shadow-lg">
              <div className="flex flex-col ">
                <img
                  className="object-cover md:w-full rounded-t-xl"
                  src="/static/tutorials/PegHeads3DPrintingTutorial1.png"
                  alt="PegHeads3DPrintingTutorial #1"
                />
                        
                <div className="p-5 pt-2 space-y-2">  
                  <h2 className="text-lg text-black-700 dark:text-white font-extrabold font-sans tracking-wide">
                    3D Print BotPeg
                  </h2>
                  <p className="text-xs tracking-wide font-semibold">
                    Print a 3D model of the BotPeg character
                  </p>

                  <div className="flex flex-wrap">
                    <div className="mx-auto w-full">
                      <Link href="/static/pdfs/PegHeads3DPrintingTutorial1.pdf" legacyBehavior>
                        <a target="_blank">
                          <button className="py-2 mb-2 w-full rounded font-bold bg-purple-200 text-xs text-gray-200 hover:opacity-75">
                            Start
                          </button>
                        </a>
                      </Link>
                      <a href="/static/botpeg.zip" download className="text-purple-200 text-xs hover:opacity-75">
                        Download STL&apos;s
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>;
}
