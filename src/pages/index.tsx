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
        <div className={`bg-white fixed h-screen opacity-100 w-screen z-10 `}>
          <div className='fixed items-center justify-end px-8 py-6 right-0 transform z-50'>
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
          <div className='flex flex-col h-full justify-center px-12 w-full'>
            <ul className='font-bold mb-16 text-4xl z-50'>
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
            <ul className='font-bold text-lg z-50'>
              <li className='cursor-pointer fade-in mb-4 slide-in-bottom'>
                Contact Me
              </li>
              <li className='cursor-pointer fade-in slide-in-bottom'>Blog</li>
            </ul>
          </div>
          <div className='absolute h-full left-0 top-0 w-full z-40'>
            <div className='kaXiLa yellowbubble z-30'></div>
            <div className='LKiby bluebubble z-30'></div>
          </div>
        </div>
      )}
      <nav className='flex font-extrabold font-secondary items-center justify-between mb-20 px-8 py-6 text-2xl'>
        <div>codenn.</div>
        <div onClick={(e) => setOpened(true)}>
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
      <main className='container px-8'>
        <h1 className='fade-in font-bold font-secondary slide-in-bottom text-5xl'>
          Hello I'm{' '}
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
          <h3 className='brushed fade-in font-bold inline-block mb-2 slide-in-bottom text-3xl'>
            About Me
          </h3>
          <p className='font-normal font-secondary text-xl'>
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
      <section className='mt-14 px-8'>
        <div className=''>
          <div>
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
        </div>
      </section>
      <section className='container mt-24 px-8'>
        <h3 className='fade-in font-bold inline-block mb-4 slide-in-bottom text-3xl'>
          More projects to get blazed
        </h3>
        <p className='font-normal font-secondary mb-4 text-xl'>
          Take a glimpse of my portfolio to get inspired for your next idea.
          You’ll find more design projects on GitHub.
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
      <Footer />
    </>
  );
}
