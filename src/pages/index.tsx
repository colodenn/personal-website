/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Footer from '@/components/layout/Footer';
// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [opened, setOpened] = React.useState(false);
  return (
    <>
      {opened && (
        <div className={`bg-white fixed h-screen opacity-100 w-full z-10 `}>
          <div className='container h-full items-center mx-auto my-auto px-0 relative md:px-48'>
            <div className='fixed items-center justify-end px-8 py-6 right-4 transform z-50 md:right-1/4'>
              <div
                onClick={() => setOpened(false)}
                className='fade-in slide-in-bottom'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </div>
            </div>
            <div className='flex flex-col h-full justify-center my-auto px-12 w-full lg: lg:flex-row lg:items-center'>
              <ul className='font-bold mb-16 text-4xl z-50 md:mb-0 md:mr-48 md:text-6xl'>
                <li className='cursor-pointer fade-in mb-6 slide-in-bottom hover:text-gray-600'>
                  About
                </li>
                <li className='cursor-pointer fade-in mb-6 slide-in-bottom hover:text-gray-600'>
                  Work
                </li>
                <li className='cursor-pointer fade-in slide-in-bottom hover:text-gray-600'>
                  Services
                </li>
              </ul>
              <ul className='font-bold items-center text-lg z-50 md:text-2xl'>
                <li className='cursor-pointer fade-in mb-4 slide-in-bottom hover:text-gray-600'>
                  Contact Me
                </li>
                <li className='cursor-pointer fade-in slide-in-bottom hover:text-gray-600'>
                  Blog
                </li>
              </ul>
            </div>
            <div className='absolute h-full left-0 top-0 w-full z-40'>
              <div className='kaXiLa yellowbubble z-30'></div>
              <div className='LKiby bluebubble z-30'></div>
            </div>
          </div>
        </div>
      )}
      <div className='container mx-auto lg:px-28'>
        <nav className='flex font-extrabold font-secondary items-center justify-between mb-20 px-8 py-6 text-2xl'>
          <div>codenn.</div>
          <div onClick={() => setOpened(true)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 8h16M4 16h16'
              />
            </svg>
          </div>
        </nav>
        <main className='mt-0 px-8 lg:mt-24 xl:px-64'>
          <h1 className='fade-in font-bold font-secondary slide-in-bottom text-5xl lg:text-7xl'>
            Hello, I&apos;m{' '}
            <span className='maske'>
              <span className='font-bold trans'>Cornelius Denninger </span>{' '}
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
          <div className='mt-14'>
            <h3 className='brushed fade-in font-bold inline-block mb-2 slide-in-bottom text-3xl lg:text-4xl'>
              About Me
            </h3>
            <p className='font-normal font-secondary text-xl lg:text-2xl'>
              I&apos;m Cornelius, a 22 years old Code enthusiast from Germany. I
              am currently pursuing a Master of Science degree in Business
              Informatics{' '}
              <span className='decoration-blue-600 text-blue-700 hover:underline'>
                @Saarland University
              </span>{' '}
              and working part-time{' '}
              <span className='decoration-blue-600 text-blue-700 hover:underline'>
                @German Research Center for Artificial Intelligence
              </span>
              .
            </p>
          </div>
          <div className='flex justify-center mt-14 rounded-full'>
            <img
              className='rounded-full w-48'
              src={
                'https://avatars.githubusercontent.com/u/43729834?s=400&u=0744dafbcbde6b3da2903d718c87a555ee9203d4&v=4'
              }
            />
          </div>
        </main>
        <section className='mt-14 px-8 lg:mt-24 xl:px-64'>
          <div className='block md:flex'>
            <div className='md:mr-36'>
              <div className='mb-2'>
                <svg width='40' height='40' viewBox='0 0 56 56' fill='none'>
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
              <h3 className='font-extrabold mb-2 mt-2 text-2xl'>Tech Stack</h3>
              <ul className='mt-2'>
                <li className='mb-2 text-lg'>NextJS</li>
                <li className='mb-2 text-lg'>Typescript</li>
                <li className='mb-2 text-lg'>Flask</li>
                <li className='mb-2 text-lg'>MySQL/MongoDB</li>
                <li className='mb-2 text-lg'>Supabase</li>
                <li className='mb-2 text-lg'>PyTorch</li>
              </ul>
            </div>
            <div className='mt-12 md:mt-0'>
              <div className='mb-2'>
                <svg width='40' height='40' viewBox='0 0 56 56' fill='none'>
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
              <h3 className='font-extrabold mb-2 mt-2 text-2xl'>Design</h3>
              <ul className='mt-2'>
                <li className='mb-2 text-lg'>Figma</li>
                <li className='mb-2 text-lg'>Prototyping</li>
                <li className='mb-2 text-lg'>Multi-platform prototyping</li>
                <li className='mb-2 text-lg'>Tailwindcss</li>
                <li className='mb-2 text-lg'>Sass</li>
              </ul>
            </div>
          </div>
        </section>
        <section className='container mt-24 px-8 lg:mt-24 xl:px-64'>
          <h3 className='fade-in font-bold inline-block mb-4 slide-in-bottom text-3xl'>
            More projects to get blazed
          </h3>
          <p className='font-normal font-secondary mb-4 text-xl'>
            Take a glimpse of my portfolio to get inspired for your next idea.
            You&apos;ll find more design projects on GitHub.
          </p>
          <div className='flex items-center'>
            <div className='mr-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
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
              <a className='cursor-pointer font-bold mt-8 text-lg hover:text-purple-600'>
                GitHub Profile
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
