/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Sling as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import * as React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Footer from '@/components/layout/Footer';
import Seo from '@/components/Seo';
// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [opened, setOpened] = React.useState(false);
  return (
    <div className='example'>
      <Seo templateTitle='Homepage' />

      <div className='fixed top-0 left-0 z-50 px-0 mx-auto w-full md:px-4 xl:px-0 2xl:px-48'>
        <nav className='container font-secondary flex z-50 justify-between items-center px-8 py-6 mx-auto text-2xl font-extrabold'>
          <div>
            <Link href='/'>codenn.</Link>
          </div>

          <Hamburger
            toggled={opened}
            toggle={setOpened}
            rounded
            size={28}
            distance='sm'
          />
        </nav>
      </div>
      {opened ? (
        <div className={`bg-white fixed h-screen opacity-100 w-full z-10 `}>
          <div className='container relative items-center px-0 mx-auto my-auto h-full md:px-48'>
            <div className='fixed right-4 z-50 justify-end items-center px-8 py-6 transform md:right-1/4'></div>
            <div className='flex flex-col justify-center px-12 my-auto w-full h-full lg:flex-row lg:items-center lg:'>
              <ul className='z-50 mb-16 text-4xl font-bold md:mr-48 md:mb-0 md:text-6xl'>
                <li className='fade-in slide-in-bottom mb-6 cursor-pointer hover:text-gray-600'>
                  About
                </li>
                <li className='fade-in slide-in-bottom mb-6 cursor-pointer hover:text-gray-600'>
                  Work
                </li>
                <li className='fade-in slide-in-bottom cursor-pointer hover:text-gray-600'>
                  Services
                </li>
              </ul>
              <ul className='z-50 items-center text-lg font-bold md:text-2xl'>
                <li className='fade-in slide-in-bottom mb-4 cursor-pointer hover:text-gray-600'>
                  Contact Me
                </li>
                <li className='fade-in slide-in-bottom cursor-pointer hover:text-gray-600'>
                  Blog
                </li>
              </ul>
            </div>
            <div className='absolute top-0 left-0 z-30 w-full h-full'>
              <div className='kaXiLa yellowbubble z-30'></div>
              <div className='LKiby bluebubble z-30'></div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className='container mx-auto mt-48 lg:px-28'>
            <main className='px-8 mt-0 md:px-12 lg:px-28 lg:mt-24 2xl:px-64'>
              <ScrollAnimation animateIn='fade-in slide-in-bottom'>
                <h1 className='fade-in font-secondary slide-in-bottom text-5xl font-bold lg:text-7xl'>
                  Hello, I&apos;m{' '}
                  <span className='maske'>
                    <span className='trans font-bold'>
                      Cornelius Denninger{' '}
                    </span>{' '}
                  </span>{' '}
                  and I love{' '}
                  <span className='maske2'>
                    <span className='trans'>code</span>
                  </span>{' '}
                  and{' '}
                  <span className='maske3'>
                    <span className='trans'>design</span>
                  </span>
                  .
                </h1>
              </ScrollAnimation>
              <div className='flex justify-center mt-14 rounded-full'>
                <img
                  className='w-48 rounded-full'
                  src={
                    'https://avatars.githubusercontent.com/u/43729834?s=400&u=0744dafbcbde6b3da2903d718c87a555ee9203d4&v=4'
                  }
                />
              </div>
              <div className='mt-14'>
                <ScrollAnimation animateIn='fade-in slide-in-bottom'>
                  <h3 className='fade-in slide-in-bottom inline-block mb-2 text-3xl font-bold lg:text-5xl'>
                    About Me
                  </h3>
                </ScrollAnimation>
                <p className='font-secondary text-xl font-normal lg:text-2xl'>
                  I&apos;m Cornelius, a 22 years old Code enthusiast from
                  Germany. I am currently pursuing a Master of Science degree in
                  Business Informatics{' '}
                  <span className='decoration-blue-600 text-blue-700 hover:underline'>
                    <Link
                      passHref={false}
                      href='https://www.uni-saarland.de/start.html'
                    >
                      @Saarland University
                    </Link>
                  </span>{' '}
                  and working part-time{' '}
                  <span className='decoration-blue-600 text-blue-700 hover:underline'>
                    <Link passHref={false} href='https://www.dfki.de/web'>
                      @German Research Center for Artificial Intelligence
                    </Link>
                  </span>
                  .
                </p>
              </div>
            </main>
            <section className='mt-14 lg:mt-24'>
              <div className='grid grid-cols-1 gap-6 justify-around px-8 w-full md:grid-cols-3 md:px-0 md:mx-auto'>
                <div className='mt-12 md:mx-auto md:mt-0'>
                  <div className='mb-2'>
                    <svg width='52' height='52' viewBox='0 0 56 56' fill='none'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M2.5 11C2.5 6.30558 6.30558 2.5 11 2.5H45C49.6944 2.5 53.5 6.30558 53.5 11V45C53.5 49.6944 49.6944 53.5 45 53.5H11C6.30558 53.5 2.5 49.6944 2.5 45V11ZM11 5.5C7.96243 5.5 5.5 7.96243 5.5 11V45C5.5 48.0376 7.96243 50.5 11 50.5H45C48.0376 50.5 50.5 48.0376 50.5 45V11C50.5 7.96243 48.0376 5.5 45 5.5H11Z'
                        fill='black'
                      ></path>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M13.8655 18.8511C14.4192 18.2349 15.3676 18.1844 15.9838 18.7381L25.4722 27.266C25.7887 27.5505 25.9695 27.956 25.9695 28.3816C25.9695 28.8072 25.7887 29.2127 25.4722 29.4972L15.9838 38.025C15.3676 38.5788 14.4192 38.5282 13.8655 37.9121C13.3117 37.296 13.3623 36.3476 13.9784 35.7938L22.2255 28.3816L13.9784 20.9694C13.3623 20.4156 13.3117 19.4672 13.8655 18.8511Z'
                        fill='black'
                      ></path>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M28.8761 36.9092C28.8761 36.0808 29.5477 35.4092 30.3761 35.4092H42.3918C43.2202 35.4092 43.8918 36.0808 43.8918 36.9092C43.8918 37.7376 43.2202 38.4092 42.3918 38.4092H30.3761C29.5477 38.4092 28.8761 37.7376 28.8761 36.9092Z'
                        fill='black'
                      ></path>
                    </svg>
                  </div>
                  <h3 className='mt-6 mb-6 text-xl font-extrabold lg:text-3xl'>
                    Tech Stack
                  </h3>
                  <ul className='mt-2 text-xl'>
                    <li className='mb-2 md:mb-4'>NextJS</li>
                    <li className='mb-2 md:mb-4'>Typescript</li>
                    <li className='mb-2 md:mb-4'>Flask</li>
                    <li className='mb-2 md:mb-4'>MySQL/MongoDB</li>
                    <li className='mb-2 md:mb-4'>Supabase</li>
                    <li className='mb-2 md:mb-4'>PyTorch</li>
                  </ul>
                </div>
                <div className='mt-12 md:mx-auto md:mt-0'>
                  <div className='mb-2'>
                    <svg width='52' height='52' viewBox='0 0 56 56' fill='none'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M24.3675 4.5C23.5016 4.49993 22.6577 4.76204 21.9493 5.24918C21.502 5.55675 21.1224 5.94451 20.8283 6.38863C20.6095 6.71887 20.5 7.21715 20.5 7.9632V11.5C20.5 12.3284 19.8284 13 19 13C18.1716 13 17.5 12.3284 17.5 11.5V7.9632C17.5 7.02663 17.6167 5.80456 18.3272 4.73198C18.8334 3.9677 19.4848 3.30299 20.2495 2.77719C21.4599 1.94487 22.8969 1.4999 24.3676 1.5C24.3677 1.5 24.3676 1.5 24.3676 1.5H47.2735C49.1851 1.5 51.0214 2.25127 52.3778 3.59351C53.7348 4.93628 54.5 6.76083 54.5 8.66667V31.3333C54.5 33.2392 53.7348 35.0637 52.3778 36.4065C51.0214 37.7487 49.1851 38.5 47.2735 38.5H43.547C42.7186 38.5 42.047 37.8284 42.047 37C42.047 36.1716 42.7186 35.5 43.547 35.5H47.2735C48.3995 35.5 49.4762 35.0572 50.2677 34.2741C51.0586 33.4914 51.5 32.4333 51.5 31.3333V8.66667C51.5 7.56671 51.0586 6.50859 50.2677 5.72594C49.4762 4.94277 48.3995 4.5 47.2735 4.5H24.3675Z'
                        fill='black'
                      ></path>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M20 20.5C16.9344 20.5 13.9376 21.4091 11.3887 23.1122C8.83971 24.8154 6.85303 27.2361 5.67987 30.0684C4.50672 32.9007 4.19977 36.0172 4.79784 39.0239C5.39591 42.0306 6.87214 44.7924 9.03985 46.9601C11.2076 49.1279 13.9694 50.6041 16.9761 51.2022C19.9828 51.8002 23.0993 51.4933 25.9316 50.3201C28.7639 49.147 31.1846 47.1603 32.8878 44.6113C34.5909 42.0624 35.5 39.0656 35.5 36C35.5 35.1716 36.1716 34.5 37 34.5C37.8284 34.5 38.5 35.1716 38.5 36C38.5 39.6589 37.415 43.2357 35.3822 46.278C33.3494 49.3204 30.4601 51.6915 27.0796 53.0918C23.6992 54.492 19.9795 54.8583 16.3908 54.1445C12.8022 53.4307 9.5058 51.6687 6.91853 49.0815C4.33126 46.4942 2.56931 43.1978 1.85548 39.6092C1.14165 36.0205 1.50802 32.3008 2.90824 28.9204C4.30846 25.5399 6.67965 22.6506 9.72196 20.6178C12.7643 18.585 16.3411 17.5 20 17.5C20.8284 17.5 21.5 18.1716 21.5 19C21.5 19.8284 20.8284 20.5 20 20.5Z'
                        fill='black'
                      ></path>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M28.7477 21.1743C29.2037 20.4826 30.134 20.2916 30.8257 20.7476C32.9929 22.1764 34.8407 24.0233 36.2541 26.1769C36.7086 26.8695 36.5157 27.7994 35.8231 28.254C35.1305 28.7085 34.2005 28.5155 33.746 27.8229C32.5591 26.0145 31.0041 24.4585 29.1744 23.2523C28.4828 22.7963 28.2917 21.8659 28.7477 21.1743Z'
                        fill='black'
                      ></path>
                    </svg>
                  </div>
                  <h3 className='mt-6 mb-6 text-xl font-extrabold lg:text-3xl'>
                    Design
                  </h3>
                  <ul className='mt-2 text-xl'>
                    <li className='mb-2 md:mb-4'>Figma</li>
                    <li className='mb-2 md:mb-4'>Prototyping</li>
                    <li className='mb-2 md:mb-4'>Multi-platform prototyping</li>
                    <li className='mb-2 md:mb-4'>Tailwindcss</li>
                    <li className='mb-2 md:mb-4'>Sass</li>
                  </ul>
                </div>
                <div className='mt-12 md:mx-auto md:mt-0'>
                  <div className='mb-2'>
                    <svg width='52' height='52' viewBox='0 0 56 56' fill='none'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M28 3.5C14.469 3.5 3.5 14.469 3.5 28C3.5 41.531 14.469 52.5 28 52.5C41.531 52.5 52.5 41.531 52.5 28C52.5 14.469 41.531 3.5 28 3.5ZM0.5 28C0.5 12.8122 12.8122 0.5 28 0.5C43.1878 0.5 55.5 12.8122 55.5 28C55.5 43.1878 43.1878 55.5 28 55.5C12.8122 55.5 0.5 43.1878 0.5 28Z'
                        fill='black'
                      ></path>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M40.0435 15.8323C40.4414 16.2379 40.576 16.8336 40.3911 17.3709L34.7378 33.8009C34.5842 34.2472 34.2295 34.5952 33.7803 34.7403L16.8204 40.2169C16.2796 40.3916 15.6866 40.2456 15.2887 39.84C14.8907 39.4344 14.7562 38.8388 14.941 38.3015L20.5944 21.8715C20.7479 21.4252 21.1026 21.0771 21.5518 20.9321L38.5118 15.4554C39.0525 15.2808 39.6455 15.4267 40.0435 15.8323ZM23.1872 23.5565L18.7542 36.4399L32.145 32.1158L36.578 19.2324L23.1872 23.5565Z'
                        fill='black'
                      ></path>
                    </svg>
                  </div>
                  <h3 className='mt-6 mb-6 text-xl font-extrabold lg:text-3xl'>
                    Strategy
                  </h3>
                  <ul className='mt-2 text-xl'>
                    <li className='mb-2 md:mb-4'>SCRUM</li>
                    <li className='mb-2 md:mb-4'>Crisp-dm</li>
                    <li className='mb-2 md:mb-4'>Product concept</li>
                    <li className='mb-2 md:mb-4'>Research</li>
                  </ul>
                </div>
              </div>
            </section>
            <section className='px-8 mx-auto mt-12 md:px-12 lg:px-28 lg:mt-24 2xl:px-64'>
              <div>
                <div className='flex mb-12'>
                  <ScrollAnimation animateIn='fade-in slide-in-bottom'>
                    <Link passHref={true} href='http://beerpong.codenn.de/'>
                      <div
                        className='p-6 mr-12 rounded-lg shadow-2xl cursor-pointer'
                        style={{ backgroundColor: '#FFE6E9' }}
                      >
                        <img
                          className='rounded-lg'
                          src='https://i.imgur.com/JToQrSv.gif'
                        />
                      </div>
                    </Link>
                  </ScrollAnimation>
                </div>
                <div className=''>
                  <h5 className='flex items-center text-2xl font-bold'>
                    <img
                      className='mr-4 w-8'
                      src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/beer-mug_1f37a.png'
                    />
                    <Link href='http://beerpong.codenn.de/'>
                      Beerpong Dashboard
                    </Link>
                  </h5>
                  <p className='mt-4 text-2xl'>
                    Track your beerpongs stats and compare them with your
                    friends. Beer pong, also known as Beirut, is a drinking game
                    in which players throw a ping pong ball across a table with
                    the intent of landing the ball in a cup of beer on the other
                    end.
                  </p>
                </div>
              </div>
            </section>
            <section className='px-8 mx-auto mt-12 md:px-12 lg:px-28 lg:mt-24 2xl:px-64'>
              <div>
                <div className='flex mb-12'>
                  <ScrollAnimation animateIn='fade-in slide-in-bottom'>
                    <Link passHref={true} href='https://www.ertappen.com/'>
                      <div
                        className='p-6 mr-12 rounded-lg shadow-2xl cursor-pointer'
                        style={{ backgroundColor: '#D6E9FF' }}
                      >
                        <img
                          className='rounded-lg'
                          src='https://www.ertappen.com/_next/image?url=%2Fimages%2Fdashboard.png&w=1920&q=75'
                        />
                      </div>
                    </Link>
                  </ScrollAnimation>
                </div>
                <div className=''>
                  <h5 className='flex items-center text-2xl font-bold'>
                    <img
                      className='mr-4 w-8'
                      src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/detective_1f575-fe0f.png'
                    />
                    <Link href='https://www.ertappen.com/'>Ertappen.</Link>
                  </h5>
                  <p className='mt-4 text-2xl'>
                    We provide your images with a unique watermark that is
                    invisible to the naked eye. Want to track down the
                    counterfeiter of your images? Mark them with our tool and
                    find out who is distributing them.
                  </p>
                </div>
              </div>
            </section>

            <section className='px-8 mx-auto mt-12 md:px-12 lg:px-28 lg:mt-24 2xl:px-64'>
              <div>
                <div className='flex mb-12'>
                  <ScrollAnimation animateIn='fade-in slide-in-bottom'>
                    <div
                      className='p-6 mr-12 rounded-lg shadow-2xl'
                      style={{ backgroundColor: '#e2d6ff' }}
                    >
                      <img
                        className='mx-auto rounded-lg'
                        src='https://i.imgur.com/Srh4aIQ.png'
                      />
                    </div>
                  </ScrollAnimation>
                </div>
                <div className=''>
                  <h5 className='flex items-center text-2xl font-bold'>
                    <img
                      className='mr-4 w-8'
                      src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/bug_1f41b.png'
                    />
                    Caterpillar - Process Eventlog data
                  </h5>
                  <p className='mt-4 text-lg md:text-2xl'>
                    Caterpillar is a web plattform to perform various process
                    mining actions on your eventlog data.
                  </p>
                </div>
              </div>
            </section>

            <section className='px-8 mx-auto mt-12 md:px-12 lg:px-28 lg:mt-24 2xl:px-64'>
              <div>
                <div className='flex mb-12'>
                  <ScrollAnimation animateIn='fade-in slide-in-bottom'>
                    <Link
                      passHref={true}
                      href='https://chrome.google.com/webstore/detail/discord-link-sender/eomemhkkpegienlgknkpfimmombfjooc?hl=de'
                    >
                      <div
                        className='p-6 mr-12 rounded-lg shadow-2xl cursor-pointer'
                        style={{ backgroundColor: '#FFEEA8' }}
                      >
                        <img
                          className='mx-auto rounded-lg'
                          src='https://i.imgur.com/WRdlLSi.png'
                        />
                      </div>
                    </Link>
                  </ScrollAnimation>
                </div>
                <div className=''>
                  <h5 className='flex items-center text-2xl font-bold'>
                    <img
                      className='mr-4 w-8'
                      src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/ship_1f6a2.png'
                    />
                    <Link href='https://chrome.google.com/webstore/detail/discord-link-sender/eomemhkkpegienlgknkpfimmombfjooc?hl=de'>
                      Discord Link Sender
                    </Link>
                  </h5>
                  <p className='mt-4 text-lg md:text-2xl'>
                    The Discord Link Sender extension is a helpful addon that
                    lets you send urls from your current browser tab to you
                    preferred discord server without leaving your browser.
                  </p>
                </div>
              </div>
            </section>

            <section className='px-8 mx-auto mt-12 md:px-12 lg:px-28 lg:mt-24 2xl:px-64'>
              <div>
                <div className='flex mb-12'>
                  <ScrollAnimation animateIn='fade-in slide-in-bottom'>
                    <Link
                      passHref={true}
                      href='https://www.npmjs.com/package/@taschendieb/autodeploy'
                    >
                      <div
                        className='p-6 mr-12 w-2/3 rounded-lg shadow-2xl cursor-pointer'
                        style={{ backgroundColor: '#CDF9EC' }}
                      >
                        <img
                          className='mx-auto rounded-lg'
                          src='https://i.pinimg.com/originals/92/96/f7/9296f70fce1ae3f298e0d085c17f6a3f.gif'
                        />
                      </div>
                    </Link>
                  </ScrollAnimation>
                </div>
                <div className=''>
                  <h5 className='flex items-center text-2xl font-bold'>
                    <img
                      className='mr-4 w-8'
                      src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/rocket_1f680.png'
                    />
                    <Link href='https://www.npmjs.com/package/@taschendieb/autodeploy'>
                      Autodeploy
                    </Link>
                  </h5>
                  <p className='mt-4 text-lg md:text-2xl'>
                    Autodeploy is a small and highly customizable CLI-Tool to
                    automatically deploy your git repo and execute arbitrary
                    commands/scripts after a specific git action (e.g. push,
                    merge, ...)
                  </p>
                </div>
              </div>
            </section>
            <section className='container px-8 mt-24 lg:mt-24 xl:px-64'>
              <ScrollAnimation animateIn='fade-in slide-in-bottom'>
                <h3 className='fade-in slide-in-bottom inline-block mb-4 text-3xl font-bold lg:text-5xl'>
                  More projects to get blazed
                </h3>
              </ScrollAnimation>
              <p className='font-secondary mb-4 text-lg font-normal md:text-2xl'>
                Take a glimpse of my portfolio to get inspired for your next
                idea. You&apos;ll find more coding projects on GitHub.
              </p>
              <div className='flex items-center'>
                <div className='mr-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='#9333EA'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </div>
                <div>
                  <a className='mt-8 text-lg font-bold cursor-pointer hover:text-purple-600'>
                    <Link href={'https://github.com/colodenn'}>
                      GitHub Profile
                    </Link>
                  </a>
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
