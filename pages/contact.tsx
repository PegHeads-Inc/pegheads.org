/* eslint-disable @next/next/no-img-element */
import SEO from '@/components/SEO';

export default function Contact() {
  return (
    <>
      <SEO title="Contact | PegHeads.org" />
      <div className="bg-slate-100 dark:bg-black-900">
        <div className="pt-14 pb-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl leading-9 tracking-tight font-extrabold sm:text-4xl sm:leading-10 md:text-4xl md:leading-10 text-center text-black-700 dark:text-white font-poppins">WE&apos;D LOVE TO</h1>
            <h1 className="text-2xl leading-9 tracking-tight font-extrabold sm:text-4xl sm:leading-10 md:text-4xl md:leading-10 text-center text-black-700 dark:text-white font-poppins">HEAR FROM <span className="text-purple-200"> YOU.</span></h1>
            <p className="my-4 max-w text-center text-sm dark:text-gray-500 text-gray-900">
              We are here to help you with your AI and ML needs.
            </p>
          </div>
        </div>

        <div className="pb-10">
          <div className="bg-white dark:bg-black-800 max-w-sm mx-auto rounded-xl shadow-lg overflow-hidden md:max-w-3xl py-6">
            <div className="flex flex-col items-center justify-center ">
              <form action="https://formsubmit.co/hello@aiblockchainventures.com" method="POST" className="w-full px-8 justify-center items-center">
                <input type="hidden" name="_cc" value="devincapriola@gmail.com"/>
                <input type="hidden" name="_cc" value="jcapriola@gmail.com"/>
                <input type="hidden" name="_cc" value="gavincapriola@gmail.com"/>
                <input type="hidden" name="_subject" value="New submission from PegHeads.org!"/>
                <input type="hidden" name="_next" value="/thankyou" />
                <input type="hidden" name="_captcha" value="true" />

                <div className="flex flex-wrap -mx-3">
                  <div className="w-full px-3">
                    <label className="tracking-wide dark:text-gray-500 text-gray-900 text-xs font-normal mb-2 italic">
                      Email<span className="text-red-600">*</span>
                    </label>
                    <input className="appearance-none block w-full bg-gray-300 dark:bg-black-700 dark:text-gray-400 text-sm rounded py-1 px-2 mb-2 leading-tight focus:outline-none" type="email" name="email" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 px-3 md:mb-0">
                    <label className="tracking-wide dark:text-gray-500 text-gray-900 text-xs font-normal mb-2 italic">
                      First name<span className="text-red-600">*</span>
                    </label>
                    <input className="appearance-none block w-full bg-gray-300 dark:bg-black-700 dark:text-gray-400 text-sm rounded py-1 px-2 mb-2 leading-tight focus:outline-none" type="text" name="firstName" required />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="tracking-wide dark:text-gray-500 text-gray-900 text-xs font-normal mb-2 italic">
                      Last name<span className="text-red-600">*</span>
                    </label>
                    <input className="appearance-none block w-full bg-gray-300 dark:bg-black-700 dark:text-gray-400 text-sm rounded py-1 px-2 mb-2 leading-tight focus:outline-none"  type="text" name="lastName" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full px-3">
                    <label className="tracking-wide dark:text-gray-500 text-gray-900 text-xs font-normal mb-2 italic">
                      Phone number
                    </label>
                    <input className="appearance-none block w-full bg-gray-300 dark:bg-black-700 dark:text-gray-400 text-sm rounded py-1 px-2 mb-2 leading-tight focus:outline-none" type="text" name="phoneNumber" />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <label className="tracking-wide dark:text-gray-500 text-gray-900 text-xs font-normal mb-2 italic">
                      Message<span className="text-red-600">*</span>
                    </label>
                    <textarea className="appearance-none block w-full bg-gray-300 dark:bg-black-700 dark:text-gray-400 text-sm rounded py-1 px-2 mb-2 leading-tight focus:outline-none" name="message" required />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-2">
                  <button type="submit" className="py-2 px-4 rounded font-bold bg-purple-200 text-xs text-gray-200">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}