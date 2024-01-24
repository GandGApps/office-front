import { useEffect, useState } from "react";
import { TContextMenuLocation } from "../types/contextMenuLocation";

function useTableContextMenu() {
    const [openContextMenu, setOpenContextMenu] = useState<boolean>(false);
    const [points, setPoints] = useState<TContextMenuLocation>({ x: 0, y: 0});

    function handleContextMenuEvent(e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, item: any) {
        e.preventDefault();
        setPoints({x: e.pageX, y: e.pageY});
        setOpenContextMenu(true);
    }

    useEffect(() => {
        const handleClick = () => setOpenContextMenu(false);
        const handleScroll = (e: Event) => e.preventDefault();
        if (openContextMenu) {
            window.addEventListener('scroll', handleScroll)
            window.addEventListener('click', handleClick);
        }
        else {
            window.removeEventListener('click', handleClick);
            window.removeEventListener('scroll', handleScroll);
        }
        return () => {
            window.removeEventListener('click', handleClick);
            window.removeEventListener('scroll', handleScroll);
        }
    }, [openContextMenu]);

    return({
        openContextMenu,
        onContextMenu: handleContextMenuEvent,
        points
    });
};

export default useTableContextMenu;