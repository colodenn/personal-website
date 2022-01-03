export default function Menu() {
  return (
    <div className={`bg-white fixed h-screen opacity-100 w-screen z-10 `}>
      <div className='fixed items-center justify-end px-8 py-6 right-0 transform z-50'>
        <div onClick={() => setOpened(false)}>
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
          <li className='mb-6'>About</li>
          <li className='mb-6'>Work</li>
          <li>Services</li>
        </ul>
        <ul className='font-semibold text-lg z-50'>
          <li className='mb-4'>Contact Me</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className='absolute h-full left-0 top-0 w-full z-40'>
        <div className='kaXiLa yellowbubble z-30'></div>
        <div className='LKiby bluebubble z-30'></div>
      </div>
    </div>
  );
}
