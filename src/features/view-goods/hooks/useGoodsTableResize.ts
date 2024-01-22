import { useEffect, useRef, useState } from "react";
import { getColumnWidths } from "../model/table-helper";
import { TColumnWidths } from "../types/columnWidths";
import { setLocalStorage } from "@utils/localStorage-service";
import { GoodsViewLocalStorageKeys } from "../enums/viewLocalStorageKeys.enum";
import { COLUMNS_MIN_WIDTH } from "../constants/columnsMinWidth";



function useGoodsTableResize() {
    const [columnWidths, setColumnWidths] = useState<TColumnWidths>(getColumnWidths);
    const [prevX, setPrevX] = useState<number | null>(null);
    const [prevWidth, setPrevWidth] = useState<number | null>(null);
    const [columnName, setColumnName] = useState<keyof TColumnWidths | null>(null);
    const [saveWidthTimeout, setSaveWidthTimeout] = useState<number | null>(null);
    const [moving, setMoving] = useState(false);
    const tableRef = useRef<any>(null);

    // function resizerMouseMoveHandler(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    function resizerMouseMoveHandler(e: MouseEvent) {
        saveWidthTimeout !== null && clearTimeout(saveWidthTimeout);
        setColumnWidths((prev) => {
            if (prevX === null || columnName === null || prevWidth === null) {
                return prev;
            }
            const newWidth = prevWidth - (prevX - e.clientX);
            setSaveWidthTimeout(() => (setTimeout(() => {
                setLocalStorage(GoodsViewLocalStorageKeys.COLUMN_WIDTHS, {...prev, [columnName]: newWidth < COLUMNS_MIN_WIDTH[columnName] ? COLUMNS_MIN_WIDTH[columnName] : newWidth});
            }, 500)));
            return {...prev, [columnName]: newWidth < COLUMNS_MIN_WIDTH[columnName] ? COLUMNS_MIN_WIDTH[columnName] : newWidth};
        });
    }

    function resizerMouseUpHandler() {
        setPrevX(null);
        setColumnName(null);
        document.removeEventListener('mousemove', resizerMouseMoveHandler);
        document.removeEventListener('mouseup', resizerMouseUpHandler);
    }

    function resizerMouseDownHandler(e: React.MouseEvent<HTMLSpanElement, MouseEvent>, column: keyof TColumnWidths) {
        console.log('Start x: ', e.clientX);
        setPrevX(e.clientX);
        setColumnName(column);
        setPrevWidth(columnWidths[column]);
        setMoving(true);
        
    }

    useEffect(() => {
        if (prevX !== null && columnName !== null && moving) {
            document.addEventListener('mousemove', resizerMouseMoveHandler);
            document.addEventListener('mouseup', resizerMouseUpHandler);        
        }
        else {
            document.removeEventListener('mousemove', resizerMouseMoveHandler);
            document.removeEventListener('mouseup', resizerMouseUpHandler);    
        }
    }, [prevX, columnName, moving]);

    useEffect(() => () => {
        document.removeEventListener('mousemove', resizerMouseMoveHandler);
        document.removeEventListener('mouseup', resizerMouseUpHandler);
    }, []);
    return { onMouseDown: resizerMouseDownHandler, tableRef, columnWidths };
};

export default useGoodsTableResize;