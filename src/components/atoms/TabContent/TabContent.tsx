import { FC, HTMLAttributes, ReactElement } from 'react';
import { Props as TabPaneProps } from '@c/atoms/TabPane';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<TabPaneProps>[];
}

export const TabContent: FC<Props> = (props: Props) => <div {...props} />;
