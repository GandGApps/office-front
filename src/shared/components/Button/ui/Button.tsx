import { ReactNode } from "react";
import styles from './Button.module.scss';
import clsx from "clsx";

type Props = {
    children?: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    projectType?: string[];
    disabled?: boolean;
    style?: React.CSSProperties | undefined
}

function Button({ children, onClick, projectType=["default"], type="button", disabled=false, style}: Props) {
    return(
        <button 
            type={type}
            style={style}
            onClick={onClick}
            disabled={disabled}
            className={clsx(styles.button, ...projectType.map((cn) => styles[cn]))}>{children}</button>
    );
};

export default Button;