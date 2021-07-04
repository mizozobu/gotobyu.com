import { FC } from 'react';
import { Table } from '@c/atoms/Table';
import { NextImage } from '@c/atoms/NextImage';
import styels from './EnglishRequirementTable.module.css';

export interface Props {
  data: {
    byu: {
      reading: number | undefined;
      writing: number | undefined;
      speaking: number | undefined;
      listening: number | undefined;
      total: number | undefined;
    };
    byuh: {
      reading: number | undefined;
      writing: number | undefined;
      speaking: number | undefined;
      listening: number | undefined;
      total: number | undefined;
    };
    byui: {
      reading: number | undefined;
      writing: number | undefined;
      speaking: number | undefined;
      listening: number | undefined;
      total: number | undefined;
    };
  };
}

export const EnglishRequirementTable: FC<Props> = ({ data }: Props) => (
  <Table className={styels['english-requirement-table']}>
    <thead>
      <tr>
        <th scope='col'>{}</th>
        <th scope='col'>Reading</th>
        <th scope='col'>Writing</th>
        <th scope='col'>Speaking</th>
        <th scope='col'>Listening</th>
        <th scope='col'>合計</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>
          <NextImage
            className='h-full p-4 inline mr-4'
            src='/byu.png'
            alt='BYU Logo'
            layout='fill'
            objectFit='scale-down'
          />
          <span className='text-byu'>BYU</span>
        </th>
        <td>{data.byu.reading ?? '-'}</td>
        <td>{data.byu.writing ?? '-'}</td>
        <td>{data.byu.speaking ?? '-'}</td>
        <td>{data.byu.listening ?? '-'}</td>
        <td>{data.byu.total ?? '-'}</td>
      </tr>
      <tr>
        <th scope='row'>
          <NextImage
            className='h-full p-4 inline mr-4'
            src='/byuh.png'
            alt='BYUH Logo'
            layout='fill'
            objectFit='scale-down'
          />
          <span className='text-byuh'>BYUH</span>
        </th>
        <td>{data.byuh.reading ?? '-'}</td>
        <td>{data.byuh.writing ?? '-'}</td>
        <td>{data.byuh.speaking ?? '-'}</td>
        <td>{data.byuh.listening ?? '-'}</td>
        <td>{data.byuh.total ?? '-'}</td>
      </tr>
      <tr>
        <th scope='row' className='px-24'>
          <NextImage
            className='h-full p-4 inline mr-4'
            src='/byui.png'
            alt='BYUI Logo'
            layout='fill'
            objectFit='scale-down'
          />
          <span className='text-byui'>BYUI</span>
        </th>
        <td>{data.byui.reading ?? '-'}</td>
        <td>{data.byui.writing ?? '-'}</td>
        <td>{data.byui.speaking ?? '-'}</td>
        <td>{data.byui.listening ?? '-'}</td>
        <td>{data.byui.total ?? '-'}</td>
      </tr>
    </tbody>
  </Table>
);
