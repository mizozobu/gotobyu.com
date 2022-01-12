import { Popover, Transition } from '@headlessui/react';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  LoginIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { Fragment } from 'react';
import { CirculatingCircles } from '@cmp/atoms/CirculatingCircles';
import {
  SCHOOL_LINKS,
  ADDITIONAL_SCHOOL_LINKS,
  APPLY_LINKS,
  CAREER_LINKS,
  OTHER_LINKS,
} from '@d';
import styles from './Header.module.css';

interface Props {
  show: boolean;
  loading: boolean;
}

export const Header = ({ show, loading }: Props) => (
  <Popover
    className={classNames(
      'sticky bg-white mb-1 z-20',
      styles.header,
      loading ? styles.loading : styles.loaded,
      show ? styles.show : styles.hide,
    )}
  >
    {({ open: openMobilePopover }) => (
      <>
        <div className='px-4 sm:px-6 lg:mx-24'>
          <div className='relative flex items-center justify-between h-16'>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
              <Link href='/'>
                <a>
                  <span className='sr-only'>Home</span>
                  <CirculatingCircles className='w-8 h-8' />
                </a>
              </Link>
            </div>
            <div className='-mr-2 -my-2 md:hidden'>
              <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100'>
                <span className='sr-only'>Open menu</span>
                <MenuIcon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
            </div>
            <Popover.Group as='nav' className='hidden md:flex space-x-10'>
              <Popover className='relative'>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900',
                      )}
                    >
                      <AcademicCapIcon
                        className='inline h-5 w-5 mr-2'
                        aria-hidden='true'
                      />
                      <span>各大学の情報</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600 rotate-180' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500 transition-transform',
                        )}
                        aria-hidden='true'
                      />
                    </Popover.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'
                    >
                      <Popover.Panel
                        static
                        className='absolute z-20 -ml-4 mt-3 px-2 w-screen max-w-md sm:px-0 md:ml-0 md:left-1/2 md:-translate-x-1/2 lg:left-full lg:-translate-x-full'
                      >
                        {({ close }) => (
                          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                            <div className='grid gap-2 p-5 bg-white'>
                              {SCHOOL_LINKS.map(
                                ({ name, href, detail, icon: Icon }) => (
                                  <Link key={name} href={href}>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                                    <a
                                      className='flex items-start w-full p-3 rounded-lg text-left hover:bg-gray-50'
                                      onClick={() => close()}
                                    >
                                      <Icon
                                        className='shrink-0 h-6 w-6 text-indigo-700'
                                        aria-hidden='true'
                                      />
                                      <div className='ml-4'>
                                        <p className='text-base font-medium text-gray-900'>
                                          {name}
                                        </p>
                                        <p className='mt-1 text-sm text-gray-500'>
                                          {detail}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ),
                              )}
                              <hr />
                              {ADDITIONAL_SCHOOL_LINKS.map(
                                ({ name, href, detail, icon: Icon }) => (
                                  <Link key={name} href={href}>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                                    <a
                                      className='flex items-start w-full p-3 rounded-lg text-left hover:bg-gray-50'
                                      onClick={() => close()}
                                    >
                                      <Icon
                                        className='shrink-0 h-6 w-6 text-indigo-700'
                                        aria-hidden='true'
                                      />
                                      <div className='ml-4'>
                                        <p className='text-base font-medium text-gray-900'>
                                          {name}
                                        </p>
                                        <p className='mt-1 text-sm text-gray-500'>
                                          {detail}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ),
                              )}
                            </div>
                          </div>
                        )}
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover className='relative'>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900',
                      )}
                    >
                      <LoginIcon
                        className='inline h-5 w-5 mr-2'
                        aria-hidden='true'
                      />
                      <span>入学準備</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600 rotate-180' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500 transition-transform',
                        )}
                        aria-hidden='true'
                      />
                    </Popover.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'
                    >
                      <Popover.Panel
                        static
                        className='absolute z-20 -ml-4 mt-3 px-2 w-screen max-w-md sm:px-0 md:ml-0 md:left-full md:-translate-x-full'
                      >
                        {({ close }) => (
                          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                            <div className='grid gap-2 p-5 bg-white'>
                              {APPLY_LINKS.map(
                                ({ name, href, detail, icon: Icon }) => (
                                  <Link key={name} href={href}>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                                    <a
                                      className='flex items-start w-full p-3 rounded-lg text-left hover:bg-gray-50'
                                      onClick={() => close()}
                                    >
                                      <Icon
                                        className='shrink-0 h-6 w-6 text-indigo-700'
                                        aria-hidden='true'
                                      />
                                      <div className='ml-4'>
                                        <p className='text-base font-medium text-gray-900'>
                                          {name}
                                        </p>
                                        <p className='mt-1 text-sm text-gray-500'>
                                          {detail}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ),
                              )}
                            </div>
                          </div>
                        )}
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className='relative'>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900',
                      )}
                    >
                      <BriefcaseIcon
                        className='inline h-5 w-5 mr-2'
                        aria-hidden='true'
                      />
                      <span>キャリア</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600 rotate-180' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500 transition-transform',
                        )}
                        aria-hidden='true'
                      />
                    </Popover.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'
                    >
                      <Popover.Panel
                        static
                        className='absolute z-20 left-full transform -translate-x-full mt-3 px-2 w-screen max-w-md sm:px-0'
                      >
                        {({ close }) => (
                          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                            <div className='grid gap-2 p-5 bg-white'>
                              {CAREER_LINKS.map(
                                ({ name, href, detail, icon: Icon }) => (
                                  <Link key={name} href={href}>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                                    <a
                                      className='flex items-start w-full p-3 rounded-lg text-left hover:bg-gray-50'
                                      onClick={() => close()}
                                    >
                                      <Icon
                                        className='shrink-0 h-6 w-6 text-indigo-700'
                                        aria-hidden='true'
                                      />
                                      <div className='ml-4'>
                                        <p className='text-base font-medium text-gray-900'>
                                          {name}
                                        </p>
                                        <p className='mt-1 text-sm text-gray-500'>
                                          {detail}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ),
                              )}
                            </div>
                          </div>
                        )}
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className='relative'>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900',
                      )}
                    >
                      <span>その他</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600 rotate-180' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500 transition-transform',
                        )}
                        aria-hidden='true'
                      />
                    </Popover.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'
                    >
                      <Popover.Panel
                        static
                        className='absolute z-20 left-full transform -translate-x-full mt-3 px-2 w-screen max-w-md sm:px-0'
                      >
                        {({ close }) => (
                          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                            <div className='grid gap-2 p-5 bg-white'>
                              {OTHER_LINKS.map(
                                ({ name, href, detail, icon: Icon }) => (
                                  <Link key={name} href={href}>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                                    <a
                                      className='flex items-start w-full p-3 rounded-lg text-left hover:bg-gray-50'
                                      onClick={() => close()}
                                    >
                                      <Icon
                                        className='shrink-0 h-6 w-6 text-indigo-700'
                                        aria-hidden='true'
                                      />
                                      <div className='ml-4'>
                                        <p className='text-base font-medium text-gray-900'>
                                          {name}
                                        </p>
                                        <p className='mt-1 text-sm text-gray-500'>
                                          {detail}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ),
                              )}
                            </div>
                          </div>
                        )}
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
          </div>
        </div>

        <Transition
          show={openMobilePopover}
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            static
            className='fixed z-20 inset-0 p-2 transition origin-top-right md:hidden'
          >
            {({ close }) => (
              <>
                <Popover.Overlay className='fixed inset-0 bg-black bg-opacity-50' />
                <div className='relative max-h-[calc(100vh-1rem)] py-3 overflow-y-scroll overscroll-contain rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white'>
                  <div className='p-3'>
                    <Popover.Button className='absolute top-0 right-0 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100'>
                      <span className='sr-only'>Close menu</span>
                      <XIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                    <nav className='grid gap-y-2'>
                      {SCHOOL_LINKS.map(({ name, href, icon: Icon }) => (
                        <Link key={name} href={href}>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                          <a
                            className='flex items-center w-full px-3 py-2 rounded-md text-left hover:bg-gray-50'
                            type='button'
                            onClick={() => close()}
                          >
                            <Icon
                              className='shrink-0 h-6 w-6 text-indigo-700'
                              aria-hidden='true'
                            />
                            <span className='ml-3 text-base font-medium text-gray-900'>
                              {name}
                            </span>
                          </a>
                        </Link>
                      ))}
                      {ADDITIONAL_SCHOOL_LINKS.map(
                        ({ name, href, icon: Icon }) => (
                          <Link key={name} href={href}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                            <a
                              className='flex items-center w-full px-3 py-2 rounded-md text-left hover:bg-gray-50'
                              onClick={() => close()}
                            >
                              <Icon
                                className='shrink-0 h-6 w-6 text-indigo-700'
                                aria-hidden='true'
                              />
                              <span className='ml-3 text-base font-medium text-gray-900'>
                                {name}
                              </span>
                            </a>
                          </Link>
                        ),
                      )}
                    </nav>
                  </div>
                  <hr className='mx-6' />
                  <div className='grid grid-cols-2 gap-x-1 gap-y-2 p-3'>
                    {APPLY_LINKS.map(({ name, href, icon: Icon }) => (
                      <Link key={name} href={href}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                        <a
                          className='flex items-center w-full h-full px-3 py-1 rounded-lg text-left font-medium text-base hover:bg-gray-50'
                          onClick={() => close()}
                        >
                          <Icon
                            className='shrink-0 h-5 w-5 mr-2 my-1 text-indigo-700'
                            aria-hidden='true'
                          />
                          {name}
                        </a>
                      </Link>
                    ))}

                    {CAREER_LINKS.map(({ name, href, icon: Icon }) => (
                      <Link key={name} href={href}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                        <a
                          className='flex items-center w-full h-full px-3 py-1 rounded-lg text-left font-medium text-base hover:bg-gray-50'
                          onClick={() => close()}
                        >
                          <Icon
                            className='shrink-0 h-5 w-5 mr-2 my-1 text-indigo-700'
                            aria-hidden='true'
                          />
                          {name}
                        </a>
                      </Link>
                    ))}

                    {OTHER_LINKS.map(({ name, href, icon: Icon }) => (
                      <Link key={name} href={href}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                        <a
                          className='flex items-center w-full h-full px-3 py-1 rounded-lg text-left font-medium text-base hover:bg-gray-50'
                          onClick={() => close()}
                        >
                          <Icon
                            className='shrink-0 h-5 w-5 mr-2 my-1 text-indigo-700'
                            aria-hidden='true'
                          />
                          {name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
);
