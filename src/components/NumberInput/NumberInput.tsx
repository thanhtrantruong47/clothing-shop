import { ChangeEvent, memo } from 'react';
import styles from './numberInput.module.css';
import PlusIcon from '../Icon/PlusIcon';
import MinusIcon from '../Icon/MinusIcon';
import Input from '../Input/Input';
import Button from '../Button/Button';

interface NumberInputProps {
  value: number; // Current quantity
  onChange: (value: number) => void; // Callback to handle quantity changes
}

const NumberInput = ({ value, onChange }: NumberInputProps) => {
  const increment = () => {
    onChange(value + 1);
  };

  const decrement = () => {
    onChange(value > 1 ? value - 1 : 1);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue) && newValue >= 1) {
      onChange(newValue);
    }
  };

  return (
    <div className={styles.container}>
      <Button className={styles.button} onClick={decrement} disabled={value <= 1} icon={MinusIcon} />
      <Input className={styles.quantity} type="number" value={value} onChange={handleChange} />
      <Button className={styles.button} onClick={increment} icon={PlusIcon} />
    </div>
  );
};

export default memo(NumberInput);
