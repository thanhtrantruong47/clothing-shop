import { ReactNode } from 'react';
import stylesUtils from '../../styles/modules/stylesUtils.module.css';
import styles from './icon.module.css';

interface IconProps {
  children: ReactNode;
  onChange?: () => void;
}

const EndIcon = ({ children, onChange }: IconProps) => {
  return (
    <div className={`${stylesUtils.pointer} ${styles.endIcon}`} onChange={onChange}>
      {children}
    </div>
  );
};

export default EndIcon;
