import React, { forwardRef, useEffect, useRef, useState } from 'react';

import { useClickAway, useEasyState, useStyles, useCallbackRef } from 'shared/hooks';
import { Box } from 'shared/ui/index';

import styles from './styles.module.scss';
import { useDimensionsObserver, useDebounce } from '../../../../hooks';
import { DynamicDropdownProps } from '../../types';

const DynamicDropdown = forwardRef<any, DynamicDropdownProps>((props, ref: any) => {
    const {
        children,
        visible,
        openCloseTrigger,
        content,
        reverseX,
        reverseY,
        trigger = 'left-click',
        animationVariant = 'visibleHidden',
        closeAfterClick,
        disabled,
        style,
    } = props;

    const childrenRef = useRef<HTMLDivElement>(null);
    const [wrapperRef, setWrapperRef] = useState(ref);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const positionState = useEasyState<{ x: number; y: number }>({ x: 0, y: 0 });
    const wrapperClickPosition = useEasyState<{ x: number; y: number }>({ x: 0, y: 0 });

    const wrapperWidth = useEasyState(0);

    useEffect(() => {
        ref.current &&
            new ResizeObserver((entries) => {
                setWrapperRef({ current: entries[0].target });
            }).observe(ref.current);
    }, []);

    const update = () => {
        wrapperRef.current.style.position = 'relative';
        const wrapperRect = wrapperRef.current?.getBoundingClientRect();
        wrapperRef?.current?.addEventListener('contextmenu', (e: MouseEvent) => {
            wrapperClickPosition.set({
                x: e.clientX - wrapperRect.left,
                y: e.pageY - wrapperRect.top + wrapperRef.current?.scrollTop,
            });
        });
    };

    useDebounce(update, 500, [wrapperRef?.current?.offsetWidth, wrapperRef?.current?.offsetHeight]);

    const updateX = (contentRect: any, wrapperRect: any, padding: any) => {
        if (reverseX) {
            if (wrapperClickPosition.value.x - padding < contentRect.width) {
                return positionState.set((prev) => {
                    prev.x = padding;
                });
            }
        } else if (wrapperRect.width - wrapperClickPosition.value.x - padding < contentRect.width) {
            return positionState.set((prev) => {
                prev.x = wrapperRect.width - contentRect.width - padding;
            });
        }
        positionState.set((prev) => {
            prev.x = reverseX ? wrapperClickPosition.value.x - contentRect.width : wrapperClickPosition.value.x;
        });
    };

    const updateY = (contentRect: any, wrapperRect: any, padding: any) => {
        if (reverseY) {
            if (wrapperClickPosition.value.y < contentRect.height) {
                return positionState.set((prev) => {
                    prev.y = padding;
                });
            }
        } else if (wrapperRef.current?.scrollTop + wrapperRect.height - wrapperClickPosition.value.y < contentRect.height) {
            return positionState.set((prev) => {
                prev.y = wrapperRef.current?.scrollTop + wrapperRect.height - padding - contentRect.height;
            });
        }
        positionState.set((prev) => {
            prev.y = reverseY ? wrapperClickPosition.value.y - contentRect.height : wrapperClickPosition.value.y;
        });
    };

    const contentRef = useCallbackRef<HTMLDivElement>((element) => {
        if (element) {
            const wrapperRect = wrapperRef.current?.getBoundingClientRect();
            const contentRect = element?.getBoundingClientRect();
            const paddingX = 34;
            const paddingY = 14;
            if (contentRect) {
                updateX(contentRect, wrapperRect, paddingX);
                updateY(contentRect, wrapperRect, paddingY);
            }
        }
    });

    useEffect(() => {
        update();
    }, []);

    useClickAway(childrenRef, () => {
        isOpen && setIsOpen(false);
    });

    useEffect(() => {
        !disabled && setIsOpen(!!visible);
    }, [visible]);

    const classes = useStyles(styles, 'content', {});

    const click = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        if (trigger !== null && !disabled) {
            setIsOpen(true);
        }
    };

    useEffect(() => {
        openCloseTrigger && openCloseTrigger(isOpen);
    }, [isOpen]);

    return (
        <div
            ref={childrenRef}
            className={styles.wrapper}
            onClick={trigger === 'left-click' ? click : undefined}
            onContextMenu={trigger === 'right-click' ? click : undefined}
            onMouseEnter={trigger === 'hover' ? click : undefined}
            onMouseLeave={trigger === 'hover' ? () => click : undefined}
        >
            {children}
            <Box.Animated
                ref={contentRef}
                animationVariant={animationVariant}
                className={classes}
                visible={visible || isOpen}
                style={{ top: positionState.value.y, left: positionState.value.x, ...style }}
                presence
                onClick={(e) => {
                    closeAfterClick && setIsOpen(false);
                    e.stopPropagation();
                }}
            >
                {content}
            </Box.Animated>
        </div>
    );
});

export default DynamicDropdown;
