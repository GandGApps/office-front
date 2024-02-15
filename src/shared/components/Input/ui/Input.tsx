import clsx from "clsx";
import styles from './Input.module.scss';
import { forwardRef } from "react";

type InputProps = { projectType?: string, error?: boolean } & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type Ref = HTMLInputElement;

const Input = forwardRef<Ref, InputProps>(function({projectType="default", error=false, ...props}, ref) {
    return(
        <input className={clsx(styles[projectType])} ref={ref} style={{ border: error ?  '1px solid $red' : undefined }} {...props}/>
    );
});

export default Input;