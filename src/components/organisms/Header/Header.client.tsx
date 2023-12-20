'use client';

import { Popover } from '@headlessui/react';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
// import { useRouter } from 'next/navigation';
import {
  useState,
  // useEffect,
} from 'react';
import { CirculatingCircles } from '@/components/atoms/CirculatingCircles';
import { Link } from '@/components/atoms/Link';
import { HeaderMenuLink } from '@/components/molecules/HeaderMenuLink';
import { HeaderMenuPopover } from '@/components/organisms/HeaderMenuPopover';
import type { Props as HeaderMobileMenuDialogProps } from '@/components/organisms/HeaderMobileMenuDialog';
import {
  SCHOOL_LINKS,
  ADDITIONAL_SCHOOL_LINKS,
  APPLY_LINKS,
  CAREER_LINKS,
  OTHER_LINKS,
} from '@/data/links';
import type { Props as SearchDialogProps } from '@/features/search';
import {
  useScrollDirection,
  SCROLL_DIRECTION,
} from '@/hooks/useScrollDirection';
import styles from './Header.module.css';

/**
 * Dynamically imported HeaderMobileMenuDialog with no SSR
 */
const HeaderMobileMenuDialog = dynamic<HeaderMobileMenuDialogProps>(
  () =>
    import('@/components/organisms/HeaderMobileMenuDialog').then(
      ({ HeaderMobileMenuDialog: Component }) => Component,
    ),
  { ssr: false },
);

/**
 * Dynamically imported SearchDialog with no SSR
 */
const SearchDialog = dynamic<SearchDialogProps>(
  () =>
    import('@/features/search').then(
      ({ SearchDialog: Component }) => Component,
    ),
  { ssr: false },
);

/**
 * Header
 * @see {@link https://tailwindui.com/components/marketing/elements/headers}
 */
export const Header = (): JSX.Element => {
  // const router = useRouter();
  const scrollDirectionY = useScrollDirection({ threshold: 50 });
  const [
    loading,
    // setLoading,
  ] = useState(false);
  const [isMenuDialogDisplayed, setIsMenuDialogDisplayed] = useState(false);
  const [isSearchDialogDisplayed, setIsSearchDialogDisplayed] = useState(false);

  // useEffect(() => {
  //   const startLoading = (): void => setLoading(true);
  //   const endLoading = (): void => {
  //     window.setTimeout(() => {
  //       setLoading(false);
  //     }, 500);
  //   };

  //   router.events.on('routeChangeStart', startLoading);
  //   router.events.on('routeChangeComplete', endLoading);

  //   return () => {
  //     router.events.off('routeChangeStart', startLoading);
  //     router.events.off('routeChangeComplete', endLoading);
  //   };
  // }, [router.events]);

  /**
   * Open menu dialog
   */
  const openMenuDialog = (): void => {
    setIsMenuDialogDisplayed(true);
  };

  /**
   * Close menu dialog
   */
  const closeMenuDialog = (): void => {
    setIsMenuDialogDisplayed(false);
  };

  /**
   * Open search dialog
   */
  const openSearchDialog = (): void => {
    setIsSearchDialogDisplayed(true);
  };

  /**
   * Close search dialog
   */
  const closeSearchDialog = (): void => {
    setIsSearchDialogDisplayed(false);
  };

  return (
    <>
      <header
        className={classNames(
          'sticky z-10 mb-1 bg-white',
          styles.header,
          loading ? styles.loading : styles.loaded,
          scrollDirectionY === SCROLL_DIRECTION.up ? styles.show : styles.hide,
        )}
        data-noindex='true'
        data-testid='header'
      >
        <div className='px-4 sm:px-6'>
          <div className='relative flex h-16 items-center justify-between'>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
              <Link href='/'>
                <span className='sr-only'>トップ</span>
                <CirculatingCircles className='h-8 w-8' />
              </Link>
            </div>
            <div className='space-x-1 lg:hidden'>
              <button
                type='button'
                className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500'
                onClick={openSearchDialog}
              >
                <span className='sr-only'>検索</span>
                <MagnifyingGlassIcon className='h-6 w-6' aria-hidden='true' />
              </button>
              <button
                type='button'
                className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500'
                onClick={openMenuDialog}
              >
                <span className='sr-only'>メニュー</span>
                <Bars3Icon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>

            <Popover.Group as='nav' className='hidden space-x-4 lg:flex'>
              <HeaderMenuPopover label='各大学の情報' icon={AcademicCapIcon}>
                {({ close }) => (
                  <>
                    {SCHOOL_LINKS.map(({ name, detail, href, icon }) => (
                      <HeaderMenuLink
                        key={name}
                        name={name}
                        detail={detail}
                        href={href}
                        icon={icon}
                        onClick={close}
                      />
                    ))}
                    <hr />
                    {ADDITIONAL_SCHOOL_LINKS.map(
                      ({ name, detail, href, icon }) => (
                        <HeaderMenuLink
                          key={name}
                          name={name}
                          detail={detail}
                          href={href}
                          icon={icon}
                          onClick={close}
                        />
                      ),
                    )}
                  </>
                )}
              </HeaderMenuPopover>
              <HeaderMenuPopover
                label='入学準備'
                icon={ArrowRightOnRectangleIcon}
              >
                {({ close }) =>
                  APPLY_LINKS.map(({ name, detail, href, icon }) => (
                    <HeaderMenuLink
                      key={name}
                      name={name}
                      detail={detail}
                      href={href}
                      icon={icon}
                      onClick={close}
                    />
                  ))
                }
              </HeaderMenuPopover>
              <HeaderMenuPopover label='キャリア' icon={BriefcaseIcon}>
                {({ close }) =>
                  CAREER_LINKS.map(({ name, detail, href, icon }) => (
                    <HeaderMenuLink
                      key={name}
                      name={name}
                      detail={detail}
                      href={href}
                      icon={icon}
                      onClick={close}
                    />
                  ))
                }
              </HeaderMenuPopover>
              <HeaderMenuPopover label='その他'>
                {({ close }) =>
                  OTHER_LINKS.map(({ name, detail, href, icon }) => (
                    <HeaderMenuLink
                      key={name}
                      name={name}
                      detail={detail}
                      href={href}
                      icon={icon}
                      onClick={close}
                    />
                  ))
                }
              </HeaderMenuPopover>

              <div>
                <button
                  type='button'
                  className='inline-flex h-full items-center justify-start rounded-full bg-gray-100 py-1.5 pl-4 pr-40 text-sm text-gray-400 shadow'
                  onClick={openSearchDialog}
                >
                  <MagnifyingGlassIcon
                    className='mr-4 h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                  <span>検索</span>
                </button>
              </div>
            </Popover.Group>
          </div>
        </div>
      </header>

      <HeaderMobileMenuDialog
        isOpen={isMenuDialogDisplayed}
        onClose={closeMenuDialog}
      />

      <SearchDialog
        isOpen={isSearchDialogDisplayed}
        onClose={closeSearchDialog}
      />
    </>
  );
};
