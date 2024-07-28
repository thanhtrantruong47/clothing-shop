import { useState } from 'react';
import stylesUtils from '../../styles/modules/stylesUtils.module.css';
import styles from './tabList.module.css';
import TabItem from '../TabItem/TabItem';

interface TabListProps {
  listNavItems: string[];
  onChangeTab: (item: string) => void;
}

const TabList = ({ listNavItems, onChangeTab }: TabListProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (index: number, item: string) => {
    setActiveTab(index);
    onChangeTab(item);
  };

  return (
    <div className={`${stylesUtils.flexCenter} ${styles.tabList}`}>
      {listNavItems.map((item, index) => (
        <TabItem key={item} label={item} isActive={index === activeTab} onChange={() => handleTabChange(index, item)} />
      ))}
    </div>
  );
};

export default TabList;
