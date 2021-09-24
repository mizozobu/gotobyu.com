import { FC } from 'react';
import { ExternalLink } from '@c/atoms/ExternalLink';
import { Tab, TabContent, TabNav, TabNavBar, TabPane } from '@c/molecules/Tab';
import { NextImage } from '@c/atoms/NextImage';
import { List } from '@c/atoms/List';
import { Item } from '@c/atoms/Item';
import { BYUDeadlineTable } from '@c/organisms/BYUDeadlineTable';
import { BYUHDeadlineTable } from '@c/organisms/BYUHDeadlineTable';
import { BYUIDeadlineTable } from '@c/organisms/BYUIDeadlineTable';
import byuLogoImage from '@p/byu.png';
import byuhLogoImage from '@p/byuh.png';
import byuiLogoImage from '@p/byui.png';

export interface Props {}

export const DeadlineTabs: FC<Props> = () => (
  <Tab>
    <TabNavBar>
      <TabNav id='byu' className='flex items-center justify-center w-1/3 p-2'>
        <NextImage
          className='hidden md:block w-8 h-8 mr-8'
          src={byuLogoImage}
          alt='BYU Logo'
          placeholder='blur'
          layout='fill'
          objectFit='scale-down'
        />
        <span className='text-byu font-bold'>BYU</span>
      </TabNav>
      <TabNav id='byuh' className='flex items-center justify-center w-1/3 p-2'>
        <NextImage
          className='hidden md:block w-8 h-8 mr-8'
          src={byuhLogoImage}
          alt='BYUH Logo'
          placeholder='blur'
          layout='fill'
          objectFit='scale-down'
        />
        <span className='text-byuh font-bold'>BYUH</span>
      </TabNav>
      <TabNav id='byui' className='flex items-center justify-center w-1/3 p-2'>
        <NextImage
          className='hidden md:block w-8 h-8 mr-8'
          src={byuiLogoImage}
          alt='BYUI Logo'
          placeholder='blur'
          layout='fill'
          objectFit='scale-down'
        />
        <span className='text-byui font-bold'>BYUI</span>
      </TabNav>
    </TabNavBar>
    <TabContent>
      <TabPane
        id='byu'
        className='px-4 md:px-8 py-8 border border-t-0 space-y-8'
      >
        <BYUDeadlineTable />

        <p>優先申込締切までに申込を完了すると選考を有利に進められます。</p>

        <List title='参考' className='list-disc list-inside'>
          <Item>
            <ExternalLink href='https://enrollment.byu.edu/admissions/deadlines'>
              BYUの申込締切
            </ExternalLink>
          </Item>
          <Item>
            <ExternalLink href='https://enrollment2.byu.edu/academic-calendar'>
              BYUの年間カレンダー
            </ExternalLink>
          </Item>
        </List>
      </TabPane>
      <TabPane
        id='byuh'
        className='px-4 md:px-8 py-8 border border-t-0 space-y-8'
      >
        <BYUHDeadlineTable />

        <List title='参考' className='list-disc list-inside'>
          <Item>
            <ExternalLink href='https://hookele.byuh.edu/application-deadlines-decisions-schedule'>
              BYUHの申込締切
            </ExternalLink>
          </Item>
          <Item>
            <ExternalLink href='https://registrar.byuh.edu/academic-dates'>
              BYUHの年間カレンダー
            </ExternalLink>
          </Item>
        </List>
      </TabPane>
      <TabPane
        id='byui'
        className='px-4 md:px-8 py-8 border border-t-0 space-y-8'
      >
        <BYUIDeadlineTable />

        <p>優先申込締切までに申込を完了すると選考を有利に進められます。</p>

        <List title='参考' className='list-disc list-inside'>
          <Item>
            <ExternalLink href='https://hookele.byuh.edu/application-deadlines-decisions-schedules'>
              BYUIの申込締切
            </ExternalLink>
          </Item>
          <Item>
            <ExternalLink href='https://www.byui.edu/student-records/academic-deadlines'>
              BYUIの年間カレンダー
            </ExternalLink>
          </Item>
        </List>
      </TabPane>
    </TabContent>
  </Tab>
);
