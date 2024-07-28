import styles from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content?: string;
  classStyle?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Button = ({ content, classStyle, icon: IconComponent, onClick, ...res }: ButtonProps) => (
  <button className={`${styles.button} ${classStyle || ''}`} onClick={onClick} {...res}>
    {IconComponent && <IconComponent />}
    {content}
  </button>
);

export default Button;
