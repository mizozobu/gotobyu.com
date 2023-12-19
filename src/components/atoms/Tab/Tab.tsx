'use client';

import { Tab as TwTab } from '@headlessui/react';
import classNames from 'classnames';
import type { ReactNode } from 'react';
import styles from './Tab.module.css';

/**
 * Props for {@link TabRoot}
 */
interface TabRootProps {
  /** className to pass */
  className?: string;
  /** Tab content */
  children: ReactNode;
}

/**
 * Styled {@link Tab}
 */
export const Tab = ({ className, children }: TabRootProps): JSX.Element => (
  <TwTab
    className={({ selected }) =>
      classNames(
        styles.tab,
        className,
        'flex basis-full items-center rounded-t-xl border p-2',
        selected ? '-mb-px -mt-2 border-b-0' : 'border-b-1 bg-gray-50',
      )
    }
  >
    <div className='mx-auto'>{children}</div>
  </TwTab>
);

/**
 * Props for {@link Panel}
 */
interface Props {
  /** Tab content */
  children: ReactNode;
}

/**
 * Styled {@link Tab.Panel}
 */
export const TabPanel = ({ children }: Props): JSX.Element => (
  <TwTab.Panel className='space-y-8 rounded-b-xl border-b border-l border-r px-4 py-8 md:px-8'>
    {children}
  </TwTab.Panel>
);

export const TabGroup = TwTab.Group;
export const TabList = TwTab.List;
export const TabPanels = TwTab.Panels;
