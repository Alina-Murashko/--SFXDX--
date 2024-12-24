import classNames from "classnames";
import {ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, memo} from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import s from './modal.module.scss';
import Union from "@/assets/icons/Union";

type Props = {
    children: ReactNode;
    classTypography?: string;
    onOpenChange: (open: boolean) => void;
    open: boolean;
    title?: string;
    classNameContent?: string;
} & Omit<ComponentPropsWithoutRef<typeof DialogPrimitive.Root>, "onOpenChange" | "open">;

export const Modal = memo(
    forwardRef<ElementRef<typeof DialogPrimitive.Content>, Props>(
        ({
             children,
             classNameContent,
             title,
             classTypography,
             ...props
         },
         ref) => (
            <DialogPrimitive.Root {...props}>
                <DialogPrimitive.Portal>
                    <DialogPrimitive.Overlay className={s.modalOverlay}>
                        <DialogPrimitive.Content
                            className={classNames(s.modalContent, classNameContent)}
                            ref={ref}
                            aria-describedby="dialog-description"
                        >
                            <div className={classNames(s.modalHeader)}>
                                {title && (
                                    <DialogPrimitive.Title asChild>
                                        <div
                                            className={classNames(
                                                s.modalTitle,
                                                classTypography,
                                            )}
                                        >
                                            <span>{title}</span>
                                        </div>
                                    </DialogPrimitive.Title>
                                )}
                                <DialogPrimitive.Close
                                    className={classNames(s.modalButton)}
                                >
                                    <Union/>
                                </DialogPrimitive.Close>
                            </div>
                            {children}
                        </DialogPrimitive.Content>
                    </DialogPrimitive.Overlay>
                </DialogPrimitive.Portal>
            </DialogPrimitive.Root>
        ),
    ),
);

Modal.displayName = "Modal";
