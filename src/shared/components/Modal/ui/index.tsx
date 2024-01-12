import { ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
    children?: ReactNode
}

function Modal({children}: ModalProps) {
    return createPortal(
        children,
        document.body,
        "portal"
    );
};

export default Modal;