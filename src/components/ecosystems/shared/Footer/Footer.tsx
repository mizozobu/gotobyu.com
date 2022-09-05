import { EnvelopeIcon, LinkIcon } from '@heroicons/react/24/outline';
import { FacebookIcon } from '@c/atoms/FacebookIcon';
import { Link } from '@c/atoms/Link';
import { RippleButton } from '@c/atoms/RippleButton';

/**
 * Footer
 */
export const Footer = (): JSX.Element => (
  <footer
    className='flex flex-col items-center bg-indigo-900 p-8 text-white sm:p-12 lg:p-16'
    data-noindex='true'
  >
    <div>
      <Link href='/about'>BYU Management Society Tokyo Chapter</Link>
      <div className='mt-8 flex justify-between'>
        <a
          href='mailto:byums.japan@gmail.com'
          target='_blank'
          rel='noreferrer'
          className='rounded-full'
        >
          <RippleButton
            className='flex h-14 w-14 items-center justify-center rounded-full border border-white p-4'
            style={{
              '--bg-color': 'rgb(49 46 129)',
              '--ripple-color': 'white',
            }}
            aria-label='email'
          >
            <EnvelopeIcon className='h-8 w-8' />
          </RippleButton>
        </a>
        <a
          href='https://www.facebook.com/BYUMSJP'
          target='_blank'
          rel='noreferrer'
          className='rounded-full'
        >
          <RippleButton
            className='flex h-14 w-14 items-center justify-center rounded-full border border-white p-4'
            style={{
              '--bg-color': 'rgb(49 46 129)',
              '--ripple-color': 'white',
            }}
            aria-label='facebook'
          >
            <FacebookIcon className='h-8 w-8' />
          </RippleButton>
        </a>
        <a
          href='https://byums.byu.edu/tokyo/'
          target='_blank'
          rel='noreferrer'
          className='rounded-full'
        >
          <RippleButton
            className='flex h-14 w-14 items-center justify-center rounded-full border border-white p-4'
            style={{
              '--bg-color': 'rgb(49 46 129)',
              '--ripple-color': 'white',
            }}
            aria-label='website'
          >
            <LinkIcon className='h-8 w-8' />
          </RippleButton>
        </a>
      </div>
    </div>
  </footer>
);
