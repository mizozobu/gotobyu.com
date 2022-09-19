import { useMemo, type ReactNode, type ReactElement } from 'react';
import { NextImage } from '@/components/atoms/NextImage';
import { Tab } from '@/components/atoms/Tab';
import byuLogoImage from '@/features/byu/assets/byu-logo.png';
import byuhLogoImage from '@/features/byuh/assets/byuh-logo.png';
import byuiLogoImage from '@/features/byui/assets/byui-logo.png';

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
  <Tab.Panel data-panel-for={paneFor}>{children}</Tab.Panel>
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
    <Tab.Group>
      <Tab.List className='flex'>
        <Tab>
          <div className='flex items-center'>
            <NextImage
              className='mr-8 hidden h-8 w-8 shrink-0 md:block'
              src={byuLogoImage}
              alt='BYU Logo'
              placeholder='blur'
              layout='fill'
              objectFit='scale-down'
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
              layout='fill'
              objectFit='scale-down'
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
              layout='fill'
              objectFit='scale-down'
            />
            <span className='font-bold text-byui'>BYUI</span>
          </div>
        </Tab>
      </Tab.List>
      <Tab.Panels>
        {childrenMap.byu}
        {childrenMap.byuh}
        {childrenMap.byui}
      </Tab.Panels>
    </Tab.Group>
  );
};

/**
 * Tab by BYU, BYUH, and BYUI
 */
export const SchoolTab = Object.assign(SchoolTabRoot, {
  Panel: SchoolTabPanel,
});
