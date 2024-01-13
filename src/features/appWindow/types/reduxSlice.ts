export type Tab = {
    title: string;
    id?: string;
}

export type AddTabProps = {
    tab: Tab;
    options?: {
        setActive?: boolean;
    };
}