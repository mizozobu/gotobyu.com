import { Switch } from '@headlessui/react';
import { FC, ReactNode } from 'react';

export interface Props {
  label: ReactNode;
  sr: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export const SwitchControl: FC<Props> = ({
  label,
  sr,
  checked,
  onChange,
  className = '',
}: Props) => (
  <Switch.Group>
    <div
      className={classNames(
        'flex items-center px-3 py-1.5 rounded-md bg-indigo-50',
        className,
      )}
    >
      <Switch.Label className='mr-2 text-sm'>{label}</Switch.Label>
      <Switch
        checked={checked}
        onChange={onChange}
        className={classNames(
          'relative inline-flex items-center h-6 rounded-full w-11',
          checked ? 'bg-indigo-700' : 'bg-indigo-100',
        )}
      >
        <span className='sr-only'>{sr}</span>
        <span
          className={classNames(
            'inline-block w-4 h-4 transition-transform bg-white rounded-full',
            checked ? 'translate-x-6' : 'translate-x-1',
          )}
        />
      </Switch>
    </div>
  </Switch.Group>
);
