declare module 'react-vertical-timeline-component' {
    import { ComponentType, ReactNode, CSSProperties, MouseEventHandler } from 'react';

    export interface VerticalTimelineElementProps {
        children?: ReactNode;
        className?: string;
        contentArrowStyle?: CSSProperties;
        contentStyle?: CSSProperties;
        date?: string;
        dateClassName?: string;
        icon?: ReactNode;
        iconClassName?: string;
        iconOnClick?: MouseEventHandler;
        iconStyle?: CSSProperties;
        id?: string;
        intersectionObserverProps?: any; // Using any to be safe, or could use IntersectionObserverInit
        onTimelineElementClick?: MouseEventHandler; // The library might use this name, but the user is using onClick.
        onClick?: MouseEventHandler; // Adding this as requested to fix the error.
        position?: string;
        style?: CSSProperties;
        textClassName?: string;
        visible?: boolean;
        shadowSize?: string; // Sometimes used
    }

    export class VerticalTimeline extends React.Component<any> { }
    export class VerticalTimelineElement extends React.Component<VerticalTimelineElementProps> { }
}
