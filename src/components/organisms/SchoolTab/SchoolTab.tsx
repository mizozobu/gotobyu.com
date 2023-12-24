import { useMemo, type ReactNode, type ReactElement } from 'react';
import { NextImage } from '@/components/atoms/NextImage';
import {
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
  TabList,
} from '@/components/atoms/Tab';
import { byuLogoImage } from '@/features/byu';
import { byuhLogoImage } from '@/features/byuh';
import { byuiLogoImage } from '@/features/byui';

/**
 * Props for {@link SchoolTabPanel}
 */
interface TabPanelForSchoolProps {
  /** School name for tab  */
  paneFor: 'byu' | 'byuh' | 'byui';
  /** Tab content */
  children: ReactNode;
}

/**
 * Tab panel for SchoolTabRoot
 */
const SchoolTabPanel = ({
  paneFor,
  children,
}: TabPanelForSchoolProps): JSX.Element => (
  <TabPanel data-panel-for={paneFor}>{children}</TabPanel>
);

/**
 * Props for {@link SchoolTabRoot}
 */
interface Props {
  /** Array of TabPanelForSchool */
  children: ReactElement<TabPanelForSchoolProps>[];
}

/**
 * Tab by BYU, BYUH, and BYUI
 */
const SchoolTabRoot = ({ children }: Props): JSX.Element => {
  const childrenMap = useMemo(
    () =>
      Object.fromEntries(
        children.map((tabPanelForSchool) => [
          tabPanelForSchool.props.paneFor,
          tabPanelForSchool,
        ]),
      ),
    [children],
  );

  return (
    <TabGroup>
      <TabList className='flex'>
        <Tab>
          <div className='flex items-center'>
            <NextImage
              className='mr-8 hidden h-8 w-8 shrink-0 md:block'
              src={byuLogoImage}
              alt='BYU Logo'
              placeholder='blur'
            />
            <span className='font-bold text-byu'>BYU</span>
          </div>
        </Tab>
        <Tab>
          <div className='flex items-center'>
            <NextImage
              className='mr-8 hidden h-8 w-8 shrink-0 md:block'
              src={byuhLogoImage}
              alt='BYUH Logo'
              placeholder='blur'
            />
            <span className='font-bold text-byuh'>BYUH</span>
          </div>
        </Tab>
        <Tab>
          <div className='flex items-center'>
            <NextImage
              className='mr-8 hidden h-8 w-8 shrink-0 md:block'
              src={byuiLogoImage}
              alt='BYUI Logo'
              placeholder='blur'
            />
            <span className='font-bold text-byui'>BYUI</span>
          </div>
        </Tab>
      </TabList>
      <TabPanels>
        {childrenMap.byu}
        {childrenMap.byuh}
        {childrenMap.byui}
      </TabPanels>
    </TabGroup>
  );
};

/**
 * Tab by BYU, BYUH, and BYUI
 */
export const SchoolTab = Object.assign(SchoolTabRoot, {
  Panel: SchoolTabPanel,
});
