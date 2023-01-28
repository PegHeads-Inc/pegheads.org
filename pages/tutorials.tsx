/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import SEO from '@/components/SEO';

export default function Tutorials() {
  return (
    <>
      <SEO title="Tutorials | PegHeads.org" />
      <div className="bg-slate-100 dark:bg-black-900">
        <div className="mx-auto px-5 sm:px-10 md:px-10 lg:px-30 bg-slate-100 dark:bg-black-900">
          <h1 className="py-8 text-4xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-4xl md:leading-10 text-black-700 dark:text-white">
            Tutorials
          </h1>
        </div>


        <div className="py-10 flex flex-wrap justify-center pt-5">
          <div className="w-full md:w-1/3 sm:w-1/2 xl:w-1/4 xxl:w-1/6 p-2">
            <div className="bg-white dark:bg-black-800 rounded-lg shadow-lg">
              <div className="flex flex-col ">
                <img
                  className="object-cover md:w-full rounded-t-xl"
                  src="/static/tutorials/PegHeadsTutorial5.png"
                  alt="Tutorial #5"
                />
                
                <div className="p-5 pt-2 space-y-2">  
                  <h2 className="text-lg text-black-700 dark:text-white font-extrabold font-sans tracking-wide">
                    Tutorial #5
                  </h2>
                  <p className="text-gray-900 dark:text-gray-400 text-xs tracking-wide font-semibold">
                    Training and testing of Glide by OpenAI
                  </p>

                  <div className="flex flex-wrap">
                    <div className="mx-auto w-full">
                      <Link href="/static/tutorials/PegHeadsTutorial5.pdf" legacyBehavior>
                        <a target="_blank">
                          <button className="py-2 w-full rounded font-bold bg-purple-200 text-xs text-gray-200 hover:opacity-75">
                            Start
                          </button>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 sm:w-1/2 xl:w-1/4 xxl:w-1/6 p-2">
            <div className="bg-white dark:bg-black-800 rounded-lg shadow-lg">
              <div className="flex flex-col ">
                <img
                  className="object-cover md:w-full rounded-t-xl"
                  src="/static/tutorials/PegHeadsTutorial4.png"
                  alt="Tutorial #4"
                />
                
                <div className="p-5 pt-2 space-y-2">  
                  <h2 className="text-lg text-black-700 dark:text-white font-extrabold font-sans tracking-wide">
                    Tutorial #4
                  </h2>
                  <p className="text-gray-900 dark:text-gray-400 text-xs tracking-wide font-semibold">
                    Transfer Learning to create Pre-Trained Models
                  </p>

                  <div className="flex flex-wrap">
                    <div className="mx-auto w-full">
                      <Link href="/static/tutorials/PegHeadsTutorial4.pdf" legacyBehavior>
                        <a target="_blank">
                          <button className="py-2 w-full rounded font-bold bg-purple-200 text-xs text-gray-200 hover:opacity-75">
                            Start
                          </button>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 sm:w-1/2 xl:w-1/4 xxl:w-1/6 p-2">
            <div className="bg-white dark:bg-black-800 rounded-lg shadow-lg">
              <div className="flex flex-col ">
                <img
                  className="object-cover md:w-full rounded-t-xl"
                  src="/static/tutorials/PegHeadsTutorial3.png"
                  alt="Tutorial #3"
                />
                
                <div className="p-5 pt-2 space-y-2">  
                  <h2 className="text-lg text-black-700 dark:text-white font-extrabold font-sans tracking-wide">
                    Tutorial #3
                  </h2>
                  <p className="text-gray-900 dark:text-gray-400 text-xs tracking-wide font-semibold">
                    Testing the (FER) algorithm on animations
                  </p>

                  <div className="flex flex-wrap">
                    <div className="mx-auto w-full">
                      <Link href="/static/tutorials/PegHeadsTutorial3.pdf" legacyBehavior>
                        <a target="_blank">
                          <button className="py-2 w-full rounded font-bold bg-purple-200 text-xs text-gray-200 hover:opacity-75">
                            Start
                          </button>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 sm:w-1/2 xl:w-1/4 xxl:w-1/6 p-2">
            <div className="bg-white dark:bg-black-800 rounded-lg shadow-lg">
              <div className="flex flex-col ">
                <img
                  className="object-cover md:w-full rounded-t-xl"
                  src="/static/tutorials/PegHeadsTutorial2.png"
                  alt="Tutorial #2"
                />
                
                <div className="p-5 pt-2 space-y-2">  
                  <h2 className="text-lg text-black-700 dark:text-white font-extrabold font-sans tracking-wide">
                    Tutorial #2
                  </h2>
                  <p className="text-gray-900 dark:text-gray-400 text-xs tracking-wide font-semibold">
                    Video clip selection using dropdown menu
                  </p>

                  <div className="flex flex-wrap">
                    <div className="mx-auto w-full">
                      <Link href="/static/tutorials/PegHeadsTutorial2.pdf" legacyBehavior>
                        <a target="_blank">
                          <button className="py-2 w-full rounded font-bold bg-purple-200 text-xs text-gray-200 hover:opacity-75">
                            Start
                          </button>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 sm:w-1/2 xl:w-1/4 xxl:w-1/6 p-2">
            <div className="bg-white dark:bg-black-800 rounded-lg shadow-lg">
              <div className="flex flex-col ">
                <img
                  className="object-cover md:w-full rounded-t-xl"
                  src="/static/tutorials/PegHeadsTutorial1.png"
                  alt="Tutorial #1"
                />
                
                <div className="p-5 pt-2 space-y-2">  
                  <h2 className="text-lg text-black-700 dark:text-white font-extrabold font-sans tracking-wide">
                    Tutorial #1
                  </h2>
                  <p className="text-gray-900 dark:text-gray-400 text-xs tracking-wide font-semibold">
                    Tying video clips together with AI.
                  </p>

                  <div className="flex flex-wrap">
                    <div className="mx-auto w-full">
                      <Link href="/static/tutorials/PegHeadsTutorial1.pdf" legacyBehavior>
                        <a target="_blank">
                          <button className="py-2 w-full rounded font-bold bg-purple-200 text-xs text-gray-200 hover:opacity-75">
                            Start
                          </button>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

