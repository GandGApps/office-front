import { ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = {
    children?: ReactNode
}

function Portal({children}: Props) {
    return createPortal(
        children,
        document.body,
        "portal"
    );
};

export default Portal;