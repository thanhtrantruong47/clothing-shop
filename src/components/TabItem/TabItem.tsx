import styles from './tabItem.module.css';

interface TabItemProps {
  label: string;
  isActive: boolean;
  onChange: () => void;
}

const TabItem = ({ label, isActive, onChange }: TabItemProps) => {
  return (
    <div className={`${styles.tab} ${isActive ? styles.active : ''}`} onClick={onChange} aria-selected={isActive}>
      {label}
    </div>
  );
};

export default TabItem;
