import Head from 'next/head';
import { FC } from 'react';

export interface Props {
  children?: string;
}

export const Title: FC<Props> = ({ children = '' }: Props) => (
  <Head>
    <title>
      {children ? `${children} |` : ''} BYU Management Society Tokyo Chapter
    </title>
  </Head>
);
