import { useState } from 'react';
import styles from './radio.module.css';
import RadioColor from './RadioColor';

interface ListOptionsProps {
  options: string[];
  onChange: (color: string) => void; // Updated type
}

const RadioGroup = ({ options, onChange }: ListOptionsProps) => {
  const [selectedColor, setSelectedColor] = useState<string>(options[0]);

  const handleRadioChange = (color: string) => {
    setSelectedColor(color);
    onChange(color);
  };

  return (
    <div className={styles.listColor}>
      {options.map(option => (
        <RadioColor
          key={option}
          color={option}
          isChecked={option === selectedColor}
          onChange={handleRadioChange} // Pass handleRadioChange to RadioColor
        />
      ))}
    </div>
  );
};

export default RadioGroup;
