import { cn } from "@/utils/cn";
import React from "react";

export const BentoGrid = ({
                              className,
                              children,
                          }: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[10rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  title,
                                  description,
                                  header,
                                  icon,
                              }: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-2xl group/bento transition duration-200 p-5 border border-[var(--site-border)] bg-[var(--site-card)] hover:bg-[var(--site-panel)] hover:shadow-lg justify-between flex flex-col space-y-3",
                className
            )}
        >
            {header}
            <div className="transition duration-200">
                {icon ? <div className="text-[var(--site-accent)] mb-2">{icon}</div> : null}
                <div className="font-sans font-bold text-[var(--site-text)] mb-1 text-lg">
                    {title}
                </div>
                <div className="font-sans font-normal text-[var(--site-muted)] text-sm sm:text-base leading-relaxed">
                    {description}
                </div>
            </div>
        </div>
    );
};
