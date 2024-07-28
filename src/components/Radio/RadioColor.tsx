import styles from './radio.module.css';

interface RadioColorProps {
  color: string;
  isChecked: boolean;
  onChange: (color: string) => void; // Update type to match usage
}

const RadioColor = ({ color, isChecked, onChange }: RadioColorProps) => {
  const circleStyle = {
    '--circle-background': color,
    backgroundColor: !isChecked ? color : 'white',
    border: isChecked ? 'var(--border-sm) solid var(--color-text-product)' : 'none',
  } as React.CSSProperties;

  // Pass color to onChange when clicked
  const handleChange = () => {
    onChange(color);
  };

  return (
    <>
      <input
        type="radio"
        name="color"
        value={color}
        id={color}
        className={styles.colorRadio}
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor={color} className={styles.colorOption} aria-label={`Select ${color}`}>
        <div className={`${styles.colorCircle}`} style={circleStyle} />
      </label>
    </>
  );
};

export default RadioColor;
