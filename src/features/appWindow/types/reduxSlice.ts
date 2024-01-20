export type Tab = {
    title: string;
    id?: string;
    category_id: string;
}

export type AddTabProps = {
    tab: Tab;
    options?: {
        setActive?: boolean;
    };
}