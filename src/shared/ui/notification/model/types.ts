import use from './use';

export type NotificationProps = {
    options?: {
        disabledApp?: boolean;
        disabledDesktop?: boolean;
        visionTime?: number;
    };
};

export type Status = 'info' | 'success' | 'warning' | 'error' | 'inDev';

export type UseProps = {
    title: string;
    body?: string;
    scope?: 'app' | 'desktop' | 'all';
    system?: boolean;
    callback?: () => void;
};

export type Notification = {
    id: number;
    status: Status;
} & UseProps;
export type UseReturnedType = ReturnType<typeof use>;
