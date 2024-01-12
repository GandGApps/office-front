import clsx from "clsx";
import styles from './Input.module.scss';

type InputProps = { projectType?: string} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

function Input({projectType="default", ...props}: InputProps) {
    return(
        <input {...props} className={clsx(styles[projectType])}/>
    );
};

export default Input;