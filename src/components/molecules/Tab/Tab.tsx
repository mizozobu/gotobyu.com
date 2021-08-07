import {
  useState,
  cloneElement,
  FC,
  HTMLAttributes,
  ReactElement,
  MouseEventHandler,
} from 'react';
import { Props as TabNavBarProps } from '@c/atoms/TabNavBar';
import { TabContent, Props as TabContentProps } from '@c/atoms/TabContent';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: [ReactElement<TabNavBarProps>, ReactElement<TabContentProps>];
}

export const Tab: FC<Props> = ({
  children: [tabBar, tabContent],
  ...props
}: Props) => {
  const [activeTab, setActiveTab] = useState(
    tabContent.props.children[0].props.id,
  );

  const handleTabClick: MouseEventHandler<HTMLDivElement> = (e): void => {
    setActiveTab(e.currentTarget.id);
  };

  return (
    <div {...props}>
      <div
        {...tabBar.props}
        className={classNames('flex pt-2', tabBar.props.className)}
      >
        {tabBar.props.children.map((child) =>
          cloneElement(child, {
            key: child.props.id,
            active: child.props.id === activeTab,
            onClick: handleTabClick,
          }),
        )}
      </div>
      <TabContent {...tabContent.props}>
        {tabContent.props.children.map((child) =>
          cloneElement(child, {
            key: child.props.id,
            active: child.props.id === activeTab,
          }),
        )}
      </TabContent>
    </div>
  );
};
