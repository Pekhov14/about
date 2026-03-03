"use client";

import React from "react";
import { ImagesBadge } from "@/components/ui/images-badge";

const DownloadCv = () => {
    // TODO: Create download to pdf from html

    return (
        <>
            <div className="flex h-[8rem] w-full items-center justify-center">
                <a href="/assets/cv/cv_anton_pekhov_backend_developer.pdf"
                   download
                   className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                    <ImagesBadge
                        text="Download CV"
                        images={[
                            "./assets/cv/cv-icon.webp",
                        ]}
                        folderSize={{ width: 24, height: 18 }}
                        teaserImageSize={{ width: 14, height: 10 }}
                        hoverImageSize={{ width: 36, height: 24 }}
                        hoverTranslateY={-28}
                        hoverSpread={14}
                    />
                </a>
            </div>
        </>
    )
}

export {DownloadCv}