
import image from '../assets/sign In.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
export const HoverFocusAndOtherStates =()=>{
  return (
    <div>
      <h1 className="heading text-3xl font-bold hover:underline cursor-pointer">
        Hello world!
      </h1>
      <button className="rounded-xl bg-sky-500 hover:bg-sky-700 px-6 py-2">
        click me
      </button>
      stacking
      <button className="bg-blue-300 hover:bg-fuchsia-900 rounded-xl px-6 py-2">
        click me
      </button>
      <div className="flex items-center flex-col">
        <h1 className="mainHeading text-xl text-center my-4 underline font-bold">
          HANDLING HOVER, FOCUS, AND OTHER STATES
        </h1>
        <h1 className="font-900 text-lg text-center my-4 underline">
          1. Pseudo-classes(Hover, focus and active)
        </h1>
        <button className=" bg-violet-400 rounded-2xl py-3 px-10 hover:bg-red-600 active:bg-blue-600 focus:bg-green-600 focus-within:text-red-800 visited: focus:outline-none focus:ring-red-400">
          Hover:red active:blue focus:green
        </button>

        <h1 className="font-900 text-lg text-center my-4 underline">
          2. Styling children elments withfirst, last, odd, and even
        </h1>
        <ul role="list" className="p-6 divide-y divide-slate-200">
          {/* {#each people as person} */}
          <li className="flex py-4 first:bg-green-100 last:pb-0">
            <img className="w-10 h-10 rounded-full" src={image} alt="" />
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-slate-900">
                Elvis Owusu Gyasi
              </p>
              <p className="text-sm text-slate-500 truncate">
                owusuelvisgyasi@gmail.com
              </p>
            </div>
          </li>
          <li className="flex py-4 first:bg-green-100 last:pb-0">
            <img className="w-10 h-10 rounded-full" src={image} alt="" />
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-slate-900">
                Elvis Owusu Gyasi
              </p>
              <p className="text-sm text-slate-500 truncate">
                owusuelvisgyasi@gmail.com
              </p>
            </div>
          </li>
          <li className="flex py-4 first:bg-green-100 last:bg-pink-200">
            <img className="w-10 h-10 rounded-full" src={image} alt="" />
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-slate-900">
                Elvis Owusu Gyasi
              </p>
              <p className="text-sm text-slate-500 truncate">
                owusuelvisgyasi@gmail.com
              </p>
            </div>
          </li>
          <li className="flex py-4 first:bg-green-100 last:bg-pink-200">
            <img className="w-10 h-10 rounded-full" src={image} alt="" />
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-slate-900">
                Elvis Owusu Gyasi
              </p>
              <p className="text-sm text-slate-500 truncate">
                owusuelvisgyasi@gmail.com
              </p>
            </div>
          </li>
          {/* {/each} */}
        </ul>
        <h1>
          using <span className="font-medium">ODD</span> and{" "}
          <span className="font-medium">EVEN</span> for styling child elements
        </h1>
        <table>
          <tbody className="flex flex-col py-4">
            <tr className="odd:bg-red-300 even:bg-slate-50">
              <td>Elvis Owusu Gyasi</td>
              <td>A mighty Evangelist </td>
              <td>owusuelvisgyasi@gmail.com</td>
            </tr>
            <tr className="odd:bg-red-300 even:bg-slate-50">
              <td>Elvis Owusu Gyasi</td>
              <td>A mighty Evangelist </td>
              <td>owusuelvisgyasi@gmail.com</td>
            </tr>
            <tr className="odd:bg-red-300 even:bg-slate-50">
              <td>Elvis Owusu Gyasi</td>
              <td>A mighty Evangelist </td>
              <td>owusuelvisgyasi@gmail.com</td>
            </tr>
            <tr className="odd:bg-red-300 even:bg-slate-50">
              <td>Elvis Owusu Gyasi</td>
              <td>A mighty Evangelist </td>
              <td>owusuelvisgyasi@gmail.com</td>
            </tr>
            <tr className="odd:bg-red-300 even:bg-slate-50">
              <td>Elvis Owusu Gyasi</td>
              <td>A mighty Evangelist </td>
              <td>owusuelvisgyasi@gmail.com</td>
            </tr>
          </tbody>
        </table>
        <h1 className="text-1xl font-bold hover:underline cursor-pointer">
          FORM STATES
        </h1>
        <form>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Username
            </span>
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            type="text"
            value="Elvis Owusu Gyasi"
            disabled
          />

          <label className="block text-sm font-medium text-slate-700 mt-4">
            Email Address
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-green-500 focus:invalid:ring-green-500"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <label className="block text-sm font-medium text-slate-700 mt-4">
            Password
          </label>
          <input
            className="border-y-2 focus:border-y-2 border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:border-red-300 focus:ring-red-300"
            type="password"
            name="password"
          />
          <input
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-green-500 focus:invalid:ring-green-500"
            type="password"
            name="password"
            placeholder="*****"
          />
          <button>Submit</button>
        </form>
        <h1 className="mt-6 text-lg font-bold">
          Styling based on parent state group-(group-modifier)
        </h1>
        <div className="group text-center w-[17rem] bg-pink-200 rounded-md px-3 py-3 hover:bg-sky-300">
          <div>
            <h1 className="group-hover:text-white">New project</h1>
          </div>
          <p className="text-blue-400 text-left group-hover:text-slate-400">
            Create a new project from a variety of starting templates
          </p>
        </div>
      </div>
      <div>
        <h1 className="mt-6 text-lg font-bold text-center">
          Differentiating nested groups
        </h1>
        <ul className="px-6 py-6 flex flex-col w-[28rem]">
          <li class="group/main hover:bg-slate-100 px-2 py-2 rounded-lg ml-4 inline-flex items-center">
            <img className="rounded-full h-[4rem] w-[4.3rem]" src={image} />
            <div className="ml-2">
              <h3 className="font-bold">Leslie Abbott</h3>
              <a className="text-blue-600" href="">
                Co-Founder/ CEO
              </a>
            </div>
            <div className="group/subs invisible group-hover/main:visible hover:bg-slate-200 rounded-lg px-2 font-semibold ml-[6rem] inline-flex items-center cursor-pointer">
              <span className="group-hover/subs:text-gray-700 text-blue-400 font-bold">
                Call
              </span>
              <AiOutlineArrowRight className="text-slate-400 group-hover/subs:text-blue-400 group-hover/subs:translate-x-0.5" />
            </div>
          </li>
          <li class="group/main hover:bg-slate-100 px-2 py-2 rounded-lg ml-4 inline-flex items-center">
            <img className="rounded-full h-[4rem] w-[4.3rem]" src={image} />
            <div className="ml-2">
              <h3 className="font-bold">Leslie Abbott</h3>
              <a className="text-blue-600" href="">
                Co-Founder/ CEO
              </a>
            </div>
            <div className="group/subs invisible group-hover/main:visible hover:bg-slate-200 rounded-lg px-2 font-semibold ml-[6rem] inline-flex items-center cursor-pointer">
              <span className="group-hover/subs:text-gray-700 text-blue-400 font-bold">
                Call
              </span>
              <AiOutlineArrowRight className="text-slate-400 group-hover/subs:text-blue-400 group-hover/subs:translate-x-0.5" />
            </div>
          </li>
          <li class="group/main hover:bg-slate-100 px-2 py-2 rounded-lg ml-4 inline-flex items-center">
            <img className="rounded-full h-[4rem] w-[4.3rem]" src={image} />
            <div className="ml-2">
              <h3 className="font-bold">Leslie Abbott</h3>
              <a className="text-blue-600" href="">
                Co-Founder/ CEO
              </a>
            </div>
            <div className="group/subs invisible group-hover/main:visible hover:bg-slate-200 rounded-lg px-2 font-semibold ml-[6rem] inline-flex items-center cursor-pointer">
              <span className="group-hover/subs:text-gray-700 text-blue-400 font-bold">
                Call
              </span>
              <AiOutlineArrowRight className="text-slate-400 group-hover/subs:text-blue-400 group-hover/subs:translate-x-0.5" />
            </div>
          </li>
          <li class="group/main hover:bg-slate-100 px-2 py-2 rounded-lg ml-4 inline-flex items-center">
            <img className="rounded-full h-[4rem] w-[4.3rem]" src={image} />
            <div className="ml-2">
              <h3 className="font-bold">Leslie Abbott</h3>
              <a className="text-blue-600" href="">
                Co-Founder/ CEO
              </a>
            </div>
            <div className="group/subs invisible group-hover/main:visible hover:bg-slate-200 rounded-lg px-2 font-semibold ml-[6rem] inline-flex items-center cursor-pointer">
              <span className="group-hover/subs:text-gray-700 text-blue-400 font-bold">
                Call
              </span>
              <AiOutlineArrowRight className="text-slate-400 group-hover/subs:text-blue-400 group-hover/subs:translate-x-0.5" />
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold mt-4 text-xl text-center">
          STYLING BASE ON SIBLING STATE (peer-'modifier')
        </h1>
        <form action="">
          only works for previous sibling
          <input
            type="email"
            className="block peer mt-4 border rounded-md px-3 py-2 invalid:border-red-400 outline-none"
          />
          <p className="text-red-400 invisible peer-invalid:visible">
            Email is not valid
          </p>
        </form>
        <h2 className="font-bold">DIFFERENTIAITNG PEERS</h2>
        <div>
          <h3 className="font-bold text-slate-400 text-lg">
            Published status{" "}
          </h3>
          <hr className="border-none outline-none h-[0.01rem] bg-gray-200" />
          <input type="radio" name="state" className="peer/draft" />{" "}
          <label className="peer-checked/draft:text-sky-500 text-slate-400 mr-5 font-semibold">
            {" "}
            Draft
          </label>
          <input type="radio" name="state" className="peer/published" />{" "}
          <label className="peer-checked/published:text-sky-500 text-slate-400 font-semibold">
            Published
          </label>
          <p className="text-slate-400 hidden peer-checked/draft:block">
            Drafts are only visible to administrators
          </p>
          <p className="text-slate-400 hidden peer-checked/published:block">
            Your post will be publicly visible on your site
          </p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-xl">PSEUDO-ELEMENTS</h1>
        <h1 className="font-bold ">::Before and ::after</h1>
        <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
          When you look
          <span class="relative">
            <span
              class="block absolute -inset-1 -skew-y-3 bg-pink-500"
              aria-hidden="true"
            ></span>
            <span class="relative text-white">annoyed</span>
          </span>{" "}
          all the time, people think that you're busy.
        </blockquote>
        <h1 className="font-bold mt-4 text-xl text-center">List markers</h1>
        <ul className="marker:text-green-400 list-disc pl-5 space-y-3 text-slate-400">
          <li>5 cups chopped Porcini mushrooms</li>
          <li>1/2 cup of olive oil</li>
          <li>3lb of celery</li>
        </ul>
        <p className="first-line:uppercase first-line:italic first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-black first-letter:mr-3 first-letter:float-left w-[26rem]">
          Well, let me tell you something, funny boy. Y'know that little stamp,
          the one that says "New York Public Library"? Well that may not mean
          anything to you, but that means a lot to me. One whole hell of a lot.
        </p>
      </div>
      <div>
        <h1 className="font-bold mt-4 text-xl text-center">
          Media and feature queries
        </h1>
        <h2 className="text-center"> Prefers color scheme</h2>
        <h2 className="text-center">Prefers reduced motion</h2>
        <form className="flex flex-col items-center">
          <h2 className="text-center font-bold">Prefers Contrast</h2>
          <label class="block">
            <span class="block text-sm font-medium text-slate-700">
              Social Security Number
            </span>
            <input class="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
            <p class="mt-2 opacity-10 contrast-more:opacity-100 text-slate-600 text-sm">
              We need this to steal your identity.
            </p>
          </label>
        </form>
        <h2 className="text-center font-bold">
          Viewport Orientation:portrait and landscape
        </h2>
        <div className="portrait:bg-red-400 landscape:bg-blue-400">
          <h1 className="text-center hidden portrait:block">Portrait</h1>
          <h1 className="text-center hidden landscape:block"> Landscape</h1>
        </div>
        <h2 className="text-center font-bold">Print Styles</h2>
        <p className="print:hidden">
          This only add/remove styles when the document is to be printed
        </p>
        <h1 className="text-center font-bold text-xl hidden print:block">
          Hello{" "}
        </h1>
        <h3 className="print:text-red-500">
          Try printing this,the paragraph at the top disapears and a Hello
          appears
        </h3>
        <h2 className="text-center font-bold">Supports Rules</h2>
        <h1 className="text-center font-bold text-xl supports-[backdrop-filter]:bg-black/25 supports-[backdrop-filter]:backdrop-blur">
          Hello{" "}
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold">ATTRIBUTE SELECTORS</h1>
        <h2 className="text-center font-bold">ARIA states</h2>
        <h2 className="text-center font-bold">Data Attributes</h2>
        <h2 className="text-center font-bold text-xl mt-4">RTL support</h2>
        <div class="group flex items-center">
          <img class="shrink-0 h-12 w-12 rounded-full" src="..." alt="" />
          <div class="ltr:ml-3 rtl:mr-3 ltr:bg-blue-300 rtl:bg-red-200">
            <p class="text-sm font-medium text-slate-300 group-hover:text-white">
              anything
            </p>
            <p class="text-sm font-medium text-slate-500 group-hover:text-slate-300">
              anything
            </p>
            <p className="text-sm w-[20rem]">
              by switching between rtl and ltr in the html tag causes the whole
              page to change it's direction using dir='rtl' or dir='ltr'
            </p>
          </div>
        </div>
        <h2 className="text-center font-bold">Open/closed state</h2>
        <div className="relative w-[20rem]">
          <details
            className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
            open
          >
            <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
              list
            </summary>
            <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <p>
                The mug is round. The jar is round. They should call it
                Roundtine.
              </p>
            </div>
          </details>
        </div>
      </div>
      <div className="bg-red-300">
        <h2 className="font-bold text-xl">Custom Selectors</h2>
      </div>
      <div className="[&_.hi]:mt-6 [&_p]:bg-sky-300 mt-9 text-center">
        <h2 className="font-bold text-xl">Using arbitrary variants</h2>
        <p className="hi">Lorem ipsum...</p>
        <ul>
          <li>
            <p className="hi">Lorem ipsum...</p>
          </li>
          sdfjkdjf
        </ul>
      </div>
      <button
        type="button"
        class="[@media(any-hover:hover){&:hover}]:opacity-400"
      >
        button
      </button>
      <div className="items-center flex flex-col">
        <h2 className="font-bold text-xl">Examples of the utility classes</h2>
        <input
          min="1"
          max="5"
          placeholder="num"
          type="number"
          className="outline-none border out-of-range:border-red-500 in-range:border-green-300"
        />
        <input
          className="outline-none border placeholder-shown:border-gray-500"
          placeholder="you@example.com"
        />
      </div>
    </div>
  );
};
