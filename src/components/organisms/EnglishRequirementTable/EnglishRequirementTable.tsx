import { NextImage } from '@c/atoms/NextImage';
import { Table } from '@c/atoms/Table';
import { TableCaption } from '@c/atoms/TableCaption';
import type { EnglishRequirement } from '@d/english-requirement';
import type { SchoolDataCollection } from '@d/school';
import byuLogoImage from '@p/byu/byu-logo.png';
import byuhLogoImage from '@p/byuh/byuh-logo.png';
import byuiLogoImage from '@p/byui/byui-logo.png';
import styles from './EnglishRequirementTable.module.css';

/**
 * Props for {@link EnglishRequirementTable}
 */
interface Props {
  /** Exam name */
  exam: string;
  /** Score data for each school */
  data: SchoolDataCollection<EnglishRequirement>;
}

/**
 * Table to compare the english requirement for each school
 */
export const EnglishRequirementTable = ({ exam, data }: Props): JSX.Element => (
  <Table className={styles['english-requirement-table']}>
    <TableCaption
      description={`BYU、BYUH、BYUIの入学に必要な${exam}のスコア(Reading、Writing、Speaking、Listening、合計)`}
    >
      入学に必要な{exam}のスコア
    </TableCaption>
    <thead data-noindex='true'>
      <tr>
        <th scope='col'>{}</th>
        <th scope='col'>Reading</th>
        <th scope='col'>Writing</th>
        <th scope='col'>Speaking</th>
        <th scope='col'>Listening</th>
        <th scope='col'>合計</th>
      </tr>
    </thead>
    <tbody data-noindex='true'>
      <tr>
        <th scope='row'>
          <NextImage
            className='mr-4 inline h-full p-4'
            src={byuLogoImage}
            alt='BYU Logo'
            placeholder='blur'
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
            className='mr-4 inline h-full p-4'
            src={byuhLogoImage}
            alt='BYUH Logo'
            placeholder='blur'
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
            className='mr-4 inline h-full p-4'
            src={byuiLogoImage}
            alt='BYUI Logo'
            placeholder='blur'
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
