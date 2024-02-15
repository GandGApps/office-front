import { ReactNode, useEffect } from "react";
import styles from './Popup.module.scss';

type Props = {
    children: ReactNode;
    overlayClose?: true;
    onClose: () => void;
}

type ClosableProps = {
    children: ReactNode;
    overlayClose: false;
}

function Popup(props: Props | ClosableProps) {

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [])

    return(
        <div className={styles.overlay} onClick={() => props.overlayClose && props.onClose()}>
            {props.children}
        </div>
    );
};

export default Popup;