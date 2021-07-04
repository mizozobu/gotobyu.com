import { FC, Fragment, HTMLAttributes, ReactElement } from 'react';
import { Props as TabNavProps } from '@c/atoms/TabNav';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<TabNavProps>[];
}

export const TabNavBar: FC<Props> = (props: Props) => <Fragment {...props} />;
