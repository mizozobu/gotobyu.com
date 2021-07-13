import { useRef, FC, Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import {
  AcademicCapIcon,
  BookOpenIcon,
  HomeIcon,
  LoginIcon,
  MailOpenIcon,
  MenuIcon,
  OfficeBuildingIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { NextImage } from '@c/atoms/NextImage';
import styles from './Header.module.css';

export interface Props {}

const schoolLinks = [
  {
    name: 'Brigham Young University',
    description: '専攻、衣住食、クラブ、アルバイト、奨学金などのBYUの情報',
    href: '/byu',
    icon: ({ className }: { className: string }) => (
      <NextImage
        className={className}
        src='/byu.png'
        alt='BYU logo'
        layout='fill'
        objectFit='cover'
      />
    ),
  },
  {
    name: 'Brigham Young University–Hawaii',
    description: '専攻、衣住食、クラブ、アルバイト、奨学金などのBYUHの情報',
    href: '/byuh',
    icon: ({ className }: { className: string }) => (
      <NextImage
        className={className}
        src='/byuh.png'
        alt='BYUH logo'
        layout='fill'
        objectFit='cover'
      />
    ),
  },
  {
    name: 'Brigham Young University - Idaho',
    description: '専攻、衣住食、クラブ、アルバイト、奨学金などのBYUIの情報',
    href: '/byui',
    icon: ({ className }: { className: string }) => (
      <NextImage
        className={className}
        src='/byui.png'
        alt='BYUI logo'
        layout='fill'
        objectFit='cover'
      />
    ),
  },
];

const additionalSchoolLinks = [
  {
    name: 'BYU3校を比較する',
    description: 'BYU、BYUH、BYUIを比較する',
    href: '/compare',
    icon: ScaleIcon,
  },
];

const applyLinks = [
  {
    name: '入学手続き',
    description: 'BYU、BYUH、BYUIへの入学手続き',
    href: '/apply',
    icon: MailOpenIcon,
  },
  {
    name: '英語の勉強方法',
    description: 'BYU、BYUH、BYUIへの入学基準を満たすための英語の勉強方法',
    href: '/learn-english',
    icon: BookOpenIcon,
  },
];

const otherLinks = [
  {
    name: 'よくある質問',
    description: 'よく聞かれる質問とそれに対する回答を確認する',
    href: '/',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: '運営者について',
    description:
      'このサイトを運営するBYU Management Society Tokyo Chapterについて',
    href: '/byu-ms-tokyo-chapter',
    icon: UserGroupIcon,
  },
];

const classNames = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(' ');

export const Header: FC<Props> = () => {
  // workaround to close popover
  // see https://github.com/tailwindlabs/headlessui/issues/427
  const mobilePopoverRef = useRef<HTMLButtonElement>(null);
  const schoolPopoverRef = useRef<HTMLButtonElement>(null);
  const applyPopoverRef = useRef<HTMLButtonElement>(null);
  const otherPopoverRef = useRef<HTMLButtonElement>(null);

  const closeMobilePopOver = () => {
    mobilePopoverRef.current?.click();
  };

  const closeSchoolPopoverRef = () => {
    schoolPopoverRef.current?.click();
  };

  const closeApplyPopoverRef = () => {
    applyPopoverRef.current?.click();
  };

  const closeOtherPopoverRef = () => {
    otherPopoverRef.current?.click();
  };

  return (
    <Popover className={`relative bg-white mb-1 ${styles.header}`}>
      {({ open: openMobilePopover }) => (
        <>
          <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='flex justify-start lg:w-0 lg:flex-1'>
                <Link href='/'>
                  <a>
                    <span className='sr-only'>Home</span>
                    <HomeIcon className='w-8 h-8 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500' />
                  </a>
                </Link>
              </div>
              <div className='-mr-2 -my-2 md:hidden'>
                <Popover.Button
                  ref={mobilePopoverRef}
                  className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                >
                  <span className='sr-only'>Open menu</span>
                  <MenuIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
              <Popover.Group as='nav' className='hidden md:flex space-x-10'>
                <Popover className='relative'>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        ref={schoolPopoverRef}
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
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
                            'ml-2 h-5 w-5 group-hover:text-gray-500 transform transition-transform',
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
                          className='absolute z-20 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 md:ml-0 md:left-1/2 md:-translate-x-1/2 lg:left-full lg:-translate-x-full'
                          onClick={closeSchoolPopoverRef}
                        >
                          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                            <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                              {schoolLinks.map(
                                ({ name, href, description, icon: Icon }) => (
                                  <Link key={name} href={href}>
                                    <a className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
                                      <Icon
                                        className='flex-shrink-0 h-6 w-6 text-indigo-700'
                                        aria-hidden='true'
                                      />
                                      <div className='ml-4'>
                                        <p className='text-base font-medium text-gray-900'>
                                          {name}
                                        </p>
                                        <p className='mt-1 text-sm text-gray-500'>
                                          {description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ),
                              )}
                              <hr />
                              {additionalSchoolLinks.map(
                                ({ name, href, description, icon: Icon }) => (
                                  <Link key={name} href={href}>
                                    <a className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
                                      <Icon
                                        className='flex-shrink-0 h-6 w-6 text-indigo-700'
                                        aria-hidden='true'
                                      />
                                      <div className='ml-4'>
                                        <p className='text-base font-medium text-gray-900'>
                                          {name}
                                        </p>
                                        <p className='mt-1 text-sm text-gray-500'>
                                          {description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ),
                              )}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                <Popover className='relative'>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        ref={applyPopoverRef}
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
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
                            'ml-2 h-5 w-5 group-hover:text-gray-500 transform transition-transform',
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
                          className='absolute z-20 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 md:ml-0 md:left-full md:-translate-x-full'
                          onClick={closeApplyPopoverRef}
                        >
                          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                            <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                              {applyLinks.map(
                                ({ name, href, description, icon: Icon }) => (
                                  <Link key={name} href={href}>
                                    <a className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
                                      <Icon
                                        className='flex-shrink-0 h-6 w-6 text-indigo-700'
                                        aria-hidden='true'
                                      />
                                      <div className='ml-4'>
                                        <p className='text-base font-medium text-gray-900'>
                                          {name}
                                        </p>
                                        <p className='mt-1 text-sm text-gray-500'>
                                          {description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ),
                              )}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <Link href='/career'>
                  <a className='text-base font-medium text-gray-500 hover:text-gray-900'>
                    <OfficeBuildingIcon
                      className='inline h-5 w-5 mr-2'
                      aria-hidden='true'
                    />
                    キャリア
                  </a>
                </Link>

                <Popover className='relative'>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        ref={otherPopoverRef}
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                        )}
                      >
                        <span>その他</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600 rotate-180' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500 transform transition-transform',
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
                          onClick={closeOtherPopoverRef}
                        >
                          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                            <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                              {otherLinks.map(
                                ({ name, href, description, icon: Icon }) => (
                                  <Link key={name} href={href}>
                                    <a className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
                                      <Icon
                                        className='flex-shrink-0 h-6 w-6 text-indigo-700'
                                        aria-hidden='true'
                                      />
                                      <div className='ml-4'>
                                        <p className='text-base font-medium text-gray-900'>
                                          {name}
                                        </p>
                                        <p className='mt-1 text-sm text-gray-500'>
                                          {description}
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ),
                              )}
                            </div>
                          </div>
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
              className='absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
            >
              <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white'>
                <div className='pt-5 pb-6 px-5'>
                  <div className='flex items-center justify-between'>
                    <NextImage
                      className='w-8 h-8'
                      src='/byu.png'
                      alt='BYU logo'
                      layout='fill'
                      objectFit='scale-down'
                    />
                    <div className='-mr-2'>
                      <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                        <span className='sr-only'>Close menu</span>
                        <XIcon className='h-6 w-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <nav className='grid gap-y-8'>
                      {schoolLinks.map(({ name, href, icon: Icon }) => (
                        <Link key={name} href={href}>
                          <a>
                            <button
                              type='button'
                              className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
                              onClick={closeMobilePopOver}
                            >
                              <Icon
                                className='flex-shrink-0 h-6 w-6 text-indigo-700'
                                aria-hidden='true'
                              />
                              <span className='ml-3 text-base font-medium text-gray-900'>
                                {name}
                              </span>
                            </button>
                          </a>
                        </Link>
                      ))}
                      {additionalSchoolLinks.map(
                        ({ name, href, icon: Icon }) => (
                          <Link key={name} href={href}>
                            <a>
                              <button
                                type='button'
                                className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
                                onClick={closeMobilePopOver}
                              >
                                <Icon
                                  className='flex-shrink-0 h-6 w-6 text-indigo-700'
                                  aria-hidden='true'
                                />
                                <span className='ml-3 text-base font-medium text-gray-900'>
                                  {name}
                                </span>
                              </button>
                            </a>
                          </Link>
                        ),
                      )}
                    </nav>
                  </div>
                </div>
                <hr className='mx-5' />
                <div className='py-6 px-5 space-y-6'>
                  <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                    {applyLinks.map(({ name, href, icon: Icon }) => (
                      <Link key={name} href={href}>
                        <a>
                          <button
                            type='button'
                            className='text-base font-medium text-gray-900 hover:text-gray-700'
                            onClick={closeMobilePopOver}
                          >
                            <Icon
                              className='inline h-5 w-5 mr-2 text-indigo-700'
                              aria-hidden='true'
                            />
                            {name}
                          </button>
                        </a>
                      </Link>
                    ))}

                    <Link href='/career'>
                      <a className='text-base font-medium text-gray-900 hover:text-gray-700'>
                        <OfficeBuildingIcon
                          className='inline h-5 w-5 mr-2 text-indigo-700'
                          aria-hidden='true'
                        />
                        キャリア
                      </a>
                    </Link>
                    {otherLinks.map(({ name, href, icon: Icon }) => (
                      <Link key={name} href={href}>
                        <a>
                          <button
                            type='button'
                            className='text-base font-medium text-gray-900 hover:text-gray-700'
                            onClick={closeMobilePopOver}
                          >
                            <Icon
                              className='inline h-5 w-5 mr-2 text-indigo-700'
                              aria-hidden='true'
                            />
                            {name}
                          </button>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
