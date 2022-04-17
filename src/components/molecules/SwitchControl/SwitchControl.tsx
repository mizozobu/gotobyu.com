import { Switch } from '@headlessui/react';
import classNames from 'classnames';
import type { ReactNode } from 'react';

/**
 * Props for {@link SwitchControl}
 */
interface Props {
  /** Label */
  label: ReactNode;
  /** Text for screen reader */
  sr: string;
  /** Whether the switch is on */
  checked: boolean;
  /** Change event handler */
  onChange: (checked: boolean) => void;
  /** className to pass */
  className?: string;
}

/**
 * Toggle wwitch
 */
export const SwitchControl = ({
  label,
  sr,
  checked,
  onChange,
  className,
}: Props): JSX.Element => (
  <Switch.Group data-noindex='true'>
    <div
      className={classNames(
        'flex items-center rounded-md bg-indigo-50 px-3 py-1.5',
        className,
      )}
    >
      <Switch.Label className='mr-2 text-sm'>{label}</Switch.Label>
      <Switch
        checked={checked}
        onChange={onChange}
        className={classNames(
          'relative inline-flex h-6 w-11 items-center rounded-full',
          checked ? 'bg-indigo-700' : 'bg-indigo-100',
        )}
      >
        <span className='sr-only'>{sr}</span>
        <span
          className={classNames(
            'inline-block h-4 w-4 rounded-full bg-white transition-transform',
            checked ? 'translate-x-6' : 'translate-x-1',
          )}
        />
      </Switch>
    </div>
  </Switch.Group>
);
