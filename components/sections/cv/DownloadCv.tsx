import React from "react";

const DownloadCv = () => {
    // TODO: Create download to pdf from html

    return (
        <>
            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20"
                     fill="currentColor"
                     aria-hidden="true">
                    <path fillRule="evenodd"
                          d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                          clipRule="evenodd"/>
                </svg>
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