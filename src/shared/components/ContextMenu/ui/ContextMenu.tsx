import { Fragment, memo } from "react";
import styles from './ContextMenu.module.scss';
import Modal from "@components/Modal/ui";
import { Button } from "@components/Button";
import useWindowDimensions from "@hooks/useWindowDimension";

type ContextMenuItem = {
    label: string;
    onClick: (...params: any) => any;
}[];

type Props = {
    backgroundColor?: string;
    top: number;
    left: number;
    data: ContextMenuItem[]
}

function ContextMenu({backgroundColor, top, left, data}: Props) {
    const { height } = useWindowDimensions();
    return(
        <Modal>
            <div 
                className={styles.contextMenu_container}
                style={{
                    backgroundColor: backgroundColor || "#F6FBFF",
                    bottom: (height / 2) < top ? (height - top) : undefined,
                    top: (height / 2) < top ? undefined : top,
                    left
                }}>
                    {
                        data.map((itemsArr, itemArrIndex) => (
                            <Fragment key={itemArrIndex}>
                                <ul>
                                    {
                                        itemsArr.map((item, itemIndex) => (
                                            <li
                                                key={`${itemArrIndex}${itemIndex}`}
                                                onClick={item.onClick}>
                                                    <Button onClick={item.onClick} projectType={['transparent', 'contextMenu_item']}>
                                                        {item.label}
                                                    </Button>
                                            </li>
                                        ))
                                    }
                                </ul>
                                {
                                    itemArrIndex < itemsArr.length - 1 &&
                                    <span className={styles.divider}/>
                                }
                                
                            </Fragment>
                        ))
                    }
            </div>
        </Modal>
    );
};

export default memo(ContextMenu);