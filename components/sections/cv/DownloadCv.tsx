import React from "react";

const DownloadCv = () => {
    // TODO: Create download to pdf from html

    return (
        <>
            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                <span className="truncate font-medium">cv_anton_pekhov_backend_developer.pdf</span>
                <span className="flex-shrink-0 text-gray-400">299kb</span>
            </div>
            <div className="ml-4 flex-shrink-0">
                <a href="/assets/cv/cv_anton_pekhov_backend_developer.pdf"
                   download
                   className="font-medium text-indigo-600 hover:text-indigo-500">Download <span
                    aria-hidden="true">→</span>
                </a>
            </div>
        </>
    )
}

export {DownloadCv}