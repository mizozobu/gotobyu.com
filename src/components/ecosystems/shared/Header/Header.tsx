import { Popover, Transition } from '@headlessui/react';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  LoginIcon,
  MenuIcon,
  XIcon,
  SearchIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { CirculatingCircles } from '@c/atoms/CirculatingCircles';
import { DynamicSearchDialog as SearchDialog } from '@c/dynamics/DynamicSearchDialog';
import {
  SCHOOL_LINKS,
  ADDITIONAL_SCHOOL_LINKS,
  APPLY_LINKS,
  CAREER_LINKS,
  OTHER_LINKS,
} from '@d/links';
import styles from './Header.module.css';

interface Props {
  show: boolean;
  loading: boolean;
  isSearchAvailable: boolean;
}

/**
 * @see https://tailwindui.com/components/marketing/elements/headers
 */
export const Header = ({ show, loading, isSearchAvailable }: Props) => {
  const [isSearchDialogDisplayed, setIsSearchDialogDisplayed] = useState(false);

  const openSearchDialog = () => {
    setIsSearchDialogDisplayed(true);
  };

  const closeSearchDialog = () => {
    setIsSearchDialogDisplayed(false);
  };

  return (
    <>
      <Popover
        className={classNames(
          'sticky z-10 mb-1 bg-white',
          styles.header,
          loading ? styles.loading : styles.loaded,
          show ? styles.show : styles.hide,
        )}
        data-noindex='true'
      >
        {({ open: openMobilePopover }) => (
          <>
            <div className='px-4 sm:px-6'>
              <div className='relative flex h-16 items-center justify-between'>
                <div className='flex justify-start lg:w-0 lg:flex-1'>
                  <Link href='/'>
                    <a tabIndex={-1}>
                      <span className='sr-only'>Home</span>
                      <CirculatingCircles className='h-8 w-8' />
                    </a>
                  </Link>
                </div>
                <div className='space-x-1 lg:hidden'>
                  <button
                    type='button'
                    className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500'
                    onClick={openSearchDialog}
                  >
                    <span className='sr-only'>Open search</span>
                    <SearchIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                  <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500'>
                    <span className='sr-only'>Open menu</span>
                    <MenuIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
                <Popover.Group as='nav' className='hidden space-x-4 lg:flex'>
                  <Popover className='relative'>
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            'group inline-flex h-full items-center rounded-md bg-white text-base font-medium hover:text-gray-900',
                          )}
                        >
                          <AcademicCapIcon
                            className='mr-1 inline h-5 w-5'
                            aria-hidden='true'
                          />
                          <span>各大学の情報</span>
                          <ChevronDownIcon
                            className={classNames(
                              open
                                ? 'rotate-180 text-gray-600'
                                : 'text-gray-400',
                              'ml-1 h-5 w-5 transition-transform group-hover:text-gray-500',
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
                            className='absolute left-full z-10 mt-3 w-screen max-w-md -translate-x-full px-2'
                          >
                            {({ close }) => (
                              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                                <div className='grid gap-2 bg-white p-5'>
                                  {SCHOOL_LINKS.map(
                                    ({ name, href, detail, icon: Icon }) => (
                                      <Link key={name} href={href}>
                                        <a tabIndex={-1}>
                                          <button
                                            type='button'
                                            className='flex w-full items-start rounded-lg p-3 text-left hover:bg-gray-50'
                                            onClick={() => close()}
                                          >
                                            <Icon
                                              className='h-6 w-6 shrink-0 text-indigo-700'
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
                                          </button>
                                        </a>
                                      </Link>
                                    ),
                                  )}
                                  <hr />
                                  {ADDITIONAL_SCHOOL_LINKS.map(
                                    ({ name, href, detail, icon: Icon }) => (
                                      <Link key={name} href={href}>
                                        <a tabIndex={-1}>
                                          <button
                                            type='button'
                                            className='flex w-full items-start rounded-lg p-3 text-left hover:bg-gray-50'
                                            onClick={() => close()}
                                          >
                                            <Icon
                                              className='h-6 w-6 shrink-0 text-indigo-700'
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
                                          </button>
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
                            'group inline-flex h-full items-center rounded-md bg-white text-base font-medium hover:text-gray-900',
                          )}
                        >
                          <LoginIcon
                            className='mr-1 inline h-5 w-5'
                            aria-hidden='true'
                          />
                          <span>入学準備</span>
                          <ChevronDownIcon
                            className={classNames(
                              open
                                ? 'rotate-180 text-gray-600'
                                : 'text-gray-400',
                              'ml-1 h-5 w-5 transition-transform group-hover:text-gray-500',
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
                            className='absolute left-full z-10 mt-3 w-screen max-w-md -translate-x-full px-2'
                          >
                            {({ close }) => (
                              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                                <div className='grid gap-2 bg-white p-5'>
                                  {APPLY_LINKS.map(
                                    ({ name, href, detail, icon: Icon }) => (
                                      <Link key={name} href={href}>
                                        <a tabIndex={-1}>
                                          <button
                                            type='button'
                                            className='flex w-full items-start rounded-lg p-3 text-left hover:bg-gray-50'
                                            onClick={() => close()}
                                          >
                                            <Icon
                                              className='h-6 w-6 shrink-0 text-indigo-700'
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
                                          </button>
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
                            'group inline-flex h-full items-center rounded-md bg-white text-base font-medium hover:text-gray-900',
                          )}
                        >
                          <BriefcaseIcon
                            className='mr-1 inline h-5 w-5'
                            aria-hidden='true'
                          />
                          <span>キャリア</span>
                          <ChevronDownIcon
                            className={classNames(
                              open
                                ? 'rotate-180 text-gray-600'
                                : 'text-gray-400',
                              'ml-1 h-5 w-5 transition-transform group-hover:text-gray-500',
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
                            className='absolute left-full z-10 mt-3 w-screen max-w-md -translate-x-full px-2'
                          >
                            {({ close }) => (
                              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                                <div className='grid gap-2 bg-white p-5'>
                                  {CAREER_LINKS.map(
                                    ({ name, href, detail, icon: Icon }) => (
                                      <Link key={name} href={href}>
                                        <a tabIndex={-1}>
                                          <button
                                            type='button'
                                            className='flex w-full items-start rounded-lg p-3 text-left hover:bg-gray-50'
                                            onClick={() => close()}
                                          >
                                            <Icon
                                              className='h-6 w-6 shrink-0 text-indigo-700'
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
                                          </button>
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
                            'group inline-flex h-full items-center rounded-md bg-white text-base font-medium hover:text-gray-900',
                          )}
                        >
                          <span>その他</span>
                          <ChevronDownIcon
                            className={classNames(
                              open
                                ? 'rotate-180 text-gray-600'
                                : 'text-gray-400',
                              'ml-1 h-5 w-5 transition-transform group-hover:text-gray-500',
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
                            className='absolute left-full z-10 mt-3 w-screen max-w-md -translate-x-full px-2'
                          >
                            {({ close }) => (
                              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                                <div className='grid gap-2 bg-white p-5'>
                                  {OTHER_LINKS.map(
                                    ({ name, href, detail, icon: Icon }) => (
                                      <Link key={name} href={href}>
                                        <a tabIndex={-1}>
                                          <button
                                            type='button'
                                            className='flex w-full items-start rounded-lg p-3 text-left hover:bg-gray-50'
                                            onClick={() => close()}
                                          >
                                            <Icon
                                              className='h-6 w-6 shrink-0 text-indigo-700'
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
                                          </button>
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

                  <div>
                    <button
                      type='button'
                      className='inline-flex h-full items-center justify-start rounded-full bg-gray-100 py-1.5 pl-4 pr-40 text-sm text-gray-400 shadow'
                      onClick={openSearchDialog}
                    >
                      <SearchIcon
                        className='mr-4 h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                      <span>検索</span>
                    </button>
                  </div>
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
                className='fixed inset-0 z-10 origin-top-right p-4 transition lg:hidden'
              >
                {({ close }) => (
                  <>
                    <Popover.Overlay className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm' />
                    <div className='relative max-h-[calc(100vh-1rem)] overflow-y-scroll overscroll-contain rounded-lg bg-white py-3 shadow-lg ring-1 ring-black ring-opacity-5'>
                      <div className='p-3'>
                        <Popover.Button className='absolute top-0 right-0 inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500'>
                          <span className='sr-only'>Close menu</span>
                          <XIcon className='h-6 w-6' aria-hidden='true' />
                        </Popover.Button>
                        <nav className='grid gap-y-2'>
                          {SCHOOL_LINKS.map(({ name, href, icon: Icon }) => (
                            <Link key={name} href={href}>
                              <a tabIndex={-1}>
                                <button
                                  type='button'
                                  className='flex w-full items-center rounded-md px-3 py-2 text-left hover:bg-gray-50'
                                  onClick={() => close()}
                                >
                                  <Icon
                                    className='h-6 w-6 shrink-0 text-indigo-700'
                                    aria-hidden='true'
                                  />
                                  <span className='ml-3 text-base font-medium text-gray-900'>
                                    {name}
                                  </span>
                                </button>
                              </a>
                            </Link>
                          ))}
                          {ADDITIONAL_SCHOOL_LINKS.map(
                            ({ name, href, icon: Icon }) => (
                              <Link key={name} href={href}>
                                <a tabIndex={-1}>
                                  <button
                                    type='button'
                                    className='flex w-full items-center rounded-md px-3 py-2 text-left hover:bg-gray-50'
                                    onClick={() => close()}
                                  >
                                    <Icon
                                      className='h-6 w-6 shrink-0 text-indigo-700'
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
                      <hr className='mx-6' />
                      <div className='grid grid-cols-2 gap-x-1 gap-y-2 p-3'>
                        {APPLY_LINKS.map(({ name, href, icon: Icon }) => (
                          <Link key={name} href={href}>
                            <a tabIndex={-1}>
                              <button
                                type='button'
                                className='flex h-full w-full items-center rounded-lg px-3 py-1 text-left text-base font-medium hover:bg-gray-50'
                                onClick={() => close()}
                              >
                                <Icon
                                  className='my-1 mr-2 h-5 w-5 shrink-0 text-indigo-700'
                                  aria-hidden='true'
                                />
                                {name}
                              </button>
                            </a>
                          </Link>
                        ))}

                        {CAREER_LINKS.map(({ name, href, icon: Icon }) => (
                          <Link key={name} href={href}>
                            <a tabIndex={-1}>
                              <button
                                type='button'
                                className='flex h-full w-full items-center rounded-lg px-3 py-1 text-left text-base font-medium hover:bg-gray-50'
                                onClick={() => close()}
                              >
                                <Icon
                                  className='my-1 mr-2 h-5 w-5 shrink-0 text-indigo-700'
                                  aria-hidden='true'
                                />
                                {name}
                              </button>
                            </a>
                          </Link>
                        ))}

                        {OTHER_LINKS.map(({ name, href, icon: Icon }) => (
                          <Link key={name} href={href}>
                            <a tabIndex={-1}>
                              <button
                                type='button'
                                className='flex h-full w-full items-center rounded-lg px-3 py-1 text-left text-base font-medium hover:bg-gray-50'
                                onClick={() => close()}
                              >
                                <Icon
                                  className='my-1 mr-2 h-5 w-5 shrink-0 text-indigo-700'
                                  aria-hidden='true'
                                />
                                {name}
                              </button>
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

      <SearchDialog
        isOpen={isSearchDialogDisplayed}
        isAvailable={isSearchAvailable}
        onClose={closeSearchDialog}
      />
    </>
  );
};
