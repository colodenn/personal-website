/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Sling as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Seo from '@/components/Seo';
// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function Impressum() {
  const [opened, setOpened] = React.useState(false);

  return (
    <>
      <Seo templateTitle='Homepage' />

      <div className='fixed top-0 left-0 z-50 px-0 mx-auto w-full md:px-4 xl:px-48'>
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
          <section className='container mx-auto mt-32 lg:px-28'>
            <div className='px-8 md:px-48'>
              <h3 className='text-5xl'>Impressum</h3>
              <h5 className='mt-8 text-2xl font-bold'>Angaben gemäß § 5 TMG</h5>
              <ul className='mt-4 text-xl'>
                <li>Cornelius Denninger</li>
                <li>Im Birkenfeld 9</li>
                <li>66125 Dudweiler</li>
              </ul>
              <h3 className='mt-8 text-2xl'>Kontakt</h3>
              <ul className='mt-4 text-xl'>
                <li>Telefon: +49 (0)176 82964398</li>
                <li>Email: cornelius@codenn.de</li>
              </ul>

              <img
                className='mt-12'
                src='https://media3.giphy.com/media/1N3zxEgVuLeJ9OzOSf/giphy.gif'
              />
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
}
