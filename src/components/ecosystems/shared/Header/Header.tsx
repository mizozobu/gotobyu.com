import { Popover } from '@headlessui/react';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  LoginIcon,
  MenuIcon,
  SearchIcon,
} from '@heroicons/react/outline';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
import { CirculatingCircles } from '@c/atoms/CirculatingCircles';
import type { Props as HeaderMobileMenuDialogProps } from '@c/ecosystems/shared/HeaderMobileMenuDialog';
import type { Props as SearchDialogProps } from '@c/ecosystems/shared/SearchDialog';
import { HeaderMenuLink } from '@c/molecules/HeaderMenuLink';
import { HeaderMenuPopover } from '@c/organisms/HeaderMenuPopover';
import {
  SCHOOL_LINKS,
  ADDITIONAL_SCHOOL_LINKS,
  APPLY_LINKS,
  CAREER_LINKS,
  OTHER_LINKS,
} from '@d/links';
import styles from './Header.module.css';

/**
 * Dynamically imported HeaderMobileMenuDialog with no SSR
 */
const HeaderMobileMenuDialog = dynamic<HeaderMobileMenuDialogProps>(
  () =>
    import('@c/ecosystems/shared/HeaderMobileMenuDialog').then(
      ({ HeaderMobileMenuDialog: Component }) => Component,
    ),
  { ssr: false },
);

/**
 * Dynamically imported SearchDialog with no SSR
 */
const SearchDialog = dynamic<SearchDialogProps>(
  () =>
    import('@c/ecosystems/shared/SearchDialog').then(
      ({ SearchDialog: Component }) => Component,
    ),
  { ssr: false },
);

/**
 * Props for {@link Header}
 */
interface Props {
  show: boolean;
  loading: boolean;
  isSearchAvailable: boolean;
}

/**
 * Header
 * @see {@link https://tailwindui.com/components/marketing/elements/headers}
 */
export const Header = ({
  show,
  loading,
  isSearchAvailable,
}: Props): JSX.Element => {
  const [isMenuDialogDisplayed, setIsMenuDialogDisplayed] = useState(false);
  const [isSearchDialogDisplayed, setIsSearchDialogDisplayed] = useState(false);

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
      <div
        className={classNames(
          'sticky z-10 mb-1 bg-white',
          styles.header,
          loading ? styles.loading : styles.loaded,
          show ? styles.show : styles.hide,
        )}
        data-noindex='true'
      >
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
              <button
                type='button'
                className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500'
                onClick={openMenuDialog}
              >
                <span className='sr-only'>Open menu</span>
                <MenuIcon className='h-6 w-6' aria-hidden='true' />
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
              <HeaderMenuPopover label='入学準備' icon={LoginIcon}>
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
      </div>

      <HeaderMobileMenuDialog
        isOpen={isMenuDialogDisplayed}
        onClose={closeMenuDialog}
      />

      <SearchDialog
        isOpen={isSearchDialogDisplayed}
        isAvailable={isSearchAvailable}
        onClose={closeSearchDialog}
      />
    </>
  );
};
