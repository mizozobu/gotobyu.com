import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import { Fragment, ComponentType, ReactNode } from 'react';

/**
 * Props for {@link HeaderMenuPopover}
 */
interface Props {
  label: string;
  icon?: ComponentType<{ className?: string }>;
  children: ({ close }: { close: () => void }) => ReactNode;
}

/**
 * Header menu popover
 */
export const HeaderMenuPopover = ({
  label,
  icon: Icon,
  children,
}: Props): JSX.Element => (
  <Popover className='relative'>
    {({ open }) => (
      <>
        <Popover.Button
          className={classNames(
            open ? 'text-gray-900' : 'text-gray-500',
            'group inline-flex h-full items-center rounded-md bg-white text-base font-medium hover:text-gray-900',
          )}
        >
          {Icon && <Icon className='mr-1 inline h-5 w-5' aria-hidden='true' />}
          <span>{label}</span>
          <ChevronDownIcon
            className={classNames(
              open ? 'rotate-180 text-gray-600' : 'text-gray-400',
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
              <div className='grid gap-2 overflow-hidden rounded-lg bg-white p-5 shadow-lg ring-1 ring-black ring-opacity-5'>
                {children({ close })}
              </div>
            )}
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
);
